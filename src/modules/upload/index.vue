<template>
    <div>
        <h1>文件上传</h1>
        <multiple-file-uploader
          postURL="http://.."
          successMessagePath=""
          errorMessagePath=""></multiple-file-uploader>
      <sf-footer></sf-footer>

    </div>

</template>

<script>
  import MultipleFileUploader from 'vue2-multi-uploader'
  import SfFooter from 'modules/common/footer.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      MultipleFileUploader,
      SfFooter
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .uploadBox .dropArea {
    height: 20px!important;
  }
</style>
