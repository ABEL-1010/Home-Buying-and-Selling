import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css';
import Home from '@/views/Home.vue'
import SellView from '@/views/SellView.vue'
import RentView from '@/views/RentView.vue'
import BuyView from '@/views/BuyView.vue'
import SigninView from '@/views/SigninView.vue'
import AdminView from '@/views/AdminView.vue'
import AUserManagement from '@/components/AUserManagement.vue'
import ASiteSetting from '@/components/ASiteSetting.vue'
import AContentManagement from '@/components/AContentManagement.vue'
import CreateAccView from '@/views/CreateAccView.vue';
import AgentView from '@/views/AgentView.vue'


 // Import your components

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Buy',
    name: 'Buy',
    component: BuyView
  },
  {
    path: '/Sell',
    name: 'Sell',
    component: SellView
  },
  {
    path: '/Rent',
    name: 'Rent',
    component: RentView
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: SigninView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
    children:[
      {
        path: 'user-management',
        name: 'UserManagement',
        component: AUserManagement
      },
      {
        path: 'site-settings',
        name: 'SiteSettings',
        component: ASiteSetting
      },
      {
        path:'content-management',
        name:'ContentManagement',
        component:AContentManagement
      },
    ]
  },
  {
    path: '/Create-account',
    name: 'CreateAccount',
    component: CreateAccView
  },
  {
    path: '/agent',
    name: 'Agent',
    component: AgentView
  },

  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.Base_URL),
  routes,
})

export default router