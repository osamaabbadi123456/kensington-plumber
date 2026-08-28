const netlifyContext = process.env.NETLIFY === "true" ? process.env.CONTEXT : undefined;

export const isNetlifyPreview = Boolean(
  netlifyContext && netlifyContext !== "production",
);
