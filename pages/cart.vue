<template>
    <div>
        <v-row class="my-5 ">
            <v-chip
                color="primary"
                size="x-large"
                class="mb-5"
            >
              Cart
            </v-chip>
            <v-sheet :rounded="rounded" class="mx-auto" :elevation="5" >
                <v-row v-if="cartStore.formattedCartProducts.length!==0">
                    <v-col v-for="(product,i) in cartStore.formattedCartProducts" cols="12"  :key="i">
                        <ProductCard :product="product" type="cart"/>
                    </v-col>
                </v-row>
                <v-row v-else>
                    empty
                </v-row>
            </v-sheet>
        </v-row>
    </div>
</template>

<script setup>
    import {useCartStore} from '../stores/cart'
    const cartStore =useCartStore()
</script>

<style lang="scss" scoped>

</style>