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

                const productPrice = document.createElement('p');
                productPrice.textContent = `$${product.price}`;

                productCard.appendChild(productImage);
                productCard.appendChild(productName);
                productCard.appendChild(productPrice);
                
                productList.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});
