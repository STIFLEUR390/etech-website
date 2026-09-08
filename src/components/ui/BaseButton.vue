<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Loader2 } from 'lucide-vue-next'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  color?: 'blue' | 'green'
  loading?: boolean
  disabled?: boolean
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  color: 'green',
  loading: false,
  disabled: false,
  type: 'button',
  icon: false,
})

const Tag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const tagProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  return { type: props.type }
})

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  // Sizes
  const sizes = {
    sm: props.icon ? 'p-2' : 'px-4 py-2 text-sm gap-1.5',
    md: props.icon ? 'p-2.5' : 'px-6 py-3 text-sm gap-2',
    lg: props.icon ? 'p-3' : 'px-8 py-4 text-base gap-2.5',
  }

  // Color + Variant combos
  const variants = {
    primary: {
      blue: 'bg-brand-blue-primary text-white hover:bg-blue-600 shadow-brand focus:ring-brand-blue-primary',
      green: 'bg-brand-green text-white hover:bg-brand-green-emerald shadow-brand-green focus:ring-brand-green',
    },
    secondary: {
      blue: 'bg-brand-blue text-white hover:bg-brand-blue/90 focus:ring-brand-blue',
      green: 'bg-brand-green text-white hover:bg-brand-green-emerald focus:ring-brand-green',
    },
    outline: {
      blue: 'border-2 border-brand-blue-primary text-brand-blue-primary hover:bg-brand-blue-primary hover:text-white focus:ring-brand-blue-primary',
      green: 'border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white focus:ring-brand-green',
    },
    ghost: {
      blue: 'text-brand-blue-primary hover:bg-brand-blue-light dark:hover:bg-brand-blue-primary/10 focus:ring-brand-blue-primary',
      green: 'text-brand-green hover:bg-brand-green-light dark:hover:bg-brand-green/10 focus:ring-brand-green',
    },
  }

  return `${base} ${sizes[props.size]} ${variants[props.variant][props.color]}`
})
</script>

<template>
  <Tag :class="classes" v-bind="tagProps">
    <Loader2 v-if="loading" :size="size === 'sm' ? 14 : size === 'lg' ? 20 : 16" class="animate-spin" />
    <slot v-else />
  </Tag>
</template>
