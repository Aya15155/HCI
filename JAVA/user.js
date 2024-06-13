document.addEventListener('DOMContentLoaded', () => {
    const borrowButtons = document.querySelectorAll('.borrow-btn');
    const cartIcon = document.getElementById('cart');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    borrowButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const bookId = event.target.dataset.bookId;
            cart.push(bookId);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`Book ${bookId} added to cart`);
        });
    });

    cartIcon.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });

    if (window.location.pathname.endsWith('checkout.html')) {
        const cartItemsContainer = document.getElementById('cart-items');
        cart.forEach(bookId => {
            const item = document.createElement('div');
            item.textContent = `Book ID: ${bookId}`;
            cartItemsContainer.appendChild(item);
        });
    }

    const meetingRoomForm = document.getElementById('meeting-room-form');
    if (meetingRoomForm) {
        meetingRoomForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Meeting room request submitted!');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const borrowButtons = document.querySelectorAll('.borrow-btn');

    borrowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookId = this.getAttribute('data-book-id');
            console.log('Borrow book with ID:', bookId);
            // Implement borrowing functionality here
        });
    });
});

bookSections.forEach(section => {
    const bookList = section.querySelector('.book-list');
    const books = bookList.querySelectorAll('.book');
    const totalPages = Math.ceil(books.length / booksPerPage);

    function showPage(page) {
        books.forEach((book, index) => {
            book.classList.add('hidden');
            if (index >= (page - 1) * booksPerPage && index < page * booksPerPage) {
                book.classList.remove('hidden');
            }
        });
    }

    showPage(currentPage);

    section.querySelector('.prev-arrow').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    section.querySelector('.next-arrow').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });
});
//Ensure header follows along when scrolling
    window.addEventListener('scroll', () => {
        header.style.transform = `translateY(${window.scrollY}px)`;
    });

    document.getElementById('subscribe-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (email) {
            alert('Thank you for subscribing with ' + email);
        }
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        const borrowButtons = document.querySelectorAll('.borrow-btn');
        const cartIcon = document.getElementById('cart');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        borrowButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const bookId = event.target.dataset.bookId;
                cart.push(bookId);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`Book ${bookId} added to cart`);
            });
        });
    
        cartIcon.addEventListener('click', () => {
            window.location.href = 'checkout.html';
        });
    });
      

    document.addEventListener('DOMContentLoaded', () => {
        const borrowButtons = document.querySelectorAll('.borrow-btn');
        const cartIcon = document.getElementById('cart');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        borrowButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const bookId = event.target.dataset.bookId;
                cart.push(bookId);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartIcon(); // Update cart icon
                alert(`Book ${bookId} added to cart`);
            });
        });
    
        cartIcon.addEventListener('click', () => {
            showCartItems(); // Show cart items when clicking on the cart
        });
    
        function updateCartIcon() {
            const cartItemCount = cart.length;
            cartIcon.innerHTML = `🛒 ${cartItemCount}`;
        }
    
        function showCartItems() {
            const cartItemsContainer = document.getElementById('cart-items');
            cartItemsContainer.innerHTML = ''; // Clear previous items
    
            cart.forEach(bookId => {
                const item = document.createElement('div');
                item.textContent = `Book ID: ${bookId}`;
                cartItemsContainer.appendChild(item);
            });
        }
    
        // Initial cart icon update
        updateCartIcon();
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        const borrowButtons = document.querySelectorAll('.borrow-btn');
        const cartIcon = document.getElementById('cart');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        borrowButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const bookId = event.target.dataset.bookId;
                cart.push(bookId);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartIcon(); // Update cart icon
                updateCartItems(); // Show cart items in cart
                alert(`Book ${bookId} added to cart`);
            });
        });
    
        cartIcon.addEventListener('click', () => {
            showCartItems(); // Show cart items when clicking on the cart
        });
    
        function updateCartIcon() {
            const cartItemCount = cart.length;
            cartIcon.innerHTML = `🛒 ${cartItemCount}`;
        }
    
        function updateCartItems() {
            const cartItemsContainer = document.getElementById('cart-items');
            cartItemsContainer.innerHTML = ''; // Clear previous items
            cart.forEach(bookId => {
                const item = document.createElement('div');
                item.textContent = `Book ID: ${bookId}`;
                cartItemsContainer.appendChild(item);
            });
        }
    
        // Initial cart icon update
        updateCartIcon();
    });

    document.addEventListener('DOMContentLoaded', () => {
        const borrowButtons = document.querySelectorAll('.borrow-btn');
        const cartIcon = document.getElementById('cart');
        const cartCount = document.getElementById('cart-count');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        borrowButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const bookId = event.target.dataset.bookId;
                cart.push(bookId);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
                alert(`Book ${bookId} added to cart`);
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
    
            cart.forEach(bookId => {
                const item = document.createElement('div');
                item.textContent = `Book ID: ${bookId}`;
                cartItemsContainer.appendChild(item);
            });
        }
    
        // Initial cart updates
        updateCart();
    });
    


