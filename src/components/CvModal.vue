<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { X, ExternalLink, Download, FileText } from 'lucide-vue-next'
import { profileData } from '../data/profile'
import { useCvModal } from '../composables/useCvModal'

const { isCvModalOpen, closeCvModal } = useCvModal()

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isCvModalOpen.value) {
    closeCvModal()
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
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isCvModalOpen"
        class="fixed inset-0 z-50 overflow-hidden bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        @click.self="closeCvModal"
      >
        <div
          class="relative w-full max-w-5xl h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in"
        >
          <!-- Viewer Header -->
          <div class="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <FileText class="w-4 h-4" />
              </div>
              <div>
                <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>CV — Maxence Laurence</span>
                  <span class="hidden sm:inline px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    Aperçu en direct
                  </span>
                </h3>
                <p class="text-[11px] text-slate-400 hidden sm:block">
                  Étudiant en BUT 3 Informatique • Développeur Full-Stack & DevOps
                </p>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-2">
              <!-- Open in new tab -->
              <a
                :href="profileData.cvPath"
                target="_blank"
                rel="noopener noreferrer"
                class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                title="Ouvrir dans un nouvel onglet"
              >
                <ExternalLink class="w-3.5 h-3.5 text-slate-400" />
                <span>Nouvel onglet</span>
              </a>

              <!-- Optional Download -->
              <a
                :href="profileData.cvPath"
                download="CV_Maxence_Laurence.pdf"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors shadow-sm"
                title="Télécharger une copie en PDF"
              >
                <Download class="w-3.5 h-3.5" />
                <span class="hidden sm:inline">Télécharger</span>
              </a>

              <!-- Close button -->
              <button
                @click="closeCvModal"
                class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
                aria-label="Fermer la prévisualisation"
              >
                <X class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- Viewer Body: Embedded PDF -->
          <div class="w-full flex-grow bg-slate-950 relative">
            <object
              :data="profileData.cvPath + '#view=FitH'"
              type="application/pdf"
              class="w-full h-full border-0"
            >
              <!-- Fallback iframe if object isn't preferred by user agent -->
              <iframe
                :src="profileData.cvPath + '#view=FitH'"
                class="w-full h-full border-0"
                title="Visualisateur de CV de Maxence Laurence"
              >
                <!-- Fallback text if browser has no embedded PDF support -->
                <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <FileText class="w-12 h-12 text-slate-500 mx-auto" />
                  <div>
                    <h4 class="text-base font-semibold text-white mb-1">Aperçu direct non disponible dans ce navigateur</h4>
                    <p class="text-xs text-slate-400 max-w-md">
                      Votre navigateur ne prend pas en charge l'affichage direct des documents PDF dans la page.
                    </p>
                  </div>
                  <div class="flex gap-3">
                    <a
                      :href="profileData.cvPath"
                      target="_blank"
                      class="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-400 text-slate-950"
                    >
                      Ouvrir dans un nouvel onglet
                    </a>
                  </div>
                </div>
              </iframe>
            </object>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
