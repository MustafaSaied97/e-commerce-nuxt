<template>
    <div>
        <v-row class="mt-2">
            <v-col md="8">
                <v-row class="my-5 flex-column mx-auto "  >
                    <v-chip
                        color="primary"
                        size="x-large"
                        class="mb-5 py-5 "
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
                            <v-btn class="mx-auto" @click="$router.push('/')" color="primary">
                                Your cart is empty. Fill it
                            </v-btn>
                            
                        </v-row>
                    </v-sheet>
                </v-row>
            </v-col>
            <v-col v-if="cartStore.total" md="4">
                <v-card class="py-5 px-4">
                  <v-card-title class="mb-5"> Order Summary </v-card-title>
                  <v-card-text>
                    <div class="d-flex align-center justify-space-between mb-4">
                      <p class="ma-0">Subtotal</p>
                      <p class="text-primary">${{ cartStore.total }}</p>
                    </div>
                    <div class="d-flex align-center justify-space-between mb-4">
                      <p class="ma-0">Tax</p>
                      <p class="text-primary">0</p>
                    </div>
                    <div class="d-flex align-center justify-space-between mb-4">
                      <p class="ma-0">Shipping Price</p>
                      <p class="text-primary">0</p>
                    </div>
                    <v-divider></v-divider>
                    <div class="py-3 d-flex align-center justify-space-between mb-4">
                      <p class="ma-0">Order Total</p>
                      <p class="text-primary">${{ cartStore.total }}</p>
                    </div>
                    <v-btn color="primary" block> Checkout </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
        </v-row>
        
    </div>
</template>

<script setup>
    import {useCartStore} from '../stores/cart'
    const cartStore =useCartStore()
</script>

<style lang="scss" scoped>

</style>