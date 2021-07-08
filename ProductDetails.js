app.component('product-details',{
    props:{
        details:{
            type: String,
            required: true
        }
    },
    template:
        `
        <div class="product-details">
            <p>Details: {{details}}</p>
        </div>
        `,
        computed: {
            details(){
                return this.details
            }
        }
})