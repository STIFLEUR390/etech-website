# 🔑 ETECH KEYS Website

Site web officiel d'ETECH KEYS — Tech Provider Meta WhatsApp Business Officiel au Cameroun.

[![GitHub](https://img.shields.io/badge/GitHub-ETECH%20KEYS-181717?style=flat-square&logo=github)](https://github.com/STIFLEUR390/etech-website)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-42b883?style=flat-square&logo=vuedotjs)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

## 🌟 À propos

ETECH KEYS est un fournisseur de solutions de communication numérique au Cameroun, spécialisé dans :
- **WhatsApp Business API** — Templates, notifications OTP, marketing
- **Bulk SMS** — MTN, Orange, Nexttel, Camtel
- **Codes USSD** — Menus interactifs sans internet
- **Numéros courts** — Jeux concours, enquêtes
- **Serveurs vocaux (SVI)** — Messages préenregistrés
- **Call Center Cloud** — Supervision temps réel
- **Hébergement Cloud** — VPS, serveurs dédiés

## 🛠️ Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| Vue.js | 3.5 | Framework UI |
| Vite | 8.x | Build tool |
| Tailwind CSS | 3.4 | Styling |
| Pinia | 4.x | State management |
| Vue Router | 5.x | Routing SPA |
| vue-i18n | 10.x | Internationalisation (FR/EN) |
| Lucide Icons | 1.x | Icônes |
| @vueuse/core | 14.x | Utilitaires |

## 📁 Structure du projet

```
src/
├── assets/
│   └── main.css              # Design system Tailwind
├── components/
│   ├── layout/
│   │   ├── AppNavbar.vue     # Navigation glassmorphism
│   │   └── AppFooter.vue     # Footer complet
│   ├── ui/
│   │   ├── BaseButton.vue    # Bouton réutilisable
│   │   ├── PricingCard.vue   # Carte tarifaire
│   │   └── CodeSnippet.vue   # Bloc de code coloré
│   └── interactive/
│       ├── PhoneSimulator.vue        # Simulateur smartphone
│       ├── WaPricingCalculator.vue   # Calculateur coût WhatsApp
│       └── PricingTable.vue          # Tableau tarifaire
├── i18n/
│   └── locales/
│       ├── fr.json           # Traductions françaises
│       └── en.json           # Traductions anglaises
├── pages/
│   ├── HomePage.vue          # Page d'accueil
│   ├── WhatsAppApiPage.vue   # API WhatsApp Business
│   ├── SmsTelecomPage.vue    # Bulk SMS & Télécom
│   ├── PricingPage.vue       # Tarification
│   ├── DocsPage.vue          # Documentation API
│   └── ContactPage.vue       # Contact & Support
├── plugins/
│   └── unhead.ts             # Helper SEO
├── router/
│   └── index.ts              # Routes lazy-loaded
├── stores/
│   ├── theme.ts              # Dark/Light mode
│   └── language.ts           # FR/EN switch
├── App.vue
└── main.ts
```

## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/STIFLEUR390/etech-website.git
cd etech-website

# Installer les dépendances
bun install

# Lancer le serveur de développement
bun dev
```

## 📝 Commandes disponibles

| Commande | Description |
|----------|-------------|
| `bun dev` | Serveur de développement (localhost:5173) |
| `bun run build` | Build de production |
| `bun run preview` | Prévisualisation du build |
| `bun run type-check` | Vérification TypeScript |
| `bun lint` | Lint avec ESLint + OxLint |
| `bun format` | Formatage avec Prettier |

## 🌐 Pages du site

| Route | Page | Description |
|-------|------|-------------|
| `/` | Accueil | Hero, métriques, services, Meta Provider |
| `/whatsapp-api` | WhatsApp API | Features, Embedded Signup, calculateur |
| `/sms-telecom` | SMS & Télécom | Opérateurs, types SMS, API |
| `/tarifs` | Tarification | SMS, WhatsApp, Revendeurs |
| `/docs` | Documentation | API SMS, WhatsApp, SMPP, Webhooks |
| `/contact` | Contact | Formulaire, WhatsApp direct |

## 🌍 Internationalisation

Le site supporte le **français** et l'**anglais** grâce à vue-i18n. Le changement de langue persiste dans le localStorage.

```bash
# Vérifier les clés i18n
npx vue-i18n-extract report --vueFiles 'src/**/*.vue' --languageFiles 'src/i18n/locales/*.json'
```

## 🎨 Design System

### Couleurs
- **Bleu nuit** : `#0A2540` (fond principal)
- **Bleu royal** : `#0066FF` (CTA)
- **Vert émeraude** : `#10B981` (accent)
- **Vert WhatsApp** : `#25D366` (badge Meta)

### Typographie
- **Principale** : Plus Jakarta Sans
- **Code** : JetBrains Mono

### Composants
- Glassmorphism (navbar)
- Dark/Light mode
- Animations CSS (fade-in, slide-up)
- Responsive mobile/tablet/desktop

## 📦 Déploiement

Le site peut être déployé sur :
- **Vercel** : `vercel --prod`
- **Netlify** : Connecter le repo GitHub
- **Cloudflare Pages** : Builder `bun run build`, output `dist/`

## 🔧 SEO

Chaque page dispose de métadonnées OpenGraph et Twitter Cards pour un partage optimal sur les réseaux sociaux.

## 📄 Licence

Propriétaire — ETECH KEYS. Tous droits réservés.

---

**ETECH KEYS** — Tech Provider Meta WhatsApp Business Officiel
📞 +237 243 161 184 | +237 695 686 207
🌐 [etech-keys.com](https://etech-keys.com)
