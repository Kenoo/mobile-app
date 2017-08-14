<template>
  <div>
    <group>
      <cell title="title22" value="2122">
        <span @click="goto('a')">sss</span>
      </cell>
    </group>
  </div>
</template>

<script>
  import { Group, Cell } from 'vux'

  export default {
    components: {
      Group,
      Cell
    },
    methods: {
      goto (page) {
        this.$router.push(page)
      }
    }
  }
</script>
