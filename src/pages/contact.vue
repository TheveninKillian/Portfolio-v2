<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Killian Thevenin | Contact',
})
</script>

<template>
  <section p="lg:b-60px">
    <h2 class="page-title">
      Me contacter
    </h2>

    <div class="form">
      <div p="t-30px x-15px" m="auto" w="md:650px xl:945px">
        <p m="b-40px">
          Merci de donner un maximum de détail sur le projet afin que je puisse évaluer correctement la charge de travail que représente votre projet. Pour obtenir un devis : préciser le dans le message s'il vous plaît.
        </p>

        <form>
          <div display="md:flex" justify="md:between">
            <input type="text" placeholder="Nom" required>
            <input type="email" placeholder="Email" required>
          </div>
          <textarea id="" name="" placeholder="Message" required></textarea>
          <input type="submit" value="Envoyer">
        </form>
      </div>
    </div>

    <div
      class="faq"
      name="form 1"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <h2 class="page-title">
        FAQ
      </h2>

      <div>
        <ul>
          <li>
            <p font="bold">
              Quels sont vos disponibilités ?
            </p>
            <p>Je suis actuellement disponible.</p>
          </li>

          <li>
            <p font="bold">
              Quels sont vos tarifs ?
            </p>
            <p>La tarification dépend du projet et surtout du temps qui sera nécessaire pour le mener à bien. À titre indicatif mon tarif journalier moyen se situe aux alentour de 125€/jour.  </p>
          </li>

          <li>
            <p font="bold">
              Effectuez-vous des missions en Agence ?
            </p>
            <p>J'effectue l'ensemble de mes missions à distance.</p>
          </li>

          <li>
            <p font="bold">
              Faites-vous la partie design des projets ?
            </p>
            <p>Je ne suis malheureusement pas en capacité d'effectuer le design d'une application aussi il sera nécessaire de fournir le design si la mission le nécessite.</p>
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
