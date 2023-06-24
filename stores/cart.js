import { defineStore } from "pinia";

export const useCartStore=defineStore('cartStore',{
    
    state:()=>({
        cartProducts:{},
        theme:'light',
        products:[],
    }),
    getters:{
        formattedCartProducts(){
            // console.log("this.products",this.products)
            return Object.keys(this.cartProducts).map(productId=>{
                    const idAndQuatity=this.cartProducts[productId]
                    
                    const product = this.products.find(p=> p.id===idAndQuatity.productId)
                return {
                    id:idAndQuatity?.productId,
                    image:product.images[0],
                    thumbnail:product.thumbnail,    
                    title:product.title,
                    description:product.description,
                    rating:product.rating,
                    price:product?.price,
                    quantity:idAndQuatity?.quantity,
                    cost:idAndQuatity?.quantity*product?.price
                }
            })
        },
        // total(){
        //     return Object.keys(this.cartProducts).reduce((tot,id)=>{
        //         const product=this.products.find(p=>p.id==id)
        //         if(product){
        //             return tot+(product.price*this.cartProducts[id].quantity)
        //         }else{
        //             return tot+0
        //         }
        //     },0)
        // }
        total(){
            return Object.keys(this.cartProducts).reduce((tot,id)=>{
                const product=this.formattedCartProducts.find(p=>p.id==id)
                if(product){
                    return tot+product.cost
                }else{
                    return tot+0
                }
            },0)
        },
        productsTotal(){
            return Object.keys(this.cartProducts).reduce((nums,id)=>{
                const product=this.formattedCartProducts.find(p=>p.id==id)
                if(product){
                    return nums+this.cartProducts[id].quantity
                }else{
                    return nums+0
                }
            },0)
        },

    },
    actions:{
        add(productId){
            if(this.cartProducts.hasOwnProperty(productId)){
                this.cartProducts[productId]={
                    productId:productId,
                    quantity:this.cartProducts[productId].quantity+1
                }
            }else{
                this.cartProducts[productId]={
                    productId:productId,
                    quantity:1
                }
            }
        },
        handleDecrease(productId){
            if(this.cartProducts.hasOwnProperty(productId)){
                this.cartProducts[productId].quantity-=1

                if(this.cartProducts[productId].quantity===0) {
                    delete this.cartProducts[productId]
                }
            }else{
                return
            } 
        },
        handleDelete(productId){
            delete this.cartProducts[productId]
        },
        toggleTheme(){
            this.theme=this.theme=='light'? 'dark':'light'
        },
        async getAllProducts(){
            const {data}= await useFetch('https://dummyjson.com/products')
            if(data.value){
                this.products=data.value.products
            }
        }
    },
    
})


