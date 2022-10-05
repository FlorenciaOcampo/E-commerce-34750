const products = [
    {
        id: '1',
        name: 'Pet Sematery',
        price: 1000,
        category: 'thriller',
        description:'descripción de libro',
        img: "https://m.media-amazon.com/images/I/41jkeWHRlSL._SX318_BO1,204,203,200_.jpg"
},
{id:'2', name: 'Hamlet', price:1200, category: 'lírico', description: 'descripción de libro',
img:'https://static-media.hotmart.com/gl_hvlESizuWOTpRNaYLoctY4EA=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_contents/2bd7c50a-f5b1-427a-94d8-a3d190275d6f/hamlet.jpg?w=920'},
{id:'3', name: 'Divina Comedia', price:1800, category: 'literario', description: 'descripción de libro', img:'https://images.cdn2.buscalibre.com/fit-in/360x360/01/e0/01e04c600c7b7bfaf5a14c17a640e5af.jpg'}
]
export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            resolve(products)
        }, 1500)
    })
}
export const getProduct =(id) => {
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products.find(prod=> prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory =(categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod=> prod.category === categoryId))
        }, 1000)
    })
}