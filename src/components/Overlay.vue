<script setup lang="ts">
const props = defineProps<{ opacity: number }>()

</script>

<template>
  <div class="overlay" :style="{ backgroundColor: `#000000${props.opacity}` }"></div>
</template>

<style lang="scss" scoped>
  .overlay{
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
</style>
