<template>
  <div>
    <group>
      <cell is-link title="Upload" link="upload"></cell>
      <cell is-link title="Switch icons" link="/"></cell>
    </group>
    <sf-footer></sf-footer>
  </div>
</template>

<script>
  import SfFooter from 'modules/common/footer.vue'

  export default {
    components: {
      SfFooter
    }
  }
</script>
