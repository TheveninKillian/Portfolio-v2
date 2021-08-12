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

    <div></div>
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
</style>
