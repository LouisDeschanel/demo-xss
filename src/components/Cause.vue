<template>
  <div id="cause" class="main-component">
    <p>Le but d'une
      <span class="strong">XSS</span>
      va être d'ajouter (ou de modifier) du contenu à une page une page web.<br>

    Le mécanisme explicant cette faille est assez simple à comprendre. <br>
    Elle commence avec une variable envoyé à un serveur,
    tel un formulaire pour ajouter un post sur un forum par exemple.<br>
    Lorsque cette variable va être envoyer au serveur
    elle va être stocker en base de données <br> </p>
    <img style="width: 50%" alt="Send XSS attack schema" src="../assets/XSS_send.png"> <br>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class Cause extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#cause {
  margin-top: 1%;
}

p {
  line-height: 3rem;
}

img {
  margin-top: 3%;
}

</style>
