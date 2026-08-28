const isNetlifyDeployment = process.env.NETLIFY === "true";

// A Netlify main-branch build has CONTEXT=production, but the netlify.app
// hostname is still a preview until the owner explicitly authorises indexing.
// Keep every Netlify deployment noindex by default; enable indexing only with
// the owner-controlled build variable after the approved public launch.
const hasApprovedNetlifyIndexing =
  process.env.NETLIFY_PUBLIC_INDEXING === "true";

export const isNetlifyPreview =
  isNetlifyDeployment && !hasApprovedNetlifyIndexing;
