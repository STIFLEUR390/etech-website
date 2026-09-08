<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/language'
import { useThemeStore } from '@/stores/theme'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-vue-next'

const { t } = useI18n()
const langStore = useLanguageStore()
const themeStore = useThemeStore()
const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { key: 'services', to: '/sms-telecom' },
  { key: 'whatsapp', to: '/whatsapp-api' },
  { key: 'pricing', to: '/tarifs' },
  { key: 'docs', to: '/docs' },
  { key: 'contact', to: '/contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
        <RouterLink
          v-for="link in navLinks"
          :key="link.key"
          :to="link.to"
          class="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
          :class="[
            route.path === link.to
              ? 'text-brand-blue-primary bg-brand-blue-light dark:bg-brand-blue-primary/10 dark:text-brand-blue-primary'
              : 'text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5'
          ]"
        >
          {{ t(`nav.${link.key}`) }}
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
          <RouterLink
            v-for="link in navLinks"
            :key="link.key"
            :to="link.to"
            class="block px-4 py-3 text-sm font-medium rounded-lg transition-colors"
            :class="[
              route.path === link.to
                ? 'text-brand-blue-primary bg-brand-blue-light dark:bg-brand-blue-primary/10'
                : 'text-brand-slate hover:text-brand-dark hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5'
            ]"
            @click="closeMobileMenu"
          >
            {{ t(`nav.${link.key}`) }}
          </RouterLink>
          <RouterLink
            to="/contact"
            class="block px-4 py-3 text-sm font-medium text-white bg-brand-green hover:bg-brand-green-emerald rounded-lg transition-colors text-center mt-2"
            @click="closeMobileMenu"
          >
            {{ t('nav.cta') }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
