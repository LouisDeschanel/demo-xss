<template>
  <div id="consequence" class="main-component">
    <p> The <span class="strong">database</span> will return the variable on refresh<br>
    It will be inserted into the web page and interpreted as a member of the
    <span class="strong">DOM</span> (HTML Code)<br>
    In the case of a tag containing <span class="strong">Javascript</span>,
    the code will be executed on the visitor's browser.<br> </p>
    <img style="width: 50%" alt="Get XSS attack schema" src="../assets/XSS_back.png"> <br>
    <p> A hacker will only have to add a code that will redirect
      the <span class="strong">user's cookies</span> on his own server.<br>
    The XSS can also be used to  <span class="strong">deface</span>
     (Visual modification on a website)<br>
    You can exploit XSS in others ways, I suggest you to consult the  <span class="strong">OWASP</span> website to improve your knowledge : <a href="https://owasp.org/www-community/xss-filter-evasion-cheatsheet">Here</a> <br> </p>
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
