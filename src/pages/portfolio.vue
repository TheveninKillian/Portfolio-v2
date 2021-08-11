<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { reactive, onBeforeUnmount, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { recoverDevice } from '~/device'

useHead({
  title: 'Killian Thevenin | Portfolio',
})

const { t } = useI18n()

const portfolio = reactive({
  un: {
    img: '//via.placeholder.com/350x250',
  },
  deux: {
    img: '//via.placeholder.com/350x250',
  },
  trois: {
    img: '//via.placeholder.com/350x250',
  },
  quatre: {
    img: '//via.placeholder.com/350x250',
  },
  cinq: {
    img: '//via.placeholder.com/350x250',
  },
  six: {
    img: '//via.placeholder.com/350x250',
  },
  sept: {
    img: '//via.placeholder.com/350x250',
  },
})

onMounted(() => {
  window.addEventListener('resize', recoverDevice)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', recoverDevice)
})
</script>
<template>
  <section p="lg:b-60px">
    <h2 class="page-title">
      {{ t("portfolio.title") }}
    </h2>

    <div class="grid">
      <div v-for="(item, key) in portfolio" :key="key" class="grid-container" :class="recoverDevice()">
        <img :src="item.img">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import '../scss/variables';
  @import '../scss/mixins';

  .grid{
    display: flex;
    flex-direction: column;

    @include breakpoint(sm){
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    @include breakpoint(lg){
      width: calc(350px * 3 + 20px * 2);
      margin: auto;
    }

    &-container{
      margin-bottom: 20px;

      @include breakpoint(1024){
        padding: 0 10px;
        width: calc(100% / 3);
      }

      @include breakpoint(lg){
        width: 350px;
        height: 250px;
      }

      img{
        width: 100%;
      }
    }

    .tablet{
      padding: 0 10px;
      width: 350px;
      height: 250px;

      @include breakpoint(1024){
        margin-bottom: 30px;

        padding: 0 15px;
      }
    }
  }
</style>
