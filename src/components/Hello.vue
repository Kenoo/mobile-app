<template>
  <div>
    <group>
      <cell title="title" value="1">
        <span @click="goto('a')">2</span>
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
