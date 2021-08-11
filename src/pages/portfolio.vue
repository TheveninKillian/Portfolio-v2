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
  tictactoe: {
    img: '/src/assets/tictactoe.jpg',
    text: 'portfolio.img.tictactoe',
    url: 'https://codepen.io/Traffy/pen/ZEKwRMZ',
  },
  todo: {
    img: '/src/assets/todo.jpg',
    text: 'portfolio.img.todo',
    url: 'https://challenges-killian.vercel.app/Todo/index.html',
  },
  landing: {
    img: '/src/assets/landing.jpg',
    text: 'portfolio.img.landing',
    url: 'https://challenges-killian.vercel.app/landing-page/dist/index.html',
  },
  dashboard: {
    img: '/src/assets/Dashboard.jpg',
    text: 'portfolio.img.dashboard',
    url: 'https://challenges-killian.vercel.app/Dashboard/dist/index.html',
  },
  stream: {
    img: '/src/assets/stream.jpg',
    text: 'portfolio.img.stream',
    url: 'https://streamweb.netlify.app/',
  },
  akaruu: {
    img: '/src/assets/akaruu.jpg',
    text: 'portfolio.img.akaruu',
    url: 'https://chrome.google.com/webstore/detail/akaruu/ggnddmahllpbohpjficfmlkkeapdicdg?hl=fr',
  },
  mcu: {
    img: '/src/assets/mcu.jpg',
    text: 'portfolio.img.mcu',
    url: 'https://mcu-fr.netlify.app/',
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
        <div class="grid-tips">
          <p>{{ t(item.text) }}</p>
          <a :href="item.url">
            <button>{{ t('portfolio.button') }}</button>
          </a>
        </div>
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
    align-items: center;

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
      position: relative;

      margin-bottom: 20px;

      @include breakpoint(1024){
        padding: 0 10px;
        width: calc(100% / 3);
      }

      @include breakpoint(lg){
        width: 350px;
        height: 250px;
      }

      &:hover .grid-tips{
        opacity: 1;
      }

      img{
        width: 100%;
        height: 100%;
      }

      .grid-tips{
        position: absolute;
        top: 0;

        opacity: 0;

        height: 100%;
        padding: 30px 30px 0 30px;
        width: 100%;

        background-color: #7410f7fa;

        transition: opacity .5s;

        @include breakpoint(sm){
          width: calc(100% - 20px);
        }

        p{
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
        }

        button{
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);

          padding: 5px 20px;

          border: 2px solid $color-black;
          border-radius: 5px;

          font-size: 1.2rem;
          font-weight: bold;

          transition: .5s;

          &:hover{
            background-color: $color-black;
            border: 2px solid $color-secondary;
          }
        }
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

      .grid-tips{
        @include breakpoint(1024){
          width: calc(100% - 30px);
        }
      }
    }
  }
</style>
