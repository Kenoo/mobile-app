<template>
    <div class="hello">
        <h1 @click="goto('test')">{{ msg }}</h1>

    </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      goto (page) {
        this.$router.push(page)
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "style/index.less";
</style>
