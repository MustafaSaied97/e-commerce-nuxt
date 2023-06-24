<template>
    <div>
       <v-row class="my-5">
        <v-col cols="12">
            <v-btn @click="toggle" :class="{'bg-primary':!grid}">
                <v-icon>mdi-view-list</v-icon>
            </v-btn>
            <v-btn @click="toggle" :class="{'bg-primary':grid}" class="ml-3">
                <v-icon>mdi-apps</v-icon>
            </v-btn>
        </v-col>
       </v-row>
       <v-row class="my-5">
            <v-col cols="12">
                <v-row v-if="grid">
                    <v-col v-for="(product,i) in products" cols="12" lg="4" sm="6" :key="product.id">
                        <ProductCard :product="product" type="vr"/>
                    </v-col>
                </v-row>
                
                <v-row v-if="!grid">
                    <v-col v-for="(product,i) in products" cols="12"  :key="i">
                        <ProductCard :product="product" type="hr"/>
                    </v-col>
                </v-row>
            </v-col>
       </v-row>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import {useCartStore} from "../stores/cart";
    const cartStore=useCartStore()
    const {getAllProducts}=cartStore
    const {products}=storeToRefs(cartStore)
    await getAllProducts()

    
   

    const grid= ref(true)
    const toggle =()=>grid.value=!grid.value

</script>

<style lang="scss" scoped>

</style>
