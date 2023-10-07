import { productTemplate } from "./template.js"

// Create a store for Products
let productStore = []

async function getProductData (url) {
    const response = await fetch(url) 
    productStore = [... await response.json()] 
    renderProduct(productStore)
}

getProductData('./db/products.json')

function renderProduct (products){
    const container = document.createElement('div')
    products.forEach((product) => {
        container.append(productTemplate(product))
    })
    document.querySelector('#cards').append(container)
}


