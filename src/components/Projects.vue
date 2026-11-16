<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, Github, Sparkles, Filter, ChevronRight, Layers } from 'lucide-vue-next'
import { projectsData } from '../data/projects'
import type { Project, ProjectCategory } from '../types'
import ProjectModal from './ProjectModal.vue'

const selectedCategory = ref<ProjectCategory>('all')
const searchQuery = ref('')
const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

const categories: { label: string; value: ProjectCategory }[] = [
  { label: 'Tous les projets', value: 'all' },
  { label: 'Full-Stack & Web', value: 'fullstack' },
  { label: 'DevOps & Infra', value: 'devops' },
  { label: 'Mobile & Cybersécurité', value: 'mobile-sys' },
  { label: 'SAÉs BUT Info', value: 'sae' },
]

const filteredProjects = computed(() => {
  return projectsData.filter((project) => {
    // Category match
    const matchesCategory =
      selectedCategory.value === 'all' ||
      project.category === selectedCategory.value ||
      (selectedCategory.value === 'sae' && !!project.saeCode)

    // Search query match
    const q = searchQuery.value.toLowerCase().trim()
    const matchesQuery =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.shortDescription.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q)) ||
      (project.saeCode && project.saeCode.toLowerCase().includes(q))

    return matchesCategory && matchesQuery
  })
})

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeProjectModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<template>
  <section id="projets" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono font-medium border border-teal-500/20">
          <span>02. RÉALISATIONS</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Projets Phares & SAÉs de BUT
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          Applications Full-Stack, pipelines DevOps, microservices et projets académiques menés avec rigueur.
        </p>
      </div>

      <!-- Controls: Category Filters & Search -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <!-- Category Pills -->
        <div class="flex flex-wrap items-center gap-2 justify-center md:justify-start w-full md:w-auto">
          <button
            v-for="cat in categories"
            :key="cat.value"
            @click="selectedCategory = cat.value"
            type="button"
            class="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
            :class="selectedCategory === cat.value ? 'bg-teal-400 text-slate-950 font-semibold shadow-md shadow-teal-500/20' : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full md:w-72">
          <Search class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher (Docker, Vue, API...)"
            class="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/80 transition-colors"
          />
          <button
            v-if="searchQuery"
            @click="searchQuery = ''"
            type="button"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
          >
            ✕
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          @click="openProjectModal(project)"
          class="group bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-teal-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-teal-500/10 relative overflow-hidden cursor-pointer"
        >
          <!-- Top subtle gradient hover bar -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div>
            <!-- Card Header: Badges -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span
                v-if="project.saeCode"
                class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-teal-500/10 text-teal-300 border border-teal-500/25 truncate max-w-[200px]"
                :title="project.saeCode"
              >
                {{ project.saeCode }}
              </span>
              <span v-else class="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-400">
                Projet Perso / Tech
              </span>

              <span
                v-if="project.featured"
                class="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20"
              >
                <Sparkles class="w-3 h-3" />
                <span>Phare</span>
              </span>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
              {{ project.title }}
            </h3>
            <p class="text-xs text-slate-400 font-medium mb-3">
              {{ project.subtitle }}
            </p>

            <!-- Short Description -->
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
              {{ project.shortDescription }}
            </p>
          </div>

          <div>
            <!-- Technologies Badges -->
            <div class="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/80">
              <span
                v-for="tech in project.technologies.slice(0, 4)"
                :key="tech"
                class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.technologies.length > 4"
                class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-800/60 text-slate-400"
              >
                +{{ project.technologies.length - 4 }}
              </span>
            </div>

            <!-- Card Actions -->
            <div class="flex items-center justify-between gap-2 pt-2">
              <span
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 group-hover:text-teal-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                <Layers class="w-3.5 h-3.5" />
                <span>Détails & Architecture</span>
                <ChevronRight class="w-3.5 h-3.5" />
              </span>

              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
                class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-10"
                title="Consulter le code source sur GitHub"
              >
                <Github class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state if search has no results -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
        <Filter class="w-10 h-10 text-slate-500 mx-auto mb-3" />
        <h3 class="text-base font-semibold text-white mb-1">Aucun projet ne correspond à votre recherche</h3>
        <p class="text-xs text-slate-400 mb-4">Essayez d'effacer les filtres ou les termes saisis.</p>
        <button
          @click="selectedCategory = 'all'; searchQuery = ''"
          class="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-500 text-slate-950"
        >
          Réinitialiser les filtres
        </button>
      </div>

      <!-- Project Modal -->
      <ProjectModal
        :is-open="isModalOpen"
        :project="selectedProject"
        @close="closeProjectModal"
      />
    </div>
  </section>
</template>
