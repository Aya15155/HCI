document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.sidebar ul li a');
  const pages = document.querySelectorAll('.page');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const pageId = this.getAttribute('data-page');
          pages.forEach(page => {
              page.classList.remove('active');
          });
          document.getElementById(pageId).classList.add('active');
      });
  });

  // Show the first page by default
  if (pages.length > 0) {
      pages[0].classList.add('active');
  }
});