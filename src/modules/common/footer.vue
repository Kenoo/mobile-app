<template>
    <div class="sf-footer">
      <tabbar>
        <tabbar-item>
          <img slot="icon" src="./img/download.png">
          <span slot="label">主页</span>
        </tabbar-item>
        <tabbar-item show-dot>
          <img slot="icon" src="./img/download.png">
          <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item selected link="/component/demo">
          <img slot="icon" src="./img/download.png">
          <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item badge="2">
          <img slot="icon" src="./img/download.png">
          <span slot="label">个人信息</span>
        </tabbar-item>
      </tabbar>

    </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
