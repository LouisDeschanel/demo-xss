<template>
  <div id="cause" class="main-component">
    Le but d'une <span class="strong">XSS</span> va être d'ajouter (ou de modifier) du contenu à une page une page web.<br>

    Le mécanisme explicant cette faille est assez simple à comprendre. <br>
    Elle commence avec une variable envoyé à un serveur, tel un formulaire pour ajouter un post sur un forum par exemple.<br>
    Lorsque cette variable va être envoyer au serveur elle va être stocker en base de données <br>
    
    <img style="width: 50%" alt="Send XSS attack schema" src="../assets/XSS_send.png"> <br>

    La base de données va renvoyer la variable lors de l'actualisation<br>
    Elle sera alors insérée dans la page et interprétée en tant que membre de la page HTML (DOM) à cause des balises<br>
    
    Dans le cas d'une balise contenant du script JS, ce dernier va être exécuté sur le navigateur du visteur.<br>

    Un attaquant n'aura qu'ầ ajouter un code permettant de rediriger l'utilisateur sur son serveur avec ses cookies pour les récupérer et les utiliser.<br>
    Cette technique peut aussi être utiliser dans le cadre du defacing (la modification de la presentation d'un site web) afin d'inserer des elements visuels<br>

    Après ces explications techniques, passons à un exemple visuel.<br>
    Mais bien d'autres manière de procéder existe, je vous invite à consulter la page de l'OWASP à ce sujet : https://owasp.org/www-community/xss-filter-evasion-cheatsheet

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
</style>
