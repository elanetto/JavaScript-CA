console.log("Hello there!")

// Make HTML-div's available as variables:
const productsContainer = document.querySelector('.products-container')

// Set the variables to get elements from the API:
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const productTitle = urlParams.get('title');
const productImage = urlParams.get('image');
const productPrice = urlParams.get('price'); 

// testing with game number 1 with the id: ded6041a-622f-4fb4-81e4-96fcfdad4dff
// By the way; WTF is up with these ID numbers? It is a small API, and only numbers would be good.

function getProducts() {
    fetch('https://api.noroff.dev/api/v1/gamehub/ded6041a-622f-4fb4-81e4-96fcfdad4dff')
    .then(res => res.json())
    .then(productData => {
        productsContainer.innerHTML = `
        <div class="single-product">
            <img class="product-image" src="${productData.image}" alt="${productData.title}"></img>
            <h2 class="product-title">${productData.title}</h2>
            <p class="product-description">${productData.description}</p>
            <p class="product-price">Price: ${productData.price}</p>
            <button class="buy-now-btn"
                data-product-id="${productData.id}"
                data-product-title="${productData.title}"
                data-product-image="${productData.image}"
                data-product-price="${productData.price}">
                    Buy now
            </button>
        </div>
        `;
    })
}

getProducts();

// Are we allowed to re-name the id's of the API?