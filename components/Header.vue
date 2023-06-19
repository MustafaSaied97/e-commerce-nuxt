<template>
<v-app-bar >
    <v-toolbar-title @click="$router.push('/')">
        shopping website
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <NuxtLink to='/cart'>
        <v-btn class="text-none" stacked>
            <v-badge :content="9" color="error">
                <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
        </v-btn>
    </NuxtLink>
    <!-- <v-btn :prepend-icon="theme==='light'? 'mdi-weather-sunny':'mdi-weather-night'">
        Toggle Theme
    </v-btn> -->
    <v-btn prepend-icon="mdi-weather-sunny">
        Toggle Theme
    </v-btn>
</v-app-bar>
</template>

<script setup>
    import {useCartStore} from "../stores/cart"
    const cartStore =useCartStore() 
</script>

<style scoped>

</style>