<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/plugins/unhead'
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  MessageSquare,
  Send,
  PhoneCall,
  Cloud,
  Headphones,
  Building2,
} from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t } = useI18n()

usePageSeo(
  'À Propos | ETECH KEYS — Leader SMS & WhatsApp Cameroun',
  'Depuis 2010, ETECH KEYS accompagne les entreprises camerounaises dans leur transformation digitale.'
)

const stats = [
  { value: '15+', label: 'Années d\'expérience' },
  { value: '200+', label: 'Clients actifs' },
  { value: '50M+', label: 'SMS envoyés' },
  { value: '99%', label: 'Disponibilité plateforme' },
]

const offices = [
  { city: 'Douala', type: 'Siège principal', phone: null },
  { city: 'Yaoundé', type: 'Bureau régional', phone: '+237 652 780 640' },
  { city: 'Bafoussam', type: 'Agence', phone: '+237 652 780 642' },
  { city: 'International', type: 'SMS vers 200+ pays', phone: null },
]

const values = [
  { icon: Building2, title: 'Expertise locale', desc: 'Connaissance approfondie du marché camerounais, des opérateurs MTN, Orange et Camtel.' },
  { icon: CheckCircle2, title: 'Réactivité', desc: 'Support technique disponible et réactif. Messages livrés même en cas de panne partielle grâce au retry.' },
  { icon: Shield, title: 'Fiabilité', desc: 'Infrastructure hébergée sur serveurs dédiés OVH Paris avec sauvegardes quotidiennes et monitoring 24/7.' },
  { icon: Users, title: 'Partenariat', desc: 'Nous construisons des relations durables. Votre succès est notre priorité.' },
]

const services = [
  { icon: MessageSquare, title: 'WhatsApp Business API', desc: 'Messages, templates, chatbot', to: '/whatsapp-api', color: 'bg-brand-green' },
  { icon: Send, title: 'Bulk SMS', desc: 'SMS locaux & internationaux', to: '/sms-telecom', color: 'bg-brand-blue-primary' },
  { icon: PhoneCall, title: 'Code USSD', desc: 'Menus interactifs sans Internet', to: '/ussd', color: 'bg-orange-500' },
  { icon: Hash, title: 'Numéro Court', desc: '5 chiffres, SMS entrants', to: '/numero-court', color: 'bg-purple-500' },
  { icon: Headphones, title: 'Serveur Vocal', desc: 'IVR, appels automatiques', to: '/serveur-vocal', color: 'bg-pink-500' },
  { icon: Cloud, title: 'Hébergement Cloud', desc: 'VPS, serveurs dédiés locaux', to: '/cloud', color: 'bg-indigo-500' },
]

