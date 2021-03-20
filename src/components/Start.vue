<template>
<div id="start" class="main-component">
    <h1 class="strong"> XSS Stocké </h1>
    <p style="font-family: PT Sans,Helvetica,Arial,sans-serif"> Bonjour à tous, aujourd'hui
      je vais tenter de vous expliquer par l'exemple
     une des failles web les plus connues : </p>
     <div> </div>
     <div style="margin-bottom: 2%" class="strong"> La faille XSS </div>
     <img style="width: 45%; margin-bottom: 2%"
     src="https://www.wpexplorer.com/wp-content/uploads/wordpress-cross-site-scripting-guide-prevention.png"><br>
     La <span class="strong">XSS</span> se décline sous plusieurs formes :
     <span class="strong">Réfléchie</span>, <span class="strong">Mutée</span> et autres. <br>
     J'expliquerais ici seulement la <span class="strong">Stockée</span>, étant la plus simple à
     comprendre
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">

br {
    display: block;
    margin: 10px 0;
}

</style>
