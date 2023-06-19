<template>
    <div>
        <span v-if="type==='vr'">
        <v-card class="mx-auto pb-2" >
            <v-img :src="product.images[0]"  :lazy-src="product.thumbnail"  height="200px" class="mx-auto" cover>
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                  </div>
                </template>
            </v-img>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-title class="d-flex justify-start align-center">
                <v-rating
                  :model-value="product.rating"
                  dense
                  color="orange"
                  background-color="orange"
                  hover
                  class="me-2"
                ></v-rating>
                <span class="text-info text-subtitle-1">{{product.rating}}</span>
            </v-card-title>
            <v-card-subtitle>${{ product.price }}</v-card-subtitle>
            <v-card-actions>
                <v-btn color="indigo-darken-2"  >Read More</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="bg-primary" elevation="1"  @click="()=>cartStore.add(product.id)">Add to Cart</v-btn>
            </v-card-actions>
        </v-card>
        </span>
        <span v-if="type==='hr'">
            <v-card class="mx-auto" >
                <v-row align-content="center" height="200px" >
                    <v-col cols="4" >
                        <v-img :src="product.images[0]"  :lazy-src="product.thumbnail"  height="244px" fit  >
                        <template v-slot:placeholder>
                          <div class="d-flex align-center justify-center fill-height">
                            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                          </div>
                        </template>
                        </v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>
                            {{ product.title }}
                            <div class="d-flex justify-start align-center">
                                <v-rating
                                  :model-value="product.rating"
                                  dense
                                  color="orange"
                                  background-color="orange"
                                  hover
                                  class="me-2"
                                ></v-rating>
                                <!-- <span class="text-info text-subtitle-1">{{product.rating}} rating </span> -->
                            </div>
                        </v-card-title>
                        
                        <v-card-subtitle>${{ product.price }}</v-card-subtitle>
                        <v-card-text>
                          <p>{{ product.description }}</p>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="indigo-darken-2"  >Read More</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="bg-primary" elevation="1" @click="()=>cartStore.add(product.id)"  >Add to Cart</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
                
            </v-card>
        </span>
        <span v-if="type==='cart'">
            <v-card class="mx-auto" >
                <v-row align-content="center" >
                    <v-col cols="4" >
                        <v-img :src="product.image"  :lazy-src="product.thumbnail"  height="200px" cover  >
                        <template v-slot:placeholder>
                          <div class="d-flex align-center justify-center fill-height ">
                            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                          </div>
                        </template>
                        </v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>
                            {{ product.title }}
                            <div class="d-flex justify-start align-center">
                                <v-rating
                                  :model-value="product.rating"
                                  dense
                                  color="orange"
                                  background-color="orange"
                                  hover
                                  class="me-2"
                                ></v-rating>
                                <!-- <span class="text-info text-subtitle-1">{{product.rating}} rating </span> -->
                            </div>
                        </v-card-title>
                        <v-card-subtitle>${{ product.cost }}</v-card-subtitle>
                        <v-card-text>
                          <p>{{ product.description }}</p>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="indigo-darken-2"  >
                                <v-row  justify="center" >
                                    <v-col cols="auto">
                                      <v-btn density="compact" icon="mdi-minus" @click="()=>cartStore.handleDecrease(product.id)"></v-btn>
                                    </v-col>
                                    <v-col cols="auto" align-self="center">
                                        {{ product.quantity }}
                                    </v-col>
                                    <v-col cols="auto">
                                      <v-btn density="compact" icon="mdi-plus" @click="()=>cartStore.add(product.id)"></v-btn>
                                    </v-col>
                                </v-row>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="bg-primary" elevation="1" icon="" density="compact">
                                <v-icon
                                  size="large"
                                  color="red-darken-2"
                                  icon="mdi-delete-circle"
                                  @click="()=>cartStore.handleDelete(product.id)"
                                ></v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
                
            </v-card>
        </span>
       
       
    </div>
</template>

<script setup>
    import {useCartStore} from '../stores/cart'
    const cartStore =useCartStore()
    const props=defineProps({
        product:Object,
        type:String
    })
</script>

<style lang="scss" scoped>

</style>