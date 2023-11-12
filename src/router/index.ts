import { createRouter, createWebHistory } from 'vue-router'
import TasksList from '@/views/TasksListView.vue'
import TaskDetailView from '@/views/TaskDetailView.vue'
import AboutView from '@/views/AboutView.vue' 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TasksList
    },
    {
      path: '/task-detail/:id',
      name: 'task-detail',
      props: true,
      component: TaskDetailView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
