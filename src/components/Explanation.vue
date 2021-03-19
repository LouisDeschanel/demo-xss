<template>
  <div id="explanation" class="main-component">
    <div id="nav">
    <router-link to="/explanation">Cause</router-link> |
    <router-link to="/explanation/consequence">Consequence</router-link>
  </div>
  <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class Explanation extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
