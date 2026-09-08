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
      meta: { title: 'WhatsApp Business API Cameroun | Tech Provider Meta | ETECH KEYS' },
    },
    {
      path: '/sms-telecom',
      name: 'sms-telecom',
      component: () => import('../pages/SmsTelecomPage.vue'),
      meta: { title: 'Bulk SMS Cameroun | Envoi SMS en Masse | ETECH KEYS' },
    },
    {
      path: '/numero-court',
      name: 'numero-court',
      component: () => import('../pages/NumeroCourtPage.vue'),
      meta: { title: 'Numéro Court Cameroun | ETECH KEYS' },
    },
    {
      path: '/ussd',
      name: 'ussd',
      component: () => import('../pages/UssdPage.vue'),
      meta: { title: 'Code USSD Cameroun | Menu interactif | ETECH KEYS' },
    },
    {
      path: '/serveur-vocal',
      name: 'serveur-vocal',
      component: () => import('../pages/ServeurVocalPage.vue'),
      meta: { title: 'Serveur Vocal SVI Cameroun | ETECH KEYS' },
    },
    {
      path: '/call-center',
      name: 'call-center',
      component: () => import('../pages/CallCenterPage.vue'),
      meta: { title: 'Call Center Cloud Cameroun | ETECH KEYS' },
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: () => import('../pages/CloudPage.vue'),
      meta: { title: 'Hébergement Cloud Cameroun | ETECH KEYS' },
    },
    {
      path: '/tarifs',
      name: 'tarifs',
      component: () => import('../pages/PricingPage.vue'),
      meta: { title: 'Tarifs SMS & WhatsApp Business | ETECH KEYS' },
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
    {
      path: '/a-propos',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
      meta: { title: 'À Propos | ETECH KEYS — Leader SMS & WhatsApp Cameroun' },
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
