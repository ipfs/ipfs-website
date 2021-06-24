/*
 *
 * 🔌 [Plugin | NuxtPluginIpfs] Methods
 *
 */

console.log(`🔌 [Plugin | NuxtPluginIpfs] Methods`)

// /////////////////////////////////////////////////////////////////// Functions
// -----------------------------------------------------------------------------
// ------------------------------------------------------------------ relativity
const Relativity = function (path) {
  if (process.client) {
    // let ipfsMatch = window.location.pathname.match(/\/ipfs\/[^/]+\//)
    // console.log(ipfsMatch ? ipfsMatch[0] + path : path)
    // return ipfsMatch ? ipfsMatch[0] + path : path
    if (!path) { return '' }
    return path
    // const append = path.charAt(0) === '/' ? path.slice(1) : path
    // const ipfsPathRegExp = /^(\/(?:ipfs|ipns)\/[^/]+)/
    // const ipfsPathPrefix = (window.location.pathname.match(ipfsPathRegExp) || [])[1] || ''
    // if (ipfsPathPrefix) {
    //   return `${ipfsPathPrefix}/${append}`
    // } else {
    //   return path
    // }
  }
  return ''
}

// ///////////////////////////////////////////////////////////// Export & Inject
// -----------------------------------------------------------------------------
export default (ctx, inject) => {
  inject('relativity', Relativity)
}
