import { ref } from 'vue'

const width = ref(0)

export const handleResize = () => {
  if (typeof window !== 'undefined')
    width.value = window.innerWidth

  return width.value
}
