<template>
  <div id="consequence" class="main-component">
    <p> La base de données va renvoyer la variable lors de l'actualisation<br>
    Elle sera alors insérée dans la page et interprétée en tant que membre de la
    page HTML (DOM) à cause des balises<br>
    Dans le cas d'une balise contenant du script JS,
    ce dernier va être exécuté sur le navigateur du visteur.<br> </p>
    <img style="width: 50%" alt="Get XSS attack schema" src="../assets/XSS_back.png"> <br>
    <p> Un attaquant n'aura qu'ầ ajouter un code permettant de rediriger l'utilisateur sur son
      serveur avec ses cookies pour les récupérer et les utiliser.<br>
    Cette technique peut aussi être utiliser dans le cadre du defacing
     (la modification de la presentation d'un site web) afin d'inserer des elements visuels<br>
    Bien d'autres manière de procéder existe, je vous invite à consulter la page de l'OWASP à ce sujet : <a href="https://owasp.org/www-community/xss-filter-evasion-cheatsheet">Here</a> <br> </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class Consequence extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#consequence {
  margin-top: 1%;
}

p {
  line-height: 2.5rem;
}

img {
  margin: 1% 0;
}
</style>
