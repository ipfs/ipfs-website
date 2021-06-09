<template>
  <a
    v-if="href"
    :href="href"
    :class="classnames"
    @click="onClick({ text, href })"
  >
    {{ text }}
    <slot />
  </a>
  <button v-else :class="classnames" @click="onClick({ text, href })">
    {{ text }}
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'secondary',
      validator: (value) => {
        return ['primary', 'secondary'].indexOf(value) !== -1;
      },
    },
    text: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    href: {
      type: String,
      default: '',
    },
  },
  computed: {
    classnames() {
      const defaultClasses =
        'inline-block px-3 py-2 font-semibold rounded transition duration-300 ease-in-out';

      if (this.type === 'primary') {
        return (
          defaultClasses + ' text-white bg-blueGreen hover:bg-blueGreenScreen'
        );
      }

      return (
        defaultClasses +
        ' bg-white text-blueGreen border border-white hover:bg-gray-200'
      );
    },
  },
};
</script>
