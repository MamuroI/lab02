app.component('product-details',{
    props:{
        details:{
            type: String,
            required: true
        },
    },
    template:
        `<p>Materials Details:</p>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        `
        
        
})