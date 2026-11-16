<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Timeline from './components/Timeline.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import CvModal from './components/CvModal.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-teal-500 selection:text-slate-950">
    <!-- Ambient subtle background grid -->
    <div
      class="fixed inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] z-0"
    ></div>

    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow relative z-10">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </main>

    <!-- Footer -->
    <Footer class="relative z-10" />

    <!-- In-Page CV Viewer Modal -->
    <CvModal />
  </div>
</template>
