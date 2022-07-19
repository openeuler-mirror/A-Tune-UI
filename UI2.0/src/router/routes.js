
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Control-panel.vue') }
    ]
  },
  // {
  //   path: '/command',
  //   component: () => import('layouts/UserLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Execute-command.vue') }
  //   ]
  // },
  {
    path: '/command',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NewCommand/NewCommand.vue') }
    ]
  },
  {
    path: '/information',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Realtime-information.vue') }
    ]
  },
  {
    path: '/record',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Command-record.vue') }
    ]
  },
  {
    path: '/contact',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Contact-us.vue') }
    ]
  },
  {
    path: '/personal',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Personal.vue') }
    ]
  },
  {
    path: '/offline',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Offline-tuning.vue') }
    ]
  },
  {
    path: '/online',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Online-tuning.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/About-A-Tune.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
