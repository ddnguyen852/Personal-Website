import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Intro from '@/components/Intro'
import Resume from '@/components/Resume'
import Projects from '@/components/Projects'
import Dance from '@/components/Dance'
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Dance',
      name: 'Dance',
      component: Dance
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
