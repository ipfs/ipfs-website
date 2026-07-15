export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^[a-z]+:/i

export function normalize(path) {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}

export function isExternal(path) {
  return outboundRE.test(path)
}

export function isMailto(path) {
  return path.startsWith('mailto:')
}

export function isTel(path) {
  return path.startsWith('tel:')
}

export function ensureExt(path) {
  if (isExternal(path))
    return path

  const hashMatch = path.match(hashRE)
  const hash = hashMatch ? hashMatch[0] : ''
  const normalized = normalize(path)

  if (endingSlashRE.test(normalized))
    return path

  return normalized + hash
}
