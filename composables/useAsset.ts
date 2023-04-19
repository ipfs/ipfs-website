export function useAsset(path: string): string {
  const assets = import.meta.glob('~/assets/**/*.{svg,png,jpg}', {
    eager: true,
    import: 'default',
  })
  // @ts-expect-error: wrong type info
  return assets[`/assets/${path}`]
}
