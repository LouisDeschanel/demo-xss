<template>
<div id="start" class="main-component">
    <h1 class="strong"> Stored XSS </h1>
    <p style="font-family: PT Sans,Helvetica,Arial,sans-serif"> Hi everyone,
     today i will try to explain to you one of the most famous web vulnerabilities:
     </p>
     <div> </div>
     <div style="margin-bottom: 2%" class="strong"> The XSS </div>
     <img style="width: 45%; margin-bottom: 2%"
     src="https://www.wpexplorer.com/wp-content/uploads/wordpress-cross-site-scripting-guide-prevention.png"><br>
     The <span class="strong">XSS</span> comes in several forms :
     <span class="strong">Reflected</span>, <span class="strong">Mutated</span> and others. <br>
     I chose to explain only the<span class="strong">
       stored</span> because it's the easiest to understand.
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class Start extends Vue {
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
