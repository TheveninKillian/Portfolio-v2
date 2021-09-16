<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { handleResize } from '~/resize'
import { recoverDevice } from '~/device'

const { t } = useI18n()

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('resize', recoverDevice)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('resize', recoverDevice)
})
</script>

<template>
  <section class="primary" :class="recoverDevice()">
    <div class="primary-container" :class="recoverDevice()" pos="relative" text="center" style="z-index: 10;">
      <h1 text="uppercase">
        {{ t('index.title') }}
      </h1>

      <p m="b-5 xl:b-10">
        {{ t('index.sub') }}
      </p>

      <div>
        <a href="https://github.com/TheveninKillian"><carbon:logo-github /></a>
        <a href="https://twitter.com/Killian_Thvn"><ant-design:twitter-circle-filled m="x-8" /></a>
        <a href="mailto:thevenin.killian@gmail.com"><cib:mail-ru /></a>
      </div>
    </div>

    <div class="primary-img">
      <div class="bg-img"></div>
    </div>
  </section>

  <section class="about" text="center" p="t-50px b-100px">
    <h2>{{ t('about.title') }}</h2>

    <div m="t-30px" text="left md:center">
      <p>{{ t('about.primary') }}</p>
      <p m="t-5">
        {{ t('about.second') }}
      </p>
      <p m="t-5">
        {{ t('about.third') }}
      </p>
      <p m="t-5">
        {{ t('about.fourth') }}
      </p>
    </div>
  </section>

  <section class="skills" pos="relative">
    <div class="skills-container" pos="relative -top-50px" display="lg:flex">
      <div>
        <la:tools />
        <h3>{{ t('skills.primary') }}</h3>

        <ul>
          <li><akar-icons:figma-fill /> Figma</li>
          <li><cib:adobe-photoshop /> Photoshop</li>
          <li><codicon:terminal-cmd /> CMD</li>
        </ul>
      </div>

      <div>
        <fa-solid:laptop-code />
        <h3>{{ t('skills.second') }}</h3>

        <ul>
          <li><ant-design:html5-outlined /> HTML</li>
          <li><uil:html3-alt /> CSS / SASS</li>
          <li><teenyicons:javascript-outline /> Javascript</li>
          <li><bx:bxs-file-json /> JSON</li>
          <li><file-icons:typescript /> Typescript</li>
          <li><cib:vue-js /> Vue</li>
          <li><cib:wordpress /> Wordpress</li>
        </ul>
      </div>

      <div>
        <carbon:overflow-menu-horizontal />
        <h3>{{ t('skills.third') }}</h3>

        <ul>
          <li><ant-design:api-outlined /> API</li>
          <li><teenyicons:firebase-outline /> Firebase</li>
          <li><bx:bxl-git /> Git / Github</li>
          <li><cib:netlify /> Netlify</li>
          <li><ri:npmjs-line /> NPM</li>
          <li><ion:logo-pwa /> PWA</li>
          <li><file-icons:vite /> Vite JS</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import '../scss/variables';
  @import '../scss/mixins';

  .primary{
    position: relative;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    height: calc(100vh - 50px);

    overflow: hidden;

    z-index: 1;

    &.tablet{
      align-items: flex-start;

      .primary-img{
        .bg-img{
            top: 20vh;

            background-size: 70vh;
        }
      }
    }

    &.desktop{
      @include breakpoint(lg){
        align-items: center;
        justify-content: flex-start;
        height: calc(100vh - 75px);
      }
    }

    .overlay{
      height: calc(100vh - 50px);

      @include breakpoint(lg){
        height: calc(100vh - 75px);
      }
    }

    &-container{
      bottom: calc(50vh / 3);

      &.tablet{
        bottom: inherit;
        top: 15vh;
      }

      &.desktop{
        @include breakpoint(lg){
          bottom: inherit;

          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 250px;
          width: 50%;

          border-right: 1px solid white;
        }

        @include breakpoint(xl){
          height: 350px;
        }
      }
    }

    &-img{
      position: absolute;
      top: 0;
      left: 0;

      height: calc(100vh - 50px);
      width: 100%;

      @include breakpoint(lg){
        position: relative;

        width: 50%;
      }

      .bg-img{
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-image: url("../assets/me.webp");
        background-size: calc(100vh - 50px);
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    svg{
      width: 35px;
      height: 35px;

      transition: .4s;

      &:hover{
        color: $color-primary;
      }
    }
  }

  .about{
    background-color: $color-primary;

    p{
      line-height: 18px;
    }
  }

  .skills{
    &-container{
      margin: auto;
      width: calc(100% - 20px);
      max-width: 1200px;

      background-color: $color-black;

      @include breakpoint(sm){
        width: calc(100% - 50px);
      }

      @include breakpoint(lg){
        width: calc(100% - 100px);
      }

      div{
        padding: 40px;

        text-align: center;

        @include breakpoint(1024){
          width: calc(100% / 3);
        }

        svg{
          width: 30px;
          height: 30px;

          @include breakpoint(1024){
            width: 40px;
            height: 40px;
          }
        }
      }

      div:nth-child(1),
      div:nth-child(2){
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);

        @include breakpoint(1024){
          border-bottom: none;
          border-right: 1px solid rgba(255, 255, 255, 0.5);
        }
      }

      h3{
        margin: 20px 0;

        text-transform: uppercase;

        font-weight: bold;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
          width: calc(100% / 2);

          text-align: left;

          &:nth-child(even){
            text-align: right;
          }

          svg{
            position: relative;
            top: 3px;

            width: 16px;
            height: 16px;

            @include breakpoint(sm){
              width: 18px;
              height: 18px;
            }

            @include breakpoint(lg){
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
</style>
