export default defineNuxtConfig({
    css:['vuetify','@fortawesome/fontawesome-free','@mdi/font/css/materialdesignicons.min.css'],
    modules: [
        
        '@invictus.codes/nuxt-vuetify','@pinia/nuxt',
    ],
    vuetify: {
      /* vuetify options */
      vuetifyOptions: {
        // @TODO: list all vuetify options
      },
  
      moduleOptions: {
        /* nuxt-vuetify module options */
        treeshaking: true ,
        useIconCDN: true ,

  
        /* vite-plugin-vuetify options */
        styles: true ,
        autoImport: true 
      }
    }
  })