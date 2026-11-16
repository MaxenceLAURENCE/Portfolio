<script setup lang="ts">
import { Code2, Layout, Server, Terminal, CheckCircle2 } from 'lucide-vue-next'
import { skillsData } from '../data/skills'

const iconMap: Record<string, any> = {
  Code2,
  Layout,
  Server,
  Terminal
}
</script>

<template>
  <section id="competences" class="py-20 bg-slate-950/60 border-y border-slate-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono font-medium border border-teal-500/20">
          <span>03. COMPÉTENCES</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Stack Technique & Savoir-Faire
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          Technologies éprouvées au cours du cursus BUT Informatique et de projets d'ingénierie logicielle.
        </p>
      </div>

      <!-- Skills Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(cat, idx) in skillsData"
          :key="idx"
          class="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-slate-700 transition-all duration-300"
        >
          <!-- Top subtle glow -->
          <div
            class="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br opacity-5 rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-10"
            :class="cat.color"
          ></div>

          <div>
            <!-- Category Header -->
            <div class="flex items-center gap-3.5 mb-4">
              <div
                class="w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-md"
                :class="cat.color"
              >
                <component :is="iconMap[cat.icon] || Code2" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  {{ cat.title }}
                </h3>
                <p class="text-xs text-slate-400">
                  {{ cat.description }}
                </p>
              </div>
            </div>

            <!-- Skills List / Grid -->
            <div class="space-y-3 pt-3 border-t border-slate-800/80">
              <div
                v-for="skill in cat.skills"
                :key="skill.name"
                class="p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-950 border border-slate-800/70 hover:border-slate-700/80 transition-all flex items-start justify-between gap-3 group/skill"
              >
                <div class="space-y-0.5">
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-semibold text-slate-200 group-hover/skill:text-teal-300 transition-colors">
                      {{ skill.name }}
                    </span>
                    <span
                      v-if="skill.highlight"
                      class="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-teal-500/15 text-teal-300 border border-teal-500/30"
                    >
                      Cœur de stack
                    </span>
                  </div>
                  <p v-if="skill.description" class="text-xs text-slate-400 leading-tight">
                    {{ skill.description }}
                  </p>
                </div>

                <span
                  v-if="skill.level"
                  class="text-[11px] font-mono px-2 py-0.5 rounded-full shrink-0 mt-0.5"
                  :class="skill.level === 'Avancé' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'"
                >
                  {{ skill.level }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional competency highlights box -->
      <div class="mt-12 bg-gradient-to-r from-teal-950/30 via-slate-900/80 to-blue-950/30 border border-teal-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 text-center md:text-left">
          <h4 class="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
            <CheckCircle2 class="w-5 h-5 text-teal-400" />
            <span>Méthodologies & Compétences Clés du BUT Informatique</span>
          </h4>
          <p class="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Méthodes Agiles / Scrum, TDD (Test-Driven Development), revues de code Git, conception d'architectures résilientes, rédaction de documentation technique OpenAPI et sécurité applicative (OWASP).
          </p>
        </div>

        <a
          href="#contact"
          class="shrink-0 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-md shadow-teal-500/20 hover:scale-105"
        >
          Échanger sur une opportunité
        </a>
      </div>
    </div>
  </section>
</template>
