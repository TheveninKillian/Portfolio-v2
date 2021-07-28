import { ref } from 'vue'

const device = ref('')
const width = ref(0)
const height = ref(0)

export const recoverDevice = () => {
  if (typeof window !== 'undefined') {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  if (width.value < 600) device.value = 'mobile'
  else if (width.value >= 600 && height.value > width.value) device.value = 'tablet'
  else device.value = 'desktop'

  return device.value
}
