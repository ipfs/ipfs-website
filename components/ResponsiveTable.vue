<script setup lang="ts">
interface Props {
  colLabels: string[]
  rows: {
    heading: string
    cols: string[][]
  }[]
}
defineProps<Props>()
</script>

<template>
  <table>
    <thead>
      <tr>
        <th />
        <th v-for="colLabel in colLabels" :key="colLabel">
          {{ colLabel }}
        </th>
      </tr>
    </thead>
    <tbody v-for="(row, rowIndex) in rows" :key="rowIndex">
      <tr>
        <td :colspan="colLabels.length + 1">
          {{ row.heading }}
        </td>
      </tr>
      <tr v-for="(cols, colIndex) in row.cols" :key="colIndex">
        <td v-if="colIndex === 0">
          {{ row.heading }}
        </td>
        <td v-else />
        <td v-for="col in cols" :key="col">
          {{ col }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="postcss">
table {
  @apply w-full mt-14;
}
thead tr {
  @apply bg-brand-teal-dark/70 text-white;
}
thead tr th {
  @apply py-3.5 px-6 text-xl text-left;
}
thead tr th:first-child {
  @apply hidden sm:block;
}
tbody {
  @apply border-b border-brand-teal-dark;
}
tbody td {
  @apply lg:py-4 py-3 px-6 text-xl;
}
tbody td:first-child {
  @apply font-bold;
}
tbody tr:not(:first-child) td:first-child {
  @apply hidden sm:block;
}
tbody tr:first-child {
  @apply sm:hidden;
}
tbody tr:first-child td {
  @apply pt-7;
}
tbody tr:nth-child(2) td {
  @apply md:pt-8;
}
tbody tr:last-child td {
  @apply pb-8;
}
</style>
