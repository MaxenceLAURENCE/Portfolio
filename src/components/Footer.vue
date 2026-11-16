<script setup lang="ts">
import { Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-vue-next'
import { profileData } from '../data/profile'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-850">
        <!-- Brand & Description -->
        <div class="flex flex-col items-center md:items-start gap-2">
          <div class="flex items-center gap-2 font-mono text-base font-bold text-white">
            <span class="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center">
              <Code2 class="w-4 h-4" />
            </span>
            <span>Maxence Laurence</span>
          </div>
          <p class="text-slate-400 text-center md:text-left">
            Étudiant BUT 3 Informatique • Développeur Full-Stack & DevOps
          </p>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-4">
          <a
            :href="profileData.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="GitHub"
          >
            <Github class="w-4 h-4" />
          </a>
          <a
            :href="profileData.linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin class="w-4 h-4" />
          </a>
          <a
            :href="'mailto:' + profileData.email"
            class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-500/40 transition-colors"
            aria-label="Email"
          >
            <Mail class="w-4 h-4" />
          </a>
          <button
            @click="scrollToTop"
            class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-500/40 transition-colors ml-2"
            title="Retour en haut"
            aria-label="Retour en haut de page"
          >
            <ArrowUp class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Bottom Credits -->
      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
        <p>© 2026 Maxence Laurence. Tous droits réservés.</p>
        <p class="flex items-center gap-1">
          <span>Développé avec</span>
          <span class="text-teal-400 font-semibold">Vue 3</span>,
          <span class="text-blue-400 font-semibold">TypeScript</span> &
          <span class="text-cyan-400 font-semibold">Tailwind CSS</span>
          <span>• Hébergé sur GitHub Pages</span>
        </p>
      </div>
    </div>
  </footer>
</template>
