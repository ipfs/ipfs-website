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
        light: '#f3f9fa',
        blue: '#1c4561',
        blueDark: '#18334c',
        teal: '#10D3D4',
        tealLight: '#d6edef',
        tealDark: '#10AAB2',
        tealTransparent: 'rgba(17,160,169,0.40)',
        orange: '#FFA135',
        yellow: '#FFE85E',
      },
    },
    fontSize: {
      '4xl': '2.5rem',
    },
    extend: {
      spacing: {
        112: '28rem',
        384: '96rem',
      },
    },
  },
  shortcuts: [
    ['btn', 'py-2 px-8 whitespace-nowrap bg-brand-teal text-white text-base font-semibold rounded-full cursor-pointer inline-block focus:outline-none scale-[0.99] hover:scale-100 active:scale-[0.98] transition duration-150'],
    ['btn-primary', 'bg-brand-orange text-black'],
    ['btn-outline', 'bg-transparent text-brand-teal border border-brand-teal'],
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
  safelist: 'grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5'.split(' '),
})
