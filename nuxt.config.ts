export default defineNuxtConfig({
    css:['vuetify','@fortawesome/fontawesome-free','@mdi/font/css/materialdesignicons.min.css'],
    modules: [
        
      , '@invictus.codes/nuxt-vuetify','@pinia/nuxt','nuxt-simple-sitemap'
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
    },
    app : {
      head: {
        title:'e-commerce',
        meta:[
          {property:'og:title',content:'e-commerce title'},
          {property:'og:type',content:'website'},
          {property:'og:image',content:'https://e7.pngegg.com/pngimages/324/868/png-clipart-online-shopping-e-commerce-retail-digital-marketing-e-commerce-text-retail-thumbnail.png'},
          {property:'og:image:width',content:'100'},
          {property:'og:description',content:'e-commerce description'},
        ],
        link:[
          {rel:'icon',href:'https://www.svgrepo.com/show/293110/online-store-commerce.svg'},
        ]
      }
    },
    runtimeConfig: {
      sitemap: {
        siteUrl: 'http://192.168.1.11:3000',
      },
    }
  })  

  