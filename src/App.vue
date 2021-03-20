<template>
  <div id="background-top">
  </div>
  <div id="nav">
    <router-link to="/">Présentation</router-link> |
    <router-link to="/explanation">Explication</router-link> |
    <router-link :class="{ underline : consequenceBool }" to="/demo">Demonstration</router-link>
  </div>
  <router-view @consequence="consequence"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
  data() {
    return ({consequenceBool : false});
  },
  methods: {
    consequence() {
      this.consequenceBool = true;
      console.log(this.consequenceBool);
    }
  }
})

export default class App extends Vue {
  msg!: string
  
}
</script>

<style lang="scss">

.main-component {
  margin-top: 2%;
}

.strong {
  font-weight: bold;
}

body {
  margin: 0px !important;
}

#background-top {
  position: absolute;
  height: 10%;
  width: 100%;
  background-color:#42b983;
}

#app {
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.2rem;
}

#nav {
  padding: 30px;
  position: relative;

  a {
    margin: 2%;
    font-weight: bold;
    font-size: 1.5rem;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active, .router-link-active {
      color: white;
      text-decoration: underline;
    }
  }
}

.router-link-active {
      color: white !important;
      text-decoration: underline !important;
}

</style>
