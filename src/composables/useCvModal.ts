import { ref } from 'vue'

const isCvModalOpen = ref(false)

export function useCvModal() {
  const openCvModal = () => {
    isCvModalOpen.value = true
  }

  const closeCvModal = () => {
    isCvModalOpen.value = false
  }

  return {
    isCvModalOpen,
    openCvModal,
    closeCvModal
  }
}
