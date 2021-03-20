<template>
<div id="solution" class="main-component">
    <h1 class="strong"> How to Solve this vulnerability </h1>
    <p style="font-family: PT Sans,Helvetica,Arial,sans-serif"> Actually, the languages
      used on backend server integrate functions to avoid <span class="strong">XSS</span>.<br>
    These functons make it possible to sanitize user's inputs by turning them
    into string without being able to be interpreted as HTML </p><br>
     <div> </div>
     <div class="sanitize-img">
      <img style="width: 10%" src="../assets/php.png">
      <span class="sanitize"> htmlspecialchar(); </span>
     </div>
     <div class="sanitize-img">
      <img style="width: 10%" src="../assets/node.png">
      <span class="sanitize"> sanitize.value(); </span>
     </div>
      Most of the modern frontend frameworks automatically sanitize variables <br>
        <img style="width:15%; margin-top:1%" src="../assets/frontend.png">
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class Solution extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">

#frontend-display {
    display: flex;
    margin: 0 auto;
    margin-top: 4%;
    width: 21%;
    justify-content: center;
    justify-content: space-around;
}

br {
    display: block;
    margin: 10px 0;
}

.sanitize {
  display: block;
  padding-top: 2%;
  margin-left: 5%;
}

.sanitize-img {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 2%;
}

</style>
