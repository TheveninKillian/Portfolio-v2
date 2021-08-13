<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

useHead({
  title: 'Killian Thevenin | Contact',
})

const { t } = useI18n()
</script>

<template>
  <section p="lg:b-60px">
    <h2 class="page-title">
      {{ t('contact.title') }}
    </h2>

    <div class="form">
      <div p="t-30px x-15px" m="auto" w="md:650px xl:945px">
        <p m="b-40px">
          {{ t('contact.details') }}
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div display="md:flex" justify="md:between">
            <input type="text" :placeholder="t('contact.inputName')" required name="name">
            <input type="email" placeholder="Email" required name="email">
          </div>
          <textarea name="message" placeholder="Message" required></textarea>
          <input type="submit" :value="t('contact.submit')">
        </form>
      </div>
    </div>

    <div class="faq">
      <h2 class="page-title">
        FAQ
      </h2>

      <div>
        <ul>
          <li>
            <p font="bold">
              {{ t('contact.faq.one.title') }}
            </p>
            <p>{{ t('contact.faq.one.details') }}</p>
          </li>

          <li>
            <p font="bold">
              {{ t('contact.faq.two.title') }}
            </p>
            <p>{{ t('contact.faq.two.details') }}</p>
          </li>

          <li>
            <p font="bold">
              {{ t('contact.faq.three.title') }}
            </p>
            <p>{{ t('contact.faq.three.details') }}</p>
          </li>

          <li>
            <p font="bold">
              {{ t('contact.faq.four.title') }}
            </p>
            <p>{{ t('contact.faq.four.details') }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

.form{
  background-color: $color-black;
}

form{
  font-size: 18px;

  input, textarea{
    margin-bottom: 15px;
    width: 100%;

    background-color: $color-black;
    border: 1px solid $color-white;

    outline: none;
    transition: .3s;

    &:focus{
      border: 1px solid $color-primary;
    }
  }

  input{
    height: 40px;
    padding-left: 15px;

    @include breakpoint(sm){
      width: calc(768px / 3);
    }

    @include breakpoint(lg){
      width: 420px;
    }
  }

  input[type=submit]{
    margin-bottom: 30px;
    padding: 0;
    width: 110px;

    border: 1px solid $color-primary;
    color: $color-primary;

    cursor: pointer;
    transition: .3s;

    &:hover{
      background-color: $color-primary;
      color: $color-white;
    }
  }

  textarea{
    height: 120px;
    padding: 0 15px;
  }
}

.faq{
  ul{
    @include breakpoint(sm){
      margin: auto;
      width: 650px;
    }

    @include breakpoint(lg){
      width: 945px;
    }

    li{
      margin-bottom: 40px;

      text-align: center;

      @include breakpoint(1024){
        margin-bottom: 50px;
      }
    }
  }
}
</style>
