<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { X, Github, ExternalLink, Layers, CheckCircle2, Award, Code2 } from 'lucide-vue-next'
import type { Project } from '../types'

const props = defineProps<{
  project: Project | null
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && project"
        class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        @click.self="emit('close')"
      >
        <div
          class="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 animate-fade-in"
        >
          <!-- Modal Header -->
          <div class="px-6 py-5 bg-slate-950/80 border-b border-slate-800 flex items-start justify-between gap-4">
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <span
                  v-if="project.saeCode"
                  class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-teal-500/15 text-teal-300 border border-teal-500/30"
                >
                  {{ project.saeCode }}
                </span>
                <span class="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300">
                  {{ project.tags[0] }}
                </span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white">
                {{ project.title }}
              </h3>
              <p class="text-sm text-slate-400">
                {{ project.subtitle }}
              </p>
            </div>

            <!-- Close button -->
            <button
              @click="emit('close')"
              class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Fermer la modal"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            <!-- Full Description -->
            <div>
              <h4 class="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 mb-2 flex items-center gap-1.5">
                <Code2 class="w-4 h-4" />
                <span>Description du projet</span>
              </h4>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                {{ project.fullDescription }}
              </p>
            </div>

            <!-- Architecture section -->
            <div v-if="project.architecture" class="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-2">
              <h4 class="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Layers class="w-4 h-4" />
                <span>Architecture technique & conception</span>
              </h4>
              <p class="text-slate-300 text-sm leading-relaxed">
                {{ project.architecture }}
              </p>
            </div>

            <!-- Key Features Checklist -->
            <div>
              <h4 class="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 class="w-4 h-4" />
                <span>Fonctionnalités clés & réalisations</span>
              </h4>
              <ul class="space-y-2.5">
                <li
                  v-for="(feature, fIndex) in project.keyFeatures"
                  :key="fIndex"
                  class="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0"></span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Highlights if any -->
            <div v-if="project.highlights && project.highlights.length > 0" class="bg-teal-950/20 border border-teal-500/20 rounded-xl p-4">
              <h4 class="text-xs font-mono font-semibold uppercase tracking-wider text-teal-300 mb-2 flex items-center gap-1.5">
                <Award class="w-4 h-4" />
                <span>Points forts & valeur ajoutée</span>
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(h, hIndex) in project.highlights"
                  :key="hIndex"
                  class="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/30 font-medium"
                >
                  ★ {{ h }}
                </span>
              </div>
            </div>

            <!-- Technologies Grid -->
            <div>
              <h4 class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Stack technologique utilisée :
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700/80"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
            <span class="text-xs text-slate-500 font-mono">Maxence Laurence • Portfolio BUT 3</span>

            <div class="flex items-center gap-3">
              <button
                @click="emit('close')"
                class="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Fermer
              </button>

              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shadow-md"
              >
                <Github class="w-4 h-4" />
                <span>Code source GitHub</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
