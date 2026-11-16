<script setup lang="ts">
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-vue-next'
import { timelineData } from '../data/timeline'
</script>

<template>
  <section id="parcours" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono font-medium border border-teal-500/20">
          <span>04. PARCOURS</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Formation & Objectifs Professionnels
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          Un cursus universitaire solide en informatique préparant aux défis du génie logiciel en entreprise.
        </p>
      </div>

      <!-- Vertical Timeline -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Vertical Central / Left Line -->
        <div class="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal-400 via-cyan-500 to-slate-800 -translate-x-1/2"></div>

        <div class="space-y-12">
          <div
            v-for="(item, index) in timelineData"
            :key="index"
            class="relative flex flex-col sm:flex-row items-start group"
            :class="index % 2 === 0 ? 'sm:flex-row-reverse' : ''"
          >
            <!-- Timeline Center Node -->
            <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-teal-400 flex items-center justify-center text-teal-300 shadow-lg shadow-teal-500/30 z-10 group-hover:scale-110 transition-transform">
              <Briefcase v-if="item.type === 'milestone' || item.type === 'experience'" class="w-4 h-4" />
              <GraduationCap v-else class="w-4 h-4" />
            </div>

            <!-- Content Card -->
            <div
              class="ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 shadow-xl group-hover:border-slate-700 transition-all duration-300 group-hover:-translate-y-1"
              :class="item.type === 'milestone' ? 'border-teal-500/40 bg-slate-900' : ''"
            >
              <!-- Card Header -->
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span
                  class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold"
                  :class="item.type === 'milestone' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' : 'bg-slate-800 text-slate-300'"
                >
                  {{ item.badge }}
                </span>
                <span class="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <Calendar class="w-3.5 h-3.5 text-teal-400" />
                  <span>{{ item.period }}</span>
                </span>
              </div>

              <!-- Title & Org -->
              <h3 class="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                {{ item.title }}
              </h3>
              <div class="flex items-center gap-2 text-xs text-teal-400 font-medium mb-3">
                <span>{{ item.organization }}</span>
                <span class="text-slate-600">•</span>
                <span class="inline-flex items-center gap-1 text-slate-400">
                  <MapPin class="w-3 h-3 text-slate-500" />
                  <span>{{ item.location }}</span>
                </span>
              </div>

              <!-- Description -->
              <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {{ item.description }}
              </p>

              <!-- Achievements list -->
              <ul class="space-y-2 mb-4">
                <li
                  v-for="(ach, aIdx) in item.achievements"
                  :key="aIdx"
                  class="flex items-start gap-2 text-xs text-slate-300"
                >
                  <CheckCircle2 class="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                  <span>{{ ach }}</span>
                </li>
              </ul>

              <!-- Technologies pill if available -->
              <div v-if="item.technologies" class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                <span
                  v-for="tech in item.technologies"
                  :key="tech"
                  class="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-slate-400 rounded border border-slate-800"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
