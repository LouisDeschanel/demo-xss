<template>
  <div id="explanation" class="main-component">
    <div id="nav">
    <router-link to="/explanation">Cause</router-link> |
    <router-link ref="consequence" to="/explanation/consequence">Consequence</router-link>
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
  mounted() {
    this.$nextTick(function(this: Explanation) {
      if (this.$route.fullPath == "/explanation/consequence") {
        this.$emit('consequence');
      }
    });
  }
})
export default class Explanation extends Vue {
  msg!: string
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#nav {
  margin-top: -2%;

  a {
    color: #2c3e50 !important;
    text-decoration: none !important;
    &.router-link-exact-active {
      color:#42b983 !important;
      text-decoration: underline !important;
    }
  }
}
</style>
