<script setup lang="ts">
interface Props {
  annotations: Array<string>
}
defineProps<Props>()
</script>

<template>
  <ul class="annotations absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl hidden lg:block">
    <li v-for="(annotation, index) in annotations" :key="index" :class="`annotation annotation${index + 1}`">
      {{ annotation }}
      <img :src="`/images/ribbon-annotation-${index + 1}.svg`" class="absolute">
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.annotation {
  @apply absolute w-60 text-left;
}

.annotation1 {
  top: -353px;
  left: -420px;
}

.annotation2 {
  top: -290px;
  left: -190px;
}

.annotation3 {
  top: -353px;
  left: 116px;
}

.annotation4 {
  top: -290px;
  left: 170px;
}

.annotation5 {
  bottom: -300px;
  left: -450px;
}

.annotation6 {
  bottom: -350px;
  left: -188px;
}

.annotation7 {
  bottom: -330px;
  left: 0px;
}

.annotation8 {
  bottom: -350px;
  left: 385px;
}

.annotation1 img {
  top: 30px;
}

.annotation2 img {
  top: 30px;
}

.annotation3 img {
  top: 30px;
  left: 185px;
}

.annotation4 img {
  top: 30px;
  left: -65px;
}

.annotation5 img {
  bottom: 30px;
  left: 0px;
}

.annotation6 img {
  bottom: 30px;
  left: -90px;
}

.annotation7 img {
  bottom: 60px;
  left: 0px;
}

.annotation8 img {
  bottom: 30px;
  left: -85px;
}
</style>
