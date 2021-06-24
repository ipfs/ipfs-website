/*
 *
 * 🔌 [Plugin | NuxtModuleIpfs] Methods
 *
 */

console.log(`🔌 [Module | NuxtModuleIpfs] Methods`)

// /////////////////////////////////////////////////////////////////// Functions
// -----------------------------------------------------------------------------
// ------------------------------------------------------------------ relativity
const Relativity = function (path) {
  if (process.client) {
    let ipfsMatch = window.location.pathname.match(/\/ipfs\/[^/]+\//)
    return ipfsMatch ? ipfsMatch[0] + path : path
  }
  return ''
}

// ///////////////////////////////////////////////////////////// Export & Inject
// -----------------------------------------------------------------------------
export default ({}, inject) => {
  inject('relativity', Relativity)
}
