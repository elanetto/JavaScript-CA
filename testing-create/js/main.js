document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const fallbackImageUrl = 'https://via.placeholder.com/150'; // Placeholder image

    fetch('https://api.noroff.dev/api/v1/gamehub')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(products => {
            console.log(products); // Log the products to inspect the structure
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product');
                
                const productImage = document.createElement('img');
                productImage.src = product.image || fallbackImageUrl; // Use correct field and fallback image
                productImage.alt = product.title;

                const productName = document.createElement('h2');
                productName.textContent = product.title;
                productName.classList.add('product-name');

                const productPrice = document.createElement('p');
                productPrice.textContent = `$${product.price}`;

                const lowerProductCard = document.createElement('div');
                lowerProductCard.classList.add('card-buttons')

                const buyNowButton = document.createElement('button');
                buyNowButton.textContent = `Buy now`;
                buyNowButton.classList.add('buy-now-button');

                const productLike = document.createElement('span');
                productLike.innerHTML = `<i class="fa-solid fa-heart"></i>`;
                productLike.classList.add('like-button');

                productCard.appendChild(productImage);
                productCard.appendChild(productName);
                productCard.appendChild(productPrice);

                productCard.appendChild(lowerProductCard);

                lowerProductCard.appendChild(buyNowButton);
                lowerProductCard.appendChild(productLike);
                
                productList.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});
