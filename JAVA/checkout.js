document.getElementById('payment-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Payment processed successfully!');
});
document.addEventListener('DOMContentLoaded', () => {
  const borrowButtons = document.querySelectorAll('.borrow-btn');
  const cartIcon = document.getElementById('cart');
  const cartCount = document.getElementById('cart-count');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  borrowButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          const bookDiv = event.target.closest('.book');
          const bookId = bookDiv.dataset.bookId;
          const bookName = bookDiv.dataset.bookName;
          cart.push({ id: bookId, name: bookName });
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCart();
          alert(`Book ID: ${bookId}, Name: ${bookName} added to cart`);
      });
  });

  cartIcon.addEventListener('click', () => {
      showCartItems();
  });

  function updateCart() {
      updateCartIcon();
      updateCartCount();
  }

  function updateCartIcon() {
      const cartItemCount = cart.length;
      cartIcon.innerHTML = `🛒`;
  }

  function updateCartCount() {
      const cartItemCount = cart.length;
      cartCount.textContent = cartItemCount;
  }

  function showCartItems() {
      const cartItemsContainer = document.getElementById('cart-items');
      cartItemsContainer.innerHTML = '';

      cart.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.textContent = `Book ID: ${item.id}, Name: ${item.name}`;
          cartItemsContainer.appendChild(itemElement);
      });
  }

  // Initial cart updates
  updateCart();
});
