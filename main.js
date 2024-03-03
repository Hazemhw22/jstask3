//fetch
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
    //get product  
    const productList = document.getElementById('product-list');

    data.products.forEach(product => {
       
        const productContainer = document.createElement('div');
       
        productContainer.classList.add('product');

        //h2
        const titleElement = document.createElement('h2');
        titleElement.textContent = product.title;

        //  image
        const imageElement = document.createElement('img');
        imageElement.src = product.thumbnail;
        imageElement.alt = product.title;

        // price
        const priceElement = document.createElement('p');
        priceElement.textContent = `$${product.price}`;

        // add product
        productContainer.appendChild(titleElement);
        productContainer.appendChild(imageElement);
        productContainer.appendChild(priceElement);
        productList.appendChild(productContainer);
    });
})
//error in console
.catch(error => console.error('Error fetching data:', error));