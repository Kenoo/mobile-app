<template>
    <div class="login">
        <div class="header">用户登录</div>
        <group>
          <x-input title="用户名:" name="username" placeholder="请输入姓名" is-type="china-name">

          </x-input>
          <x-input title="密码:" placeholder="请输入密码" type="password" v-model="password"></x-input>

        </group>

        <x-button type="primary" class="btns">登录</x-button>
        <a href="#">忘记密码</a>
    </div>
</template>

<script>
  import { XInput, Group, XButton, Cell } from 'vux'
  export default {
    name: 'hello',

    components: {
      XInput,
      XButton,
      Group,
      Cell
    },
    data () {
      return {
        username: '',
        password: '',
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login {
      padding: 20px;
    }
    .login .header {
      margin-top: 20px;
      text-align: center;
    }
    .login .btns {
      margin-top: 10px;
    }

</style>
