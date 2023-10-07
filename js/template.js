function productTemplate ({product_name, category, price, country_of_origin, allergens, image_url, ...product}) {
    

    const template = `
    <aside class="product">
    <header>
      <h2>${product_name}</h2>
    </header>
    <div class="profile">
      <img src="${image_url}" alt="${product_name}" />

      <div class="info">
        <ul>
          <li>Category: ${category}</li>
          <li>Price: ${price}</li>
          <li>Country of Origin: ${country_of_origin}</li>
          <li>Allergens: ${allergens}</li>
        </ul>
      </div>
    </div>
  </aside>
    `
    const element = document.createRange().createContextualFragment(template)
    return element

}

export {productTemplate}