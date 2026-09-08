<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { Phone, Mail, MapPin } from 'lucide-vue-next'

const { t } = useI18n()

const currentYear = new Date().getFullYear()

const serviceLinks = [
  { label: 'WhatsApp Business API', to: '/whatsapp-api' },
  { label: 'Bulk SMS', to: '/sms-telecom' },
  { label: 'Code USSD', to: '/sms-telecom' },
  { label: 'Numéro Court', to: '/sms-telecom' },
  { label: 'Documentation API', to: '/docs' },
]

const companyLinks = [
  { label: 'Tarifs', to: '/tarifs' },
  { label: 'Contact', to: '/contact' },
  { label: 'Status API', to: '#', external: false },
]

const legalLinks = [
  { label: 'CGU', to: '#' },
  { label: 'Confidentialité', to: '#' },
]
</script>

<template>
  <footer class="bg-brand-dark text-gray-400">
    <!-- Main Footer -->
    <div class="container-custom py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <RouterLink to="/" class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue-primary to-brand-green flex items-center justify-center">
              <span class="text-white font-bold text-lg">E</span>
            </div>
            <span class="text-xl font-bold text-white">
              ETECH <span class="text-brand-green">KEYS</span>
            </span>
          </RouterLink>
          <p class="text-sm leading-relaxed mb-6">
            {{ t('footer.description') }}
          </p>
          <!-- Meta Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            <div class="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
            <span class="text-xs font-medium text-brand-green">{{ t('footer.metaBadge') }}</span>
          </div>
        </div>

        <!-- Services Column -->
        <div>
          <h3 class="text-white font-semibold mb-4">{{ t('footer.services') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks" :key="link.label">
              <RouterLink
                :to="link.to"
                class="text-sm hover:text-brand-green transition-colors"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Company Column -->
        <div>
          <h3 class="text-white font-semibold mb-4">{{ t('footer.company') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.label">
              <RouterLink
                :to="link.to"
                class="text-sm hover:text-brand-green transition-colors"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h3 class="text-white font-semibold mb-4">{{ t('footer.contact') }}</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <MapPin :size="16" class="mt-0.5 shrink-0" />
              <span class="text-sm">{{ t('footer.address') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <Phone :size="16" class="mt-0.5 shrink-0" />
              <div class="text-sm">
                <a href="tel:+237243161184" class="block hover:text-brand-green transition-colors">+237 243 161 184</a>
                <a href="tel:+237695686207" class="block hover:text-brand-green transition-colors">+237 695 686 207</a>
              </div>
            </li>
          </ul>
          <!-- App ID -->
          <div class="mt-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            <span class="text-xs text-gray-500">App ID</span>
            <p class="text-xs font-mono text-brand-green">929194900001617</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm">
          {{ t('footer.copyright') }}
        </p>
        <div class="flex items-center gap-6">
          <RouterLink
            v-for="link in legalLinks"
            :key="link.label"
            :to="link.to"
            class="text-sm hover:text-brand-green transition-colors"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
