<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Send, Code2, Eye } from 'lucide-vue-next'
import { useCvModal } from '../composables/useCvModal'

const { openCvModal } = useCvModal()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40

  const sections = ['hero', 'about', 'projets', 'competences', 'parcours', 'contact']
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = section
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#hero"
        class="group flex items-center gap-2.5 font-mono text-lg font-bold text-white tracking-tight"
      >
        <span class="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
          <Code2 class="w-5 h-5" />
        </span>
        <span class="group-hover:text-teal-400 transition-colors">Maxence<span class="text-teal-400">.dev</span></span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-md">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200"
          :class="activeSection === item.href.slice(1) ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- CTA Actions -->
      <div class="hidden md:flex items-center gap-3">
        <!-- View CV Button (Direct Modal Viewer) -->
        <button
          @click="openCvModal"
          type="button"
          class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-teal-500/50 rounded-lg transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
          title="Consulter mon CV directement sur le site"
        >
          <Eye class="w-4 h-4 text-teal-400" />
          <span>Consulter le CV</span>
        </button>

        <!-- Contact CTA -->
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 rounded-lg transition-all hover:scale-[1.02] shadow-md shadow-teal-500/20"
        >
          <Send class="w-3.5 h-3.5" />
          <span>Me contacter</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        type="button"
        class="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
        aria-label="Ouvrir le menu"
      >
        <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Drawer -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl"
      >
        <div class="flex flex-col space-y-1">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="closeMobileMenu"
            class="px-3 py-2.5 rounded-lg text-base font-medium transition-colors"
            :class="activeSection === item.href.slice(1) ? 'bg-teal-500/10 text-teal-300 border-l-4 border-teal-400' : 'text-slate-300 hover:bg-slate-900 hover:text-white'"
          >
            {{ item.label }}
          </a>
        </div>

        <div class="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
          <button
            @click="closeMobileMenu(); openCvModal()"
            type="button"
            class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg cursor-pointer hover:border-teal-400"
          >
            <Eye class="w-4 h-4 text-teal-400" />
            <span>Consulter mon CV en direct</span>
          </button>
          <a
            href="#contact"
            @click="closeMobileMenu"
            class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg shadow-md"
          >
            <Send class="w-4 h-4" />
            <span>Me contacter</span>
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>
