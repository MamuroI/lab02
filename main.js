const app = Vue.createApp({
    data() {
        return {
            // product: 'Shoes',
            // brand: 'SE 331',
            // image: './assets/images/socks_green.jpg',
            // inStock: true,
            // inventory: 100,
            // details: ['50% cotton', '30% wool', '20% polyester'],
            // variants: [
            //     { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity:10 },
            //     { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:0 }
            // ],
            cart: 0,
            // selectedVariant:0,
            // onSale: true
            premium: true

        }
    },
    methods: {
        addToCart() {
            if(((this.variants[0].quantity+this.variants[1].quantity)-this.cart) > 0){
                this.cart += 1
            }
            else{
                this.cart += 0
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index){
            this.selectedVariant = index;
        }
    },
    computed:{
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        onSaleText(){
            if((this.variants[this.selectedVariant].quantity > 0) && (this.onSale==true)){
                return this.brand + ' ' + this.product + ' is on sale';
            }else{
                return this.brand + ' ' + this.product + ' is not on sale';
            }
            
        }
    }
})