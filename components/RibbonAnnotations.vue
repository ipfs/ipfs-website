<script setup lang="ts">
interface Props {
  annotations: string[]
}
defineProps<Props>()
</script>

<template>
  <ul class="annotations absolute left-1/2 top-1/2 z-1 hidden text-sm lg:block -translate-x-1/2 -translate-y-1/2">
    <li v-for="(annotation, index) in annotations" :key="index" :class="`annotation annotation${index + 1}`">
      {{ annotation }}
      <img :src="useAsset(`images/ribbon-annotation-${index + 1}.svg`)" class="absolute">
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
  left: 125px;
}

.annotation4 img {
  top: 30px;
  left: -95px;
}

.annotation5 img {
  bottom: 30px;
  left: 0px;
}

.annotation6 img {
  bottom: 30px;
  left: -130px;
}

.annotation7 img {
  bottom: 35px;
  left: 0px;
}

.annotation8 img {
  bottom: 30px;
  left: -105px;
}
</style>
