let cart = [];
let totalPrice = 0;
let currentSlide = 0; // Tracks the current slide position (0, 4, 8, etc.)

// Function to show products in the carousel (only 4 at a time)
function showCarousel() {
    const carousel = document.querySelector('.carousel');
    const allProducts = document.querySelectorAll('.product-card');

    // Hide all product cards
    allProducts.forEach((product, index) => {
        product.style.display = 'none';
    });

    // Show 4 products based on the currentSlide
    for (let i = currentSlide; i < currentSlide + 4; i++) {
        if (allProducts[i]) {
            allProducts[i].style.display = 'block';
        }
    }
}

// Function to move the carousel (next or previous)
function moveCarousel(direction) {
    const allProducts = document.querySelectorAll('.product-card');
    const totalProducts = allProducts.length;

    // Adjust the currentSlide position based on the direction
    currentSlide += direction;

    // Prevent going beyond the first or last set of 4 products
    if (currentSlide < 0) {
        currentSlide = totalProducts - 4; // Go to the last set of products
    } else if (currentSlide > totalProducts - 4) {
        currentSlide = 0; // Go back to the first set of products
    }

    showCarousel();
}

// Function to update the cart
function addToCart(productName, productPrice) {
    // Add the selected product to the cart
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear previous items

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₺${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });

    // Update the total price
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Proceeding to checkout with a total of ₺${totalPrice.toFixed(2)}`);
        // Reset the cart after checkout (or implement further checkout logic)
        cart = [];
        totalPrice = 0;
        updateCart();
    }
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}


// Initialize the carousel when the page loads
document.addEventListener('DOMContentLoaded', function () {
    showCarousel();
});
