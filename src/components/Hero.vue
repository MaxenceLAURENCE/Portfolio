<script setup lang="ts">
import { ChevronRight, Github, Linkedin, Mail, Sparkles, Terminal, Eye } from 'lucide-vue-next'
import { profileData } from '../data/profile'
import { useCvModal } from '../composables/useCvModal'

const { openCvModal } = useCvModal()
</script>

<template>
  <section id="hero" class="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
    <!-- Background glowing orbs -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Left Column: Pitch & CTAs -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <!-- Status pill -->
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-medium tracking-wide">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span>En recherche active : <strong>Stage de fin d'études (14-16 sem.)</strong></span>
          </div>

          <!-- Name & Title -->
          <div class="space-y-2">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Salut, je suis <br class="hidden sm:inline" />
              <span class="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {{ profileData.name }}
              </span>
            </h1>
            <p class="text-xl sm:text-2xl font-semibold text-slate-300">
              {{ profileData.role }} <span class="text-teal-400 font-mono text-base font-normal">| BUT 3 Informatique</span>
            </p>
          </div>

          <!-- Bio / Tagline -->
          <p class="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Étudiant à l'<strong>IUT du Littoral Côte d'Opale (Calais)</strong>. Je conçois des architectures logicielles de bout en bout : APIs <strong>TypeScript</strong> rigoureusement typées, interfaces <strong>Vue 3</strong> réactives et infrastructures conteneurisées avec <strong>Docker & CI/CD</strong>.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <!-- Explore Projects -->
            <a
              href="#projets"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 hover:from-teal-300 hover:to-cyan-200 transition-all shadow-lg shadow-teal-500/25 hover:scale-[1.02] text-sm"
            >
              <Sparkles class="w-4 h-4 text-slate-950" />
              <span>Voir mes projets</span>
              <ChevronRight class="w-4 h-4" />
            </a>

            <!-- View CV Modal Trigger -->
            <button
              @click="openCvModal"
              type="button"
              class="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-teal-500/50 transition-all text-sm hover:scale-[1.02] shadow-sm cursor-pointer"
              title="Consulter mon CV directement sur le site"
            >
              <Eye class="w-4 h-4 text-teal-400" />
              <span>Consulter mon CV</span>
            </button>

            <!-- Contact -->
            <a
              href="#contact"
              class="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all text-sm"
            >
              <Mail class="w-4 h-4 text-slate-400" />
              <span>Me contacter</span>
            </a>
          </div>

          <!-- Socials & Links -->
          <div class="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400 border-t border-slate-800/60 max-w-md">
            <span class="text-xs uppercase tracking-wider text-slate-500 font-mono">Réseaux :</span>
            
            <a
              :href="profileData.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-teal-400 transition-colors"
            >
              <Github class="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              :href="profileData.linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-teal-400 transition-colors"
            >
              <Linkedin class="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              :href="'mailto:' + profileData.email"
              class="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-teal-400 transition-colors"
            >
              <Mail class="w-4 h-4 text-amber-400" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive Code Terminal Card -->
        <div class="lg:col-span-5">
          <div class="relative group">
            <!-- Ambient glow behind terminal -->
            <div class="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

            <div class="relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs">
              <!-- Terminal Header -->
              <div class="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div class="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Terminal class="w-3.5 h-3.5 text-teal-400" />
                  <span>developer.profile.ts</span>
                </div>
                <span class="text-[10px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">TypeScript</span>
              </div>

              <!-- Terminal Code Content -->
              <div class="p-5 space-y-2 leading-relaxed text-slate-300">
                <p class="text-slate-500">// Profil Développeur BUT 3 Informatique</p>
                <p>
                  <span class="text-purple-400">const</span>
                  <span class="text-blue-300"> developer</span>:
                  <span class="text-yellow-300"> DeveloperProfile</span> = {
                </p>
                <p class="pl-4">
                  <span class="text-slate-400">name:</span>
                  <span class="text-emerald-300"> 'Maxence Laurence'</span>,
                </p>
                <p class="pl-4">
                  <span class="text-slate-400">education:</span>
                  <span class="text-emerald-300"> 'BUT Informatique (Année 3)'</span>,
                </p>
                <p class="pl-4">
                  <span class="text-slate-400">institution:</span>
                  <span class="text-emerald-300"> 'IUT Calais - Côte d\'Opale'</span>,
                </p>
                <p class="pl-4">
                  <span class="text-slate-400">coreStack:</span> [
                </p>
                <p class="pl-8 text-teal-300">
                  'TypeScript', 'Vue 3', 'Node.js', 'Docker', 'PostgreSQL'
                </p>
                <p class="pl-4">],</p>
                <p class="pl-4">
                  <span class="text-slate-400">internshipTarget:</span> {
                </p>
                <p class="pl-8">
                  <span class="text-slate-400">role:</span>
                  <span class="text-emerald-300"> 'Full-Stack / DevOps'</span>,
                </p>
                <p class="pl-8">
                  <span class="text-slate-400">duration:</span>
                  <span class="text-amber-300"> '14 à 16 semaines'</span>,
                </p>
                <p class="pl-8">
                  <span class="text-slate-400">startDate:</span>
                  <span class="text-emerald-300"> 'Printemps 2026'</span>,
                </p>
                <p class="pl-8">
                  <span class="text-slate-400">available:</span>
                  <span class="text-teal-400"> true</span>
                </p>
                <p class="pl-4">},</p>
                <p class="pl-4">
                  <span class="text-slate-400">hygiene:</span>
                  <span class="text-cyan-300"> ['TDD', 'Clean Architecture', 'CI/CD']</span>
                </p>
                <p>};</p>

                <!-- Interactive terminal prompt simulation -->
                <div class="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-teal-400">
                  <span>❯</span>
                  <span class="text-slate-400">git status</span>
                  <span class="text-slate-500">→</span>
                  <span class="text-emerald-400">Ready to build great software.</span>
                  <span class="w-1.5 h-3.5 bg-teal-400 animate-pulse inline-block"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
