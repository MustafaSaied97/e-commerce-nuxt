<template>
  <v-app id="inspire">
    <Header/>
    <v-main>
      <v-container>
        <RouterView/>
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      overlay: false,
    }),

    watch: {
      // overlay (val) {
      //   val && setTimeout(() => {
      //     this.overlay = false
      //   }, 3000)
      // },
    },
  }
</script>