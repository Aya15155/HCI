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


function goToHomePage() {
  window.location.href = 'user.html'; // Update with the correct path to your home page
}

document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Display cart items
  const updateCartItems = () => {
      const cartItemsContainer = document.getElementById('cart-items-container');
      cartItemsContainer.innerHTML = ''; // Clear existing items
      cart.forEach((bookId, index) => {
          const item = document.createElement('div');
          item.classList.add('cart-item');
          item.innerHTML = `
              <i class="fa-solid fa-book fa-3x"></i>
              <div class="book-info">
                  <p>Book Title ${bookId}</p>
                  <p>$10.00</p>
              </div>
              <button class="remove-btn" data-index="${index}">🗑️</button>
          `;
          cartItemsContainer.appendChild(item);
      });

      // Add event listeners for remove buttons
      const removeButtons = document.querySelectorAll('.remove-btn');
      removeButtons.forEach(button => {
          button.addEventListener('click', (event) => {
              const index = event.target.dataset.index;
              cart.splice(index, 1);
              localStorage.setItem('cart', JSON.stringify(cart));
              updateCartItems();
              calculateTotalAmount();
          });
      });
  };

  // Calculate and display total amount
  const calculateTotalAmount = () => {
      const totalAmount = cart.length * 10; // Assuming each book costs $10
      document.getElementById('product-total').textContent = `Product total: $${(totalAmount).toFixed(2)}`;
      document.getElementById('discount').textContent = `Discount: $${(totalAmount * 0.1).toFixed(2)}`; // Assuming 10% discount
      document.getElementById('total-amount').textContent = `Total: $${(totalAmount * 0.9).toFixed(2)}`; // After discount
  };

  // Handle payment and order
  const orderButton = document.getElementById('order-btn');
  orderButton.addEventListener('click', () => {
      const selectedPaymentMethod = document.getElementById('saved-cards').value;
      const cardName = document.getElementById('card-name').value;
      const cardNumber = document.getElementById('card-number').value;
      const expiryDate = document.getElementById('expiry-date').value;
      const ccv = document.getElementById('ccv').value;

      // Validate payment information (add your validation logic here)

      // Simulate order success
      alert('Order placed successfully!');
      localStorage.removeItem('cart'); // Clear cart after order
      updateCartItems(); // Update cart display
      calculateTotalAmount(); // Update total amount display
  });

  // Initial cart items and total amount display
  updateCartItems();
  calculateTotalAmount();
});

document.addEventListener('DOMContentLoaded', () => {
  const borrowButtons = document.querySelectorAll('.borrow-btn');
  const cartIcon = document.getElementById('cart');
  const cartCount = document.getElementById('cart-count');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  borrowButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          const bookId = event.target.dataset.bookId;
          const bookName = event.target.dataset.bookName;
          const bookImage = event.target.dataset.bookImage;
          cart.push({ id: bookId, name: bookName, image: bookImage });
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCart();
          alert(`Book ${bookName} added to cart`);
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
      const cartItemsContainer = document.getElementById('cart-items-container');
      cartItemsContainer.innerHTML = '';

      cart.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');

          const img = document.createElement('img');
          img.src = item.image;
          img.alt = 'Book Image';

          const bookInfo = document.createElement('div');
          bookInfo.classList.add('book-info');
          bookInfo.textContent = `Book ID: ${item.id}, Name: ${item.name}`;

          const removeBtn = document.createElement('button');
          removeBtn.classList.add('remove-btn');
          removeBtn.innerHTML = '&times;';
          removeBtn.addEventListener('click', () => {
              cart = cart.filter(cartItem => cartItem.id !== item.id);
              localStorage.setItem('cart', JSON.stringify(cart));
              showCartItems();
              updateCart();
          });

          cartItem.appendChild(img);
          cartItem.appendChild(bookInfo);
          cartItem.appendChild(removeBtn);

          cartItemsContainer.appendChild(cartItem);
      });
  }

  // Initial cart updates
  updateCart();
  showCartItems();
});

function goToHomePage() {
  window.location.href = 'user.html'; // Update with the correct path to your home page
}

function validateForm() {
  const cardName = document.getElementById('card-name').value.trim();
  const cardNumber = document.getElementById('card-number').value.trim();
  const expiryDate = document.getElementById('expiry-date').value.trim();
  const ccv = document.getElementById('ccv').value.trim();

  if (!cardName || !cardNumber || !expiryDate || !ccv) {
      alert('Please fill in all the required fields.');
      return false;
  }
  return true;
}
document.getElementById('order-btn').addEventListener('click', () => {
  if (validateForm()) {
      placeOrder();
  }
});
function placeOrder() {
  // Add your order placing logic here
  alert('Order placed successfully!');
}
document.addEventListener('DOMContentLoaded', () => {
  // Other code ...

  document.getElementById('order-btn').addEventListener('click', () => {
      if (validateForm()) {
          placeOrder();
      }
  });

 
});
function resetOrderSummary() {
  localStorage.removeItem('cart'); // Remove cart items from local storage
  updateCartItems(); // Update cart display
  calculateTotalAmount(); // Update total amount display
}
function placeOrder() {
  // Add your order placing logic here
  alert('Order placed successfully!');
  resetOrderSummary(); // Reset order summary after successful order placement
}

