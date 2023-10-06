function productTemplate ({product_name, category, price, release_date, rating, image_url, ...product}) {
    

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
          <li>Release Date: ${release_date}</li>
          <li>Rating:${rating}</li>
        </ul>
      </div>
    </div>
  </aside>
    `
    const element = document.createRange().createContextualFragment(template)
    return element

}

export {productTemplate}