/*
 *
 * 🔌 [Plugin | NuxtPluginIpfs] Methods
 *
 */

console.log(`🔌 [Plugin | NuxtPluginIpfs] Methods`);

// /////////////////////////////////////////////////////////////////// Functions
// -----------------------------------------------------------------------------
// ------------------------------------------------------------------ relativity
const Relativity = function (path) {
  if (process.client) {
    if (!path) {
      return '';
    }
    const ipfsMatch = window.location.pathname.match(
      /^(\/(?:ipfs|ipns)\/[^/]+)/
    );
    return ipfsMatch ? ipfsMatch[0] + path : path;
  }
  return path;
};

// ///////////////////////////////////////////////////////////// Export & Inject
// -----------------------------------------------------------------------------
export default (ctx, inject) => {
  inject('relativity', Relativity);
};
