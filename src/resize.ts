import { ref } from 'vue'

const width = ref(0)

export const handleResize = () => {
  width.value = window.innerWidth

  return width.value
}
