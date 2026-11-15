import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/features/home/views/HomeView.vue'
import BuyView from '@/features/properties/views/BuyView.vue'
import SellView from '@/features/properties/views/SellView.vue'
import RentView from '@/features/properties/views/RentView.vue'
import AgentView from '@/features/agents/views/AgentView.vue'
import SignInView from '@/features/auth/views/SignInView.vue'
import CreateAccountView from '@/features/auth/views/CreateAccountView.vue'
import AdminLayout from '@/features/admin/components/AdminLayout.vue'
import UserManagementView from '@/features/admin/views/UserManagementView.vue'
import SiteSettingsView from '@/features/admin/views/SiteSettingsView.vue'
import ContentManagementView from '@/features/admin/views/ContentManagementView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/Buy',
    name: 'Buy',
    component: BuyView,
  },
  {
    path: '/Sell',
    name: 'Sell',
    component: SellView,
  },
  {
    path: '/Rent',
    name: 'Rent',
    component: RentView,
  },
  {
    path: '/agent',
    name: 'Agent',
    component: AgentView,
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: SignInView,
  },
  {
    path: '/Create-account',
    name: 'CreateAccount',
    component: CreateAccountView,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    children: [
      {
        path: 'user-management',
        name: 'UserManagement',
        component: UserManagementView,
      },
      {
        path: 'site-settings',
        name: 'SiteSettings',
        component: SiteSettingsView,
      },
      {
        path: 'content-management',
        name: 'ContentManagement',
        component: ContentManagementView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
