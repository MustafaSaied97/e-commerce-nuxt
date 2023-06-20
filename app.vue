<template>
  <v-app id="inspire"   :theme="useCartStore().theme">
    <Header/>
    <v-main>
      <v-container>
        <RouterView/>
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script setup>
import { useCartStore } from './stores/cart';

  // export default {
  //   data: () => ({
  //     overlay: false,
  //   }),

  //   watch: {
  //     // overlay (val) {
  //     //   val && setTimeout(() => {
  //     //     this.overlay = false
  //     //   }, 3000)
  //     // },
  //   },
  // }
</script>