import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './scss/style.scss'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))

  const BASE_URL = 'https://app.chatwoot.com'
  const g = document.createElement('script')
  const s = document.getElementsByTagName('script')[0]

  g.src = `${BASE_URL}/packs/js/sdk.js`
  if (s.parentNode !== null)
    s.parentNode.insertBefore(g, s)

  g.onload = function() {
    window.chatwootSDK.run({
      websiteToken: 'cK8yfMkTjCCQycrhvPXXXC7d',
      baseUrl: BASE_URL,
    })
  }
})
