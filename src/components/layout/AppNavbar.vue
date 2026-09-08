<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/language'
import { useThemeStore } from '@/stores/theme'
import { Menu, X, Sun, Moon, ChevronDown, MessageSquare, Send, Hash, PhoneCall, Headphones, Cloud, Code2, Plug } from 'lucide-vue-next'

const { t } = useI18n()
const langStore = useLanguageStore()
const themeStore = useThemeStore()
const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isServicesOpen = ref(false)
const isServicesMobileOpen = ref(false)

const services = [
  { key: 'whatsapp', icon: MessageSquare, to: '/whatsapp-api', color: 'text-brand-green' },
  { key: 'sms', icon: Send, to: '/sms-telecom', color: 'text-brand-blue-primary' },
  { key: 'shortNumber', icon: Hash, to: '/numero-court', color: 'text-purple-500' },
  { key: 'ussd', icon: PhoneCall, to: '/ussd', color: 'text-orange-500' },
  { key: 'voiceServer', icon: Headphones, to: '/serveur-vocal', color: 'text-pink-500' },
  { key: 'callCenter', icon: Headphones, to: '/call-center', color: 'text-cyan-500' },
  { key: 'cloud', icon: Cloud, to: '/cloud', color: 'text-indigo-500' },
  { key: 'api', icon: Code2, to: '/docs', color: 'text-emerald-600' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  isServicesMobileOpen.value = false
}

function closeServices() {
  isServicesOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', closeServices)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', closeServices)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'glass-strong shadow-glass-lg'
        : 'bg-transparent'
    ]"
  >
    <nav class="container-custom h-16 md:h-20 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group" @click="closeMobileMenu">
        <img src="/logo.svg" alt="ETECH KEYS" class="h-10 w-auto" />
      </RouterLink>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center gap-1">
        <!-- Services Dropdown -->
        <div class="relative" @click.stop>
          <button
            @click="isServicesOpen = !isServicesOpen"
            class="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="[
              route.path.startsWith('/whatsapp-api') || route.path.startsWith('/sms-telecom') || route.path.startsWith('/numero-court') || route.path.startsWith('/ussd') || route.path.startsWith('/serveur-vocal') || route.path.startsWith('/call-center') || route.path.startsWith('/cloud')
                ? 'text-brand-blue-primary bg-brand-blue-light dark:bg-brand-blue-primary/10 dark:text-brand-blue-primary'
                : 'text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5'
            ]"
          >
            {{ t('nav.services') }}
            <ChevronDown :size="14" class="transition-transform" :class="isServicesOpen ? 'rotate-180' : ''" />
          </button>

          <!-- Dropdown -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 scale-95 -translate-y-1"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 -translate-y-1"
          >
            <div
              v-if="isServicesOpen"
              class="absolute top-full left-0 mt-2 w-64 rounded-xl glass-strong shadow-glass-lg border border-gray-200/50 dark:border-white/10 p-2"
            >
              <RouterLink
                v-for="service in services"
                :key="service.key"
                :to="service.to"
                class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
                @click="isServicesOpen = false"
              >
                <component :is="service.icon" :size="18" :class="service.color" />
                {{ t(`services.items.${service.key}.title`) }}
              </RouterLink>
            </div>
          </Transition>
        </div>

        <RouterLink
          to="/tarifs"
          class="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
          :class="[
            route.path === '/tarifs'
              ? 'text-brand-blue-primary bg-brand-blue-light dark:bg-brand-blue-primary/10 dark:text-brand-blue-primary'
              : 'text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5'
          ]"
        >
          {{ t('nav.pricing') }}
        </RouterLink>

        <RouterLink
          to="/contact"
          class="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
          :class="[
            route.path === '/contact'
              ? 'text-brand-blue-primary bg-brand-blue-light dark:bg-brand-blue-primary/10 dark:text-brand-blue-primary'
              : 'text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5'
          ]"
        >
          {{ t('nav.contact') }}
        </RouterLink>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-2">
        <!-- Language Switcher -->
        <button
          @click="langStore.toggle()"
          class="px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          :title="langStore.currentLocale === 'fr' ? 'Switch to English' : 'Passer en français'"
        >
          {{ langStore.currentLocale === 'fr' ? 'EN' : 'FR' }}
        </button>

        <!-- Theme Toggle -->
        <button
          @click="themeStore.toggle()"
          class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-brand-slate dark:text-gray-300"
          :title="themeStore.isDark ? 'Mode clair' : 'Mode sombre'"
        >
          <Sun v-if="themeStore.isDark" :size="18" />
          <Moon v-else :size="18" />
        </button>

        <!-- Login Button -->
        <a
          href="https://vas.etech-keys.com"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-brand-dark dark:text-white text-sm font-medium rounded-lg transition-colors"
        >
          {{ t('nav.login') }}
        </a>

        <!-- CTA Button -->
        <RouterLink
          to="/contact"
          class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-brand-green hover:bg-brand-green-emerald text-white text-sm font-medium rounded-lg transition-colors shadow-brand-green"
        >
          {{ t('nav.cta') }}
        </RouterLink>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-brand-dark dark:text-white"
        >
          <Menu v-if="!isMobileMenuOpen" :size="22" />
          <X v-else :size="22" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden glass-strong border-t border-gray-200/50 dark:border-white/10"
      >
        <div class="container-custom py-4 space-y-1">
          <!-- Services Mobile -->
          <button
            @click="isServicesMobileOpen = !isServicesMobileOpen"
            class="w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5"
          >
            {{ t('nav.services') }}
            <ChevronDown :size="16" class="transition-transform" :class="isServicesMobileOpen ? 'rotate-180' : ''" />
          </button>

          <!-- Services Submenu -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="isServicesMobileOpen" class="pl-4 overflow-hidden">
              <RouterLink
                v-for="service in services"
                :key="service.key"
                :to="service.to"
                class="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 transition-colors"
                @click="closeMobileMenu"
              >
                <component :is="service.icon" :size="16" :class="service.color" />
                {{ t(`services.items.${service.key}.title`) }}
              </RouterLink>
            </div>
          </Transition>

          <RouterLink
            to="/tarifs"
            class="block px-4 py-3 text-sm font-medium rounded-lg text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5"
            @click="closeMobileMenu"
          >
            {{ t('nav.pricing') }}
          </RouterLink>

          <RouterLink
            to="/contact"
            class="block px-4 py-3 text-sm font-medium rounded-lg text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5"
            @click="closeMobileMenu"
          >
            {{ t('nav.contact') }}
          </RouterLink>

          <a
            href="https://vas.etech-keys.com"
            target="_blank"
            rel="noopener noreferrer"
            class="block px-4 py-3 text-sm font-medium rounded-lg text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5"
            @click="closeMobileMenu"
          >
            {{ t('nav.login') }}
          </a>

          <RouterLink
            to="/contact"
            class="block px-4 py-3 text-sm font-medium text-white bg-brand-green hover:bg-brand-green-emerald rounded-lg text-center mt-2"
            @click="closeMobileMenu"
          >
            {{ t('nav.cta') }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