const team = [
  { name: 'Arnaud NGUEGUIM', role: 'Directeur Général', initials: 'AN', desc: 'Fondateur d\'ETECH KEYS, expert en télécommunications depuis plus de 15 ans.' },
  { name: 'Marina ETIA', role: 'Directrice Administrative & Financière', initials: 'ME', desc: 'Responsable de la gestion financière et administrative, garante de la rigueur.' },
  { name: 'Équipe Technique', role: 'Support & Développement', initials: 'ET', desc: 'Notre équipe technique assure l\'intégration et le support 7j/7.' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-green/5 rounded-full blur-3xl"></div>
      </div>
      <div class="container-custom">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green-light dark:bg-brand-green/10 border border-brand-green/20 mb-6">
          <span class="text-sm font-semibold text-brand-green-emerald dark:text-brand-green">À propos de nous</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-brand-dark dark:text-white leading-tight max-w-3xl">
          Leader camerounais des solutions de communication digitale
        </h1>
        <p class="mt-6 text-lg text-brand-slate dark:text-gray-300 max-w-2xl">
          Depuis 2010, ETECH KEYS accompagne les entreprises camerounaises dans leur transformation digitale avec des solutions SMS, WhatsApp et télécom fiables.
        </p>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-12 border-y border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <p class="text-3xl md:text-4xl font-extrabold text-brand-green">{{ stat.value }}</p>
            <p class="text-sm text-brand-slate dark:text-gray-400 mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-extrabold text-brand-dark dark:text-white mb-6">
            Depuis 2010, au service des entreprises camerounaises
          </h2>
          <div class="space-y-4 text-brand-slate dark:text-gray-300 leading-relaxed">
            <p>
              ETECH KEYS est un cabinet d'études et de conseils spécialisé en informatique et télécommunications, basé à Douala, Cameroun. Fondé en 2010, nous sommes devenus le partenaire de référence pour les solutions SMS, WhatsApp Business API et services à valeur ajoutée télécom au Cameroun.
            </p>
            <p>
              Notre expertise couvre l'ensemble de la chaîne de communication digitale : de l'envoi de SMS en masse à l'intégration de WhatsApp Business API pour les grandes entreprises, en passant par les codes USSD, numéros courts, serveurs vocaux et hébergement cloud local.
            </p>
          </div>
          <div class="flex flex-wrap gap-3 mt-6">
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green-light dark:bg-brand-green/10 text-sm font-medium text-brand-green">
              <MessageSquare :size="14" /> Meta Tech Provider
            </span>
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue-light dark:bg-brand-blue-primary/10 text-sm font-medium text-brand-blue-primary">
              <CheckCircle2 :size="14" /> Opérateurs agréés MTN & Orange
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Offices -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-brand-dark dark:text-white">
            Nos bureaux
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div v-for="office in offices" :key="office.city" class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 text-center">
            <MapPin :size="24" class="text-brand-green mx-auto mb-3" />
            <h3 class="font-bold text-brand-dark dark:text-white">{{ office.city }}</h3>
            <p class="text-sm text-brand-slate dark:text-gray-400">{{ office.type }}</p>
            <a v-if="office.phone" :href="`tel:${office.phone}`" class="text-sm text-brand-blue-primary hover:underline mt-2 block">
              {{ office.phone }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-brand-dark dark:text-white">
            Ce qui nous différencie
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div v-for="value in values" :key="value.title" class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10">
            <div class="w-12 h-12 rounded-xl bg-brand-green-light dark:bg-brand-green/10 flex items-center justify-center mb-4">
              <component :is="value.icon" :size="24" class="text-brand-green" />
            </div>
            <h3 class="text-lg font-bold text-brand-dark dark:text-white mb-2">{{ value.title }}</h3>
            <p class="text-sm text-brand-slate dark:text-gray-400">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-brand-dark dark:text-white">
            Une offre complète
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <RouterLink v-for="service in services" :key="service.title" :to="service.to" class="p-6 rounded-2xl bg-white dark:bg-brand-dark/50 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" :class="service.color">
              <component :is="service.icon" :size="24" class="text-white" />
            </div>
            <h3 class="font-bold text-brand-dark dark:text-white mb-1 group-hover:text-brand-green transition-colors">{{ service.title }}</h3>
            <p class="text-sm text-brand-slate dark:text-gray-400">{{ service.desc }}</p>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-brand-dark dark:text-white">
            Les personnes derrière ETECH KEYS
          </h2>
        </div>
        <div class="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div v-for="member in team" :key="member.name" class="text-center">
            <div class="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-white">{{ member.initials }}</span>
            </div>
            <h3 class="font-bold text-brand-dark dark:text-white">{{ member.name }}</h3>
            <p class="text-sm text-brand-green font-medium">{{ member.role }}</p>
            <p class="text-sm text-brand-slate dark:text-gray-400 mt-2">{{ member.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-brand-dark">
      <div class="container-custom text-center max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Prêt à démarrer votre projet ?
        </h2>
        <p class="text-lg text-gray-300 mb-8">
          Contactez-nous dès aujourd'hui pour une démonstration gratuite.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton to="/contact" variant="primary" color="green" size="lg">
            Nous contacter
            <ArrowRight :size="18" />
          </BaseButton>
          <a href="https://vas.etech-keys.com" target="_blank" class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
            Accéder à la plateforme
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Hash, Shield } from 'lucide-vue-next'
</script>
