<template>
<v-app-bar >
    <v-toolbar-title @click="$router.push('/')">
        <v-btn class="text-none" stacked>
            shopping website
        </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <NuxtLink to='/cart'>
        <v-btn class="text-none" stacked>
            <v-badge v-if="cartStore.productsTotal" :content="cartStore.productsTotal" color="error">
                <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
            <v-icon  v-else>mdi-cart-outline</v-icon>
        </v-btn>
    </NuxtLink>

    <v-btn class="ma-2" @click="cartStore.toggleTheme">
        <v-icon start :icon="cartStore.theme=='light'? 'mdi-weather-sunny':'mdi-weather-night'"></v-icon>
        Toggle Theme
    </v-btn >

</v-app-bar>
</template>

<script setup>
    import {useCartStore} from "../stores/cart"
    const cartStore =useCartStore() 
</script>

<style scoped>

</style>