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
    // let ipfsMatch = window.location.pathname.match(/\/ipfs\/[^/]+\//)
    // console.log(path)
    // console.log(ipfsMatch)
    // console.log(ipfsMatch ? ipfsMatch[0] + path : path)
    // return ipfsMatch ? ipfsMatch[0] + path : path
    const ipfsPathRegExp = /^(\/(?:ipfs|ipns)\/[^/]+)/
    console.log(ipfsPathRegExp)
    const ipfsPathPrefix = (window.location.pathname.match(ipfsPathRegExp) || [])[1] || ''
    console.log(ipfsPathPrefix)
    const base = ipfsPathPrefix ? `${ipfsPathPrefix}/` : ''
    console.log(base)
    console.log(path.charAt(0) === '/' ? `${base}${path.slice(1)}` : path)
    return path.charAt(0) === '/' ? `${base}${path.slice(1)}` : path
  }
  return ''
}

// ///////////////////////////////////////////////////////////// Export & Inject
// -----------------------------------------------------------------------------
export default ({}, inject) => {
  inject('relativity', Relativity)
}
