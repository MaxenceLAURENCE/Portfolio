<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Send, Download, Linkedin, Github, CheckCircle2, AlertCircle, MapPin, Clock, Loader2, Eye } from 'lucide-vue-next'
import { profileData } from '../data/profile'
import { useCvModal } from '../composables/useCvModal'

const { openCvModal } = useCvModal()

// Form state
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  _gotcha: '' // Anti-spam honeypot
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref<string | null>(null)

// Formspree endpoint (Formspree free endpoint or placeholder to be configured)
// When Maxence creates his Formspree form, he just puts his endpoint ID here.
const formspreeEndpoint = ref('https://formspree.io/f/mqkvrkzk')

const handleSubmit = async () => {
  // If honeypot filled, silent reject (bot detected)
  if (formData.value._gotcha) {
    submitSuccess.value = true
    return
  }

  submitError.value = null
  isSubmitting.value = true

  try {
    const response = await fetch(formspreeEndpoint.value, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        subject: formData.value.subject || 'Contact depuis Portfolio',
        message: formData.value.message
      })
    })

    if (response.ok) {
      submitSuccess.value = true
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
        _gotcha: ''
      }
    } else {
      const data = await response.json().catch(() => ({}))
      if (data && data.errors) {
        submitError.value = data.errors.map((e: any) => e.message).join(', ')
      } else {
        submitError.value = "Une erreur est survenue lors de l'envoi du message. N'hésitez pas à m'écrire directement par email."
      }
    }
  } catch (err) {
    submitError.value = "Impossible de joindre le serveur d'envoi. Vous pouvez m'écrire directement via votre messagerie à " + profileData.email
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-20 bg-slate-950/70 border-t border-slate-800/80 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono font-medium border border-teal-500/20">
          <span>05. CONTACT & RECRUTEMENT</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Prêt à échanger sur une opportunité ?
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          À la recherche d'un stage de fin d'études de 14 à 16 semaines dès le printemps 2026. Discutons de vos besoins !
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
        <!-- Left: Contact Form -->
        <div class="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-white mb-1">
              Envoyez-moi un message
            </h3>
            <p class="text-xs sm:text-sm text-slate-400">
              Formulaire interactif direct avec accusé de réception automatique.
            </p>
          </div>

          <!-- Success Alert -->
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div
              v-if="submitSuccess"
              class="mb-6 p-4 rounded-xl bg-teal-950/40 border border-teal-500/40 flex items-start gap-3 text-teal-200"
            >
              <CheckCircle2 class="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div class="text-sm">
                <p class="font-bold text-teal-300">Message envoyé avec succès !</p>
                <p class="text-xs text-teal-200/90 mt-0.5">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais à l'adresse indiquée.
                </p>
                <button
                  @click="submitSuccess = false"
                  class="mt-2 text-xs font-semibold underline hover:text-white"
                >
                  Envoyer un autre message
                </button>
              </div>
            </div>
          </transition>

          <!-- Error Alert -->
          <div
            v-if="submitError"
            class="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-start gap-3 text-rose-200"
          >
            <AlertCircle class="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div class="text-xs">
              <p class="font-bold text-rose-300">Erreur de transmission</p>
              <p class="mt-0.5">{{ submitError }}</p>
            </div>
          </div>

          <!-- The Form -->
          <form v-if="!submitSuccess" @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Honeypot anti-spam (invisible for users) -->
            <input
              v-model="formData._gotcha"
              type="text"
              name="_gotcha"
              class="hidden"
              tabindex="-1"
              autocomplete="off"
            />

            <!-- Name & Email Inputs -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-xs font-semibold text-slate-300 mb-1.5">
                  Nom ou Entreprise <span class="text-teal-400">*</span>
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  placeholder="ex. Jean Dupont / Tech Corp"
                  class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/80 transition-colors"
                />
              </div>

              <div>
                <label for="email" class="block text-xs font-semibold text-slate-300 mb-1.5">
                  Adresse e-mail <span class="text-teal-400">*</span>
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  placeholder="ex. recruteur@entreprise.com"
                  class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/80 transition-colors"
                />
              </div>
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="block text-xs font-semibold text-slate-300 mb-1.5">
                Objet de la demande
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                placeholder="Proposition de stage / Entretien technique"
                class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/80 transition-colors"
              />
            </div>

            <!-- Message Area -->
            <div>
              <label for="message" class="block text-xs font-semibold text-slate-300 mb-1.5">
                Message <span class="text-teal-400">*</span>
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="4"
                placeholder="Présentez votre entreprise, le sujet de stage proposé ou vos questions..."
                class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/80 transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 hover:from-teal-300 hover:to-cyan-200 transition-all shadow-lg shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
            >
              <Loader2 v-if="isSubmitting" class="w-4 h-4 animate-spin" />
              <Send v-else class="w-4 h-4" />
              <span>{{ isSubmitting ? 'Transmission en cours...' : 'Envoyer mon message' }}</span>
            </button>
          </form>
        </div>

        <!-- Right: Direct Information, Resume & Socials -->
        <div class="lg:col-span-5 space-y-6">
          <!-- CV Download Spotlight Card -->
          <div class="bg-gradient-to-br from-slate-900 to-slate-950 border border-teal-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                <Download class="w-6 h-6" />
              </div>
              <div>
                <h4 class="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  Curriculum Vitae (PDF)
                </h4>
                <p class="text-xs text-slate-400 mt-0.5">
                  Format standard recruteur (A4), complet avec formation, projets et compétences.
                </p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-2.5">
              <button
                @click="openCvModal"
                type="button"
                class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-md shadow-teal-500/20 cursor-pointer"
              >
                <Eye class="w-4 h-4 text-slate-950" />
                <span>Consulter en direct</span>
              </button>

              <a
                :href="profileData.cvPath"
                download="CV_Maxence_Laurence.pdf"
                class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all shadow hover:border-slate-600"
                title="Télécharger une copie PDF"
              >
                <Download class="w-4 h-4 text-slate-400" />
                <span>Télécharger</span>
              </a>
            </div>
          </div>

          <!-- Direct Coordinates -->
          <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h4 class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Coordonnées directes :
            </h4>

            <!-- Email -->
            <a
              :href="'mailto:' + profileData.email"
              class="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 hover:bg-slate-950 border border-slate-800/80 hover:border-teal-500/40 transition-colors group"
            >
              <div class="w-9 h-9 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
                <Mail class="w-4 h-4" />
              </div>
              <div class="overflow-hidden">
                <div class="text-[11px] text-slate-400">E-mail professionnel</div>
                <div class="text-xs font-semibold text-slate-200 group-hover:text-teal-300 transition-colors truncate">
                  {{ profileData.email }}
                </div>
              </div>
            </a>

            <!-- LinkedIn -->
            <a
              :href="profileData.linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 hover:bg-slate-950 border border-slate-800/80 hover:border-blue-500/40 transition-colors group"
            >
              <div class="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                <Linkedin class="w-4 h-4" />
              </div>
              <div>
                <div class="text-[11px] text-slate-400">Profil LinkedIn</div>
                <div class="text-xs font-semibold text-slate-200 group-hover:text-blue-300 transition-colors">
                  in/maxence-laurence
                </div>
              </div>
            </a>

            <!-- GitHub -->
            <a
              :href="profileData.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 hover:bg-slate-950 border border-slate-800/80 hover:border-slate-600 transition-colors group"
            >
              <div class="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                <Github class="w-4 h-4" />
              </div>
              <div>
                <div class="text-[11px] text-slate-400">Dépôts GitHub</div>
                <div class="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                  github.com/MaxenceLAURENCE
                </div>
              </div>
            </a>
          </div>

          <!-- Availability & Location Info -->
          <div class="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 space-y-2 text-xs text-slate-400">
            <div class="flex items-center gap-2">
              <Clock class="w-4 h-4 text-teal-400 shrink-0" />
              <span><strong>Délai de réponse :</strong> Sous 24 à 48 heures ouvrées</span>
            </div>
            <div class="flex items-center gap-2">
              <MapPin class="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Localisation :</strong> Calais / Hauts-de-France (Mobilité & Télétravail)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
