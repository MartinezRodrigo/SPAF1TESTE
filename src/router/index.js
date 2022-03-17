import Vue from 'vue'
import VueRouter from 'vue-router'
import PilotosF1 from '../views/PilotosF1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PilotosF1',
    component: PilotosF1
  },

]

const router = new VueRouter({
  routes
})

export default router
