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
    console.log(path)
    console.log(ipfsMatch)
    console.log(ipfsMatch ? ipfsMatch[0] + path : path)
    return ipfsMatch ? ipfsMatch[0] + path : path
  }
  return ''
}

// ///////////////////////////////////////////////////////////// Export & Inject
// -----------------------------------------------------------------------------
export default ({}, inject) => {
  inject('relativity', Relativity)
}
