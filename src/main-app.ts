import {Route, Router } from "@vaadin/router"

const routes: Route[] = [
  {
    path: '/',
    component: 'gh-home',
    action:  async () => { await import('./pages/home'); },
  },
  {
    path: '/about',
    component: 'gh-about',
    action:  async () => { await import('./pages/about'); },
  },
  {
    path: '/sketch/:id',
    component: 'gh-sketch',
    action:  async () => { await import('./pages/sketch'); },
  }
]

export const router = new Router(document.querySelector('main-app'));
router.setRoutes(routes);

declare global {
  interface Window {
    P5?: any;
  }
}
