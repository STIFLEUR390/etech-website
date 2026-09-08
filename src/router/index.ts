import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
      meta: { title: 'ETECH KEYS — SMS, WhatsApp Business API & USSD Cameroun' },
    },
    {
      path: '/whatsapp-api',
      name: 'whatsapp-api',
      component: () => import('../pages/WhatsAppApiPage.vue'),
      meta: { title: 'WhatsApp Business API Cameroun | ETECH KEYS' },
    },
    {
      path: '/sms-telecom',
      name: 'sms-telecom',
      component: () => import('../pages/SmsTelecomPage.vue'),
      meta: { title: 'Bulk SMS Cameroun | Envoi SMS en Masse | ETECH KEYS' },
    },
    {
      path: '/tarifs',
      name: 'tarifs',
      component: () => import('../pages/PricingPage.vue'),
      meta: { title: 'Tarification SMS & WhatsApp | ETECH KEYS' },
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../pages/DocsPage.vue'),
      meta: { title: 'Documentation API | ETECH KEYS' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue'),
      meta: { title: 'Contact | ETECH KEYS — Douala Cameroun' },
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
})

// Update document title on navigation
router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'ETECH KEYS'
})

export default router
