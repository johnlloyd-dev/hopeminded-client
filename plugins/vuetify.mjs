// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
// plugins/vuetify.ts
import "@/assets/main.scss";

import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'dark'
        }
    })
    app.vueApp.use(vuetify)
})
