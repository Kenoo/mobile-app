import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: function (resolve) {
        require(['modules/login/index'], resolve)
      }
    },
    {
      path: '/',
      name: 'Home',
      component: function (resolve) {
        require(['modules/home/index'], resolve)
      }
    },
    {
      path: '/upload',
      name: 'Upload',
      component: function (resolve) {
        require(['modules/upload/index'], resolve)
      }
    }
  ]
})
