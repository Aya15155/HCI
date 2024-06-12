document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');

    document.getElementById('hamburger').style.zIndex= 1001;
});


document.querySelectorAll('.approve, .decline').forEach(button => {
    button.addEventListener('click', function() {
        alert(this.textContent + ' request ID: ' + this.parentElement.parentElement.cells[2].textContent);
    });
});

document.getElementById('search-btn').addEventListener('click', function() {
    const idValue = document.getElementById('id').value.trim().toLowerCase();
    const emailValue = document.getElementById('email').value.trim().toLowerCase();
    const categoryValue = document.getElementById('category').value;

    const tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach(row => {
        const id = row.cells[2].textContent.trim().toLowerCase();
        const email = row.cells[0].textContent.trim().toLowerCase(); // Assuming email is in the first cell, adjust as needed
        const category = row.cells[3].textContent.trim().toLowerCase();

        let matchesId = idValue ? id.includes(idValue) : true;
        let matchesEmail = emailValue ? email.includes(emailValue) : true;
        let matchesCategory = categoryValue === 'all' || categoryValue === category;

        if (matchesId && matchesEmail && matchesCategory) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});