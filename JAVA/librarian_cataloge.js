document.addEventListener('DOMContentLoaded', () => {
    const recordsTable = document.getElementById('records-table');
    const filterButtons = document.querySelectorAll('.filter-button');

    const records = [
        {
            cover: '/Media/b1.jpg',
            title: 'Basic Linear Algebra',
            author: 'B.S. Blyth',
            publisher: 'Springer-Verlag',
            publicationDate: 'September 2018',
            isbn: '978-3-319-77535-9',
            barcode: '123456789',
            availability: 'Not Available till 18/07/2023',
            type: 'book'
        },
        {
            cover: '/Media/b2.jpg',
            title: 'Advanced Calculus',
            author: 'A. Smith',
            publisher: 'Springer-Verlag',
            publicationDate: 'January 2020',
            isbn: '978-3-319-77536-6',
            barcode: '123456790',
            availability: 'Available',
            type: 'journal'
        },
        {
            cover: '/Media/b3.jpg',
            title: 'Data Structures and Algorithms',
            author: 'Mark Allen Weiss',
            publisher: 'Addison-Wesley',
            publicationDate: 'August 2019',
            isbn: '978-0-321-99288-3',
            barcode: '123456791',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b4.jpg',
            title: 'Artificial Intelligence: A Modern Approach',
            author: 'Stuart Russell, Peter Norvig',
            publisher: 'Pearson',
            publicationDate: 'December 2020',
            isbn: '978-0-136-04459-0',
            barcode: '123456792',
            availability: 'Not Available till 25/06/2023',
            type: 'book'
        },
        {
            cover: '/Media/b5.jpg',
            title: 'Introduction to Algorithms',
            author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
            publisher: 'MIT Press',
            publicationDate: 'July 2009',
            isbn: '978-0-262-03384-8',
            barcode: '123456793',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b6.jpg',
            title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
            author: 'Robert C. Martin',
            publisher: 'Prentice Hall',
            publicationDate: 'August 2008',
            isbn: '978-0-13-235088-4',
            barcode: '123456794',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b7.jpg',
            title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
            author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
            publisher: 'Addison-Wesley',
            publicationDate: 'November 1994',
            isbn: '978-0-201-63361-0',
            barcode: '123456795',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b8_.jpg',
            title: 'The Pragmatic Programmer: Your Journey to Mastery',
            author: 'Andrew Hunt, David Thomas',
            publisher: 'Addison-Wesley',
            publicationDate: 'October 1999',
            isbn: '978-0-201-61622-4',
            barcode: '123456796',
            availability: 'Not Available till 01/07/2023',
            type: 'book'
        },
        {
            cover: '/Media/b9.jpg',
            title: 'Computer Networks',
            author: 'Andrew S. Tanenbaum, David J. Wetherall',
            publisher: 'Pearson',
            publicationDate: 'March 2011',
            isbn: '978-0-13-212695-3',
            barcode: '123456797',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b10.jpg',
            title: 'Operating System Concepts',
            author: 'Abraham Silberschatz, Peter B. Galvin, Greg Gagne',
            publisher: 'Wiley',
            publicationDate: 'November 2018',
            isbn: '978-1-119-32176-0',
            barcode: '123456798',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b11_.jpg',
            title: 'Database System Concepts',
            author: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan',
            publisher: 'McGraw-Hill',
            publicationDate: 'May 2019',
            isbn: '978-0-07-802215-9',
            barcode: '123456799',
            availability: 'Not Available till 20/06/2023',
            type: 'book'
        },
        {
            cover: '/Media/b12.jpg',
            title: 'Principles of Compiler Design',
            author: 'Alfred V. Aho, Jeffrey D. Ullman',
            publisher: 'Addison-Wesley',
            publicationDate: 'January 1977',
            isbn: '978-0-201-00022-1',
            barcode: '123456800',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b13.jpeg',
            title: 'Pattern Recognition and Machine Learning',
            author: 'Christopher M. Bishop',
            publisher: 'Springer',
            publicationDate: 'October 2006',
            isbn: '978-0-387-31073-2',
            barcode: '123456801',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b14.jpeg',
            title: 'Digital Image Processing',
            author: 'Rafael C. Gonzalez, Richard E. Woods',
            publisher: 'Pearson',
            publicationDate: 'August 2017',
            isbn: '978-0-13-444646-7',
            barcode: '123456802',
            availability: 'Not Available till 30/06/2023',
            type: 'book'
        },
        {
            cover: '/Media/b15.jpg',
            title: 'Computer Vision: Algorithms and Applications',
            author: 'Richard Szeliski',
            publisher: 'Springer',
            publicationDate: 'September 2010',
            isbn: '978-1-84882-934-3',
            barcode: '123456803',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b16.jpg',
            title: 'Deep Learning',
            author: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville',
            publisher: 'MIT Press',
            publicationDate: 'November 2016',
            isbn: '978-0-262-03561-3',
            barcode: '123456804',
            availability: 'Not Available till 25/06/2023',
            type: 'book'
        },
        {
            cover: '/Media/b17.jpg',
            title: 'Reinforcement Learning: An Introduction',
            author: 'Richard S. Sutton, Andrew G. Barto',
            publisher: 'MIT Press',
            publicationDate: 'October 2018',
            isbn: '978-0-262-03924-6',
            barcode: '123456805',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b18.jpg',
            title: 'The C Programming Language',
            author: 'Brian W. Kernighan, Dennis M. Ritchie',
            publisher: 'Prentice Hall',
            publicationDate: 'February 1988',
            isbn: '978-0-13-110362-1',
            barcode: '123456806',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b19.jpg',
            title: 'Structure and Interpretation of Computer Programs',
            author: 'Harold Abelson, Gerald Jay Sussman',
            publisher: 'MIT Press',
            publicationDate: 'July 1996',
            isbn: '978-0-262-51087-3',
            barcode: '123456807',
            availability: 'Not Available till 20/06/2023',
            type: 'book'
        },
        {
            cover: '/Media/b20.jpg',
            title: 'Algorithms',
            author: 'Robert Sedgewick, Kevin Wayne',
            publisher: 'Addison-Wesley',
            publicationDate: 'April 2011',
            isbn: '978-0-321-57351-8',
            barcode: '123456808',
            availability: 'Available',
            type: 'book'
        },
        {
            cover: '/Media/b21.jpg',
            title: 'Journal of Machine Learning Research',
            author: 'Multiple Authors',
            publisher: 'MIT Press',
            publicationDate: 'April 2021',
            isbn: '978-1-624-48080-5',
            barcode: '123456811',
            availability: 'Available',
            type: 'journal'
        },
        {
            cover: '/Media/b22.jpg',
            title: 'IEEE Transactions on Neural Networks and Learning Systems',
            author: 'Multiple Authors',
            publisher: 'IEEE',
            publicationDate: 'May 2021',
            isbn: '978-1-4244-8007-5',
            barcode: '123456812',
            availability: 'Available',
            type: 'journal'
        },
        {
            cover: '/Media/b23.png',
            title: 'Nature Machine Intelligence',
            author: 'Multiple Authors',
            publisher: 'Nature Publishing Group',
            publicationDate: 'June 2021',
            isbn: '978-1-7804-0000-1',
            barcode: '123456813',
            availability: 'Not Available till 01/07/2023',
            type: 'journal'
        },
        {
            cover: '/Media/b24.jpg',
            title: 'Journal of Artificial Intelligence Research',
            author: 'Multiple Authors',
            publisher: 'AI Access Foundation',
            publicationDate: 'July 2021',
            isbn: '978-1-577-40503-7',
            barcode: '123456814',
            availability: 'Available',
            type: 'journal'
        },
        {
            cover: '/Media/b25.jpg',
            title: 'ACM Transactions on Graphics',
            author: 'Multiple Authors',
            publisher: 'ACM',
            publicationDate: 'August 2021',
            isbn: '978-1-4503-8307-7',
            barcode: '123456815',
            availability: 'Available',
            type: 'journal'
        },
        {
            cover: '/Media/b26.jpg',
            title: 'Journal of Computer Vision',
            author: 'Multiple Authors',
            publisher: 'Springer',
            publicationDate: 'September 2021',
            isbn: '978-1-4451-2389-4',
            barcode: '123456816',
            availability: 'Not Available till 15/07/2023',
            type: 'journal'
        },
       
        {
            cover: '/Media/b27.jpg',
            title: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
            author: 'Multiple Authors',
            publisher: 'IEEE',
            publicationDate: 'November 2021',
            isbn: '978-1-4244-9766-6',
            barcode: '123456818',
            availability: 'Available',
            type: 'journal'
        }
    ];
    

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

    document.getElementById('search-btn').addEventListener('click', () => {
        const searchInput = document.querySelector('.top-bar input[type="search"]').value.toLowerCase();
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
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.querySelector(".sidebar");

    hamburger.addEventListener("click", function() {
        sidebar.classList.toggle("open");
    });

    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            // Add filter functionality based on button id
            filterRecords(this.id);
        });
    });
});

function filterRecords(filterId) {
    const rows = document.querySelectorAll("#records-table tr");
    rows.forEach(row => {
        row.style.display = "table-row";
        const type = row.getAttribute("data-type");
        if (filterId !== "filter-all" && filterId !== `filter-${type}`) {
            row.style.display = "none";
        }
    });
}
