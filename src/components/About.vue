<script setup lang="ts">
import { Code2, Server, Terminal, ShieldCheck, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-vue-next'
import { profileData } from '../data/profile'

const pillars = [
  {
    icon: Code2,
    title: 'Typage Strict & Architecture Propre',
    description: "Je privilégie TypeScript de bout en bout avec des structures découplées (Services, Repositories), zéro 'any' et des validations rigoureuses.",
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'group-hover:border-blue-500/50'
  },
  {
    icon: Server,
    title: 'APIs REST & Temps Réel',
    description: "Conception de backends Express/Node.js documentés sous Swagger/OpenAPI 3.0, couplés à des WebSockets (Socket.io) pour les flux temps réel.",
    color: 'from-violet-500 to-purple-500',
    borderColor: 'group-hover:border-violet-500/50'
  },
  {
    icon: Terminal,
    title: 'Culture DevOps & Automatisation',
    description: "Conteneurisation systématique via Docker et Docker Compose, reverse proxy Traefik SSL et pipelines d'intégration continue GitHub Actions.",
    color: 'from-teal-500 to-emerald-500',
    borderColor: 'group-hover:border-teal-500/50'
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité & Bonnes Pratiques',
    description: "Gestion des tokens JWT stateless, cryptographie asymétrique RSA, commits conventionnels (Husky) et tests automatisés (Vitest).",
    color: 'from-amber-500 to-orange-500',
    borderColor: 'group-hover:border-amber-500/50'
  }
]
</script>

<template>
  <section id="about" class="py-20 bg-slate-950/60 border-y border-slate-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono font-medium border border-teal-500/20">
          <span>01. PRÉSENTATION</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          À propos de moi & ma vision du développement
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          Un profil équilibré entre développement Full-Stack moderne, rigueur d'ingénierie et pratiques DevOps.
        </p>
      </div>

      <!-- Main presentation card & Pillars -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <!-- Left: Detailed bio card -->
        <div class="lg:col-span-5 bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-800">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 font-bold text-lg shadow-md shadow-teal-500/20">
              <GraduationCap class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Maxence Laurence</h3>
              <p class="text-xs text-teal-400 font-mono">Étudiant BUT 3 Informatique</p>
            </div>
          </div>

          <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p v-for="(p, idx) in profileData.bioParagraphs" :key="idx">
              {{ p }}
            </p>
          </div>

          <!-- Quick facts badges -->
          <div class="pt-4 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-400">
            <div class="flex items-center gap-2">
              <MapPin class="w-4 h-4 text-teal-400 shrink-0" />
              <span>{{ profileData.location }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Calendar class="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{{ profileData.statusDetail }}</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Eligible à une convention de stage universitaire (IUT de Calais)</span>
            </div>
          </div>
        </div>

        <!-- Right: 4 Technical Pillars -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="(pillar, index) in pillars"
            :key="index"
            class="group bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            :class="pillar.borderColor"
          >
            <div
              class="w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform"
              :class="pillar.color"
            >
              <component :is="pillar.icon" class="w-5 h-5" />
            </div>
            <h4 class="text-base font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
              {{ pillar.title }}
            </h4>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(stat, index) in profileData.stats"
          :key="index"
          class="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 text-center group hover:border-teal-500/40 transition-colors"
        >
          <div class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-1 group-hover:scale-105 transition-transform inline-block font-mono">
            {{ stat.value }}
          </div>
          <div class="text-sm font-semibold text-slate-200">
            {{ stat.label }}
          </div>
          <div v-if="stat.sub" class="text-xs text-slate-500 mt-0.5">
            {{ stat.sub }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
