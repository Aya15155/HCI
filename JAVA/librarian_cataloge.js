const records = [
    { cover: 'cover.jpg', title: 'Basic Linear Algebra', author: 'B.S. Blyth', publisher: 'Springer-Verlag', publicationDate: 'September 2018', isbn: '978-3-319-77535-9', barcode: '123456789', availability: 'Not Available till 18/07/2023', type: 'book' },
    { cover: 'cover.jpg', title: 'Advanced Calculus', author: 'A. Smith', publisher: 'Springer-Verlag', publicationDate: 'January 2020', isbn: '978-3-319-77536-6', barcode: '123456790', availability: 'available', type: 'journal' },
    // Add more records as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const recordsTable = document.getElementById('records-table');
    const filterButtons = document.querySelectorAll('.filter-button');

    function renderRecords(filter = 'all') {
        recordsTable.innerHTML = '';
        const filteredRecords = filter === 'all' ? records : records.filter(record => record.type === filter);

        filteredRecords.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${record.cover}" alt="${record.title}" width="50"></td>
                <td>${record.title}</td>
                <td>${record.author}</td>
                <td>${record.publisher}</td>
                <td>${record.publicationDate}</td>
                <td>${record.isbn}</td>
                <td>${record.barcode}</td>
                <td>${record.availability}</td>
            `;
            recordsTable.appendChild(row);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.id.replace('filter-', '');
            renderRecords(filter);
        });
    });

    document.getElementById('search-button').addEventListener('click', () => {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const filteredRecords = records.filter(record => record.title.toLowerCase().includes(searchInput));
        renderRecords(filteredRecords);
    });

    document.getElementById('add-new').addEventListener('click', () => {
        // Implement add new record functionality
    });

    document.getElementById('delete-record').addEventListener('click', () => {
        // Implement delete record functionality
    });

    renderRecords();
});
