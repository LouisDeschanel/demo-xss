<template>
<div id="demo" class="main-component">
  <div id="forum-code">
  {{ htmlContent + ((htmlXSS) ?
  '    <div class="forum-post">\n        <script>alert(\'lol\')><\/script>\n    </div>\n</div>'
  : '</div>\n\n\n\n')}}
   </div>
  <div id="forum-html">
    <h1>Forum</h1>
    <div id="forum">
        <div class="forum-post">
            Hello !!
        </div>
        <div class="forum-post">
            Hi, how are you ?
        </div>
        <div v-if="htmlXSS" class="forum-post">
        </div>
    </div>
    <input style="margin-top: 10%" value="<script>alert('lol')</script>">
    <button @click="htmlXSS = true">Post</button>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
  data() {
    return ({
      htmlContent: '<div>\n    <h1>\n        Forum\n    </h1>\n    <div id="forum">\n        <div class="forum-post">\n            Hello\n        </div>\n        <div class="forum-post">\n            Hi\n        </div>\n    </div>\n',
      htmlXSS: false,
    });
  },
})
export default class Demo extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#demo {
  display: flex;
  border: 3px #42b983 solid;
  justify-content: space-between;
  width: 38%;
}

#forum-html {
  border-left: #42b983 3px solid;
  padding-left: 15%;
  margin-right: 15%;
}

#forum-code {
  white-space: pre;
  text-align: start !important;
}

.forum-post {
  margin-bottom: 1%;
  border: 1px black solid;
}
</style>
