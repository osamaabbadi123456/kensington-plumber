import { spawn } from "node:child_process";
import { createServer } from "node:net";

const port = 3401;
const baseUrl = `http://127.0.0.1:${port}`;

function run(command, args, options = {}) {
  return spawn(command, args, { cwd: process.cwd(), stdio: "inherit", windowsHide: true, ...options });
}

function waitForExit(child) {
  if (child.exitCode !== null || child.signalCode !== null) {
    return Promise.resolve(child.exitCode ?? 1);
  }

  return new Promise((resolve, reject) => {
    child.once("error", reject);
    child.once("exit", (code) => resolve(code ?? 1));
  });
}

async function assertPortAvailable() {
  const probe = createServer();

  await new Promise((resolve, reject) => {
    probe.once("error", reject);
    probe.listen(port, resolve);
  });

  await new Promise((resolve, reject) => {
    probe.close((error) => (error ? reject(error) : resolve()));
  });
}

async function waitForServer() {
  const deadline = Date.now() + 120_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The local production server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Timed out waiting for the local smoke-test server at ${baseUrl}.`);
}

let server;

try {
  await assertPortAvailable();
  server = run(process.execPath, ["./node_modules/next/dist/bin/next", "start", "--port", String(port)]);
  await waitForServer();

  const test = run(process.execPath, ["./node_modules/@playwright/test/cli.js", "test", "tests/smoke.spec.ts"], {
    env: {
      ...process.env,
      PLAYWRIGHT_EXTERNAL_SERVER: "1",
      PLAYWRIGHT_PORT: String(port),
      PLAYWRIGHT_BASE_URL: baseUrl,
    },
  });
  process.exitCode = await waitForExit(test);
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  if (server && !server.killed) server.kill();
  if (server) await waitForExit(server).catch(() => undefined);
}
