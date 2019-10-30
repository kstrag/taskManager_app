import Vue from 'vue'
import VueRouter from 'vue-router'
import createTask from '../components/Tasks/createTask'
import taskList from '../components/Tasks/taskList'
import Profile from '../components/User/Profile'
import signIn from '../components/User/signIn'
import signUp from '../components/User/signUp'
import Home from '../components/Home'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/task/new',
        name: 'Dodaj zadanie',
        component: createTask
    },
    {
        path: '/tasks',
        name: 'Lista zadań',
        component: taskList
    },
    {
        path: '/profile',
        name: 'Profil',
        component: Profile
    },
    {
        path: '/login',
        name: 'Panel logowania',
        component: signIn
    },
    {
        path: '/register',
        name: 'Panel rejestracji',
        component: signUp
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
