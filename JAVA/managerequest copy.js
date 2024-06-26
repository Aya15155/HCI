document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('hamburger').style.zIndex = 1001;
});

let selectedRow;

// Event listener for the approve buttons
document.querySelectorAll('.approve').forEach(button => {
    button.addEventListener('click', function() {
        selectedRow = this.closest('tr');
        showConfirmModal('approve');
    });
});

// Event listener for the decline buttons
document.querySelectorAll('.decline').forEach(button => {
    button.addEventListener('click', function() {
        selectedRow = this.closest('tr');
        showConfirmModal('decline');
    });
});

// Show confirmation modal
function showConfirmModal(action) {
    const confirmModal = document.getElementById('confirmModal');
    const confirmYes = document.getElementById('confirmYes');
    const confirmNo = document.getElementById('confirmNo');

    confirmModal.style.display = 'block';

    confirmYes.onclick = function() {
        if (action === 'approve') {
            showSuccessModal();
        } else {
            showDeclineModal();
        }
        confirmModal.style.display = 'none';
    };

    confirmNo.onclick = function() {
        confirmModal.style.display = 'none';
    };
}

// Show success modal
function showSuccessModal() {
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'block';
    setTimeout(function() {
        successModal.style.display = 'none';
        if (selectedRow) {
            selectedRow.remove();
        }
    }, 2000);
}

// Show decline modal (similar to success modal)
function showDeclineModal() {
    const successModal = document.getElementById('successModal');
    successModal.querySelector('p').textContent = 'Request Declined Successfully';
    successModal.style.backgroundColor = '#f44336';
    successModal.style.display = 'block';
    setTimeout(function() {
        successModal.style.display = 'none';
        successModal.querySelector('p').textContent = 'Request Approved Successfully';
        successModal.style.backgroundColor = '#4CAF50';
        if (selectedRow) {
            selectedRow.remove();
        }
    }, 2000);
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    const confirmModal = document.getElementById('confirmModal');
    const successModal = document.getElementById('successModal');

    if (event.target === confirmModal) {
        confirmModal.style.display = 'none';
    }

    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
};
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
