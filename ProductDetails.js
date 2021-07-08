app.component('product-details',{
    props:{
        details:{
            type: Array,
            required: true
        },
    },
    template:
        `<p>Materials Details:</p>
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        `,      
})