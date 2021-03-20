<template>
  <div id="cause" class="main-component">
    <p>The purpose of a
      <span class="strong">XSS</span>
      is to add or modify some content on a website<br>

    It's pretty easy to understand how this vulnerability works <br>
    It starts when a <span class="strong">user's input </span> sent to a
    <span class="strong">backend server</span>,
    like a form to add a post on a forum for example.<br>
    When the server receives this variable, it will store it in a <span class="strong">
      database</span> <br> </p>
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
