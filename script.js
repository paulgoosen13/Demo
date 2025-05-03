let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cart.length;
}

function changeImage(thumbnail) {
  document.getElementById("main-image").src = thumbnail.src;
}

