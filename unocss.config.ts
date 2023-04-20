import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      brand: {
        dark: '#0D0F18',
        yellow: '#FFE85E',
        teal: '#10D3D4',
        orange: '#FFA135',
      },
    },
    fontSize: {
      '4xl': '2.5rem',
    },
  },
  shortcuts: [
    ['btn', 'py-2 px-8 whitespace-nowrap bg-brand-teal text-white text-base font-semibold rounded-full cursor-pointer inline-block focus:outline-none scale-[0.99] hover:scale-100 active:scale-[0.98] transition duration-150'],
    ['btn-primary', 'bg-brand-orange/95 text-black hover:bg-brand-yellow'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'IBM Plex Sans:400,700',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
