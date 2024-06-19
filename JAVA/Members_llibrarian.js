const users = [
    {
        profile: '/Media/a1.png',
        fullName: 'John Doe',
        joinDate: 'January 1, 2020',
        email: 'johndoe@example.com',
        phoneNumber: '123-456-7890',
        totalFeesNotPaid: '$50',
        borrowedItems: [
            { title: 'Basic Linear Algebra', author: 'B.S. Blyth', category: 'Book', dueDate: 'June 20, 2023', status: 'Not Returned' },
            { title: 'Advanced Calculus', author: 'A. Smith', category: 'Journal', dueDate: 'May 15, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a2.png',
        fullName: 'Jane Smith',
        joinDate: 'February 5, 2020',
        email: 'janesmith@example.com',
        phoneNumber: '123-456-7891',
        totalFeesNotPaid: '$10',
        borrowedItems: [
            { title: 'Physics Fundamentals', author: 'C. Johnson', category: 'Book', dueDate: 'July 15, 2023', status: 'Not Returned' },
            { title: 'Chemistry 101', author: 'D. Lee', category: 'Book', dueDate: 'August 10, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a3.png',
        fullName: 'Michael Brown',
        joinDate: 'March 12, 2020',
        email: 'michaelbrown@example.com',
        phoneNumber: '123-456-7892',
        totalFeesNotPaid: '$30',
        borrowedItems: [
            { title: 'Modern Biology', author: 'E. Taylor', category: 'Book', dueDate: 'June 30, 2023', status: 'Not Returned' },
            { title: 'Historical Essays', author: 'F. Harris', category: 'Journal', dueDate: 'April 20, 2023', status: 'Returned' }
        ]
    },
    // Add more user objects as needed
    {
        profile: '/Media/a4.png',
        fullName: 'Emily Davis',
        joinDate: 'April 7, 2020',
        email: 'emilydavis@example.com',
        phoneNumber: '123-456-7893',
        totalFeesNotPaid: '$20',
        borrowedItems: [
            { title: 'World History', author: 'G. Martin', category: 'Book', dueDate: 'July 25, 2023', status: 'Not Returned' },
            { title: 'Economics Basics', author: 'H. Clark', category: 'Journal', dueDate: 'May 12, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a5.png',
        fullName: 'David Wilson',
        joinDate: 'May 20, 2020',
        email: 'davidwilson@example.com',
        phoneNumber: '123-456-7894',
        totalFeesNotPaid: '$40',
        borrowedItems: [
            { title: 'Introduction to Psychology', author: 'I. Lewis', category: 'Book', dueDate: 'August 1, 2023', status: 'Not Returned' },
            { title: 'Philosophy 101', author: 'J. Walker', category: 'Book', dueDate: 'June 5, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a6.png',
        fullName: 'Linda Martinez',
        joinDate: 'June 30, 2020',
        email: 'lindamartinez@example.com',
        phoneNumber: '123-456-7895',
        totalFeesNotPaid: '$15',
        borrowedItems: [
            { title: 'Art History', author: 'K. Robinson', category: 'Book', dueDate: 'September 3, 2023', status: 'Not Returned' },
            { title: 'Music Theory', author: 'L. Hall', category: 'Journal', dueDate: 'July 19, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a7.png',
        fullName: 'Robert Anderson',
        joinDate: 'July 14, 2020',
        email: 'robertanderson@example.com',
        phoneNumber: '123-456-7896',
        totalFeesNotPaid: '$60',
        borrowedItems: [
            { title: 'Political Science', author: 'M. Allen', category: 'Book', dueDate: 'August 15, 2023', status: 'Not Returned' },
            { title: 'Sociology Today', author: 'N. Young', category: 'Journal', dueDate: 'June 28, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a8.png',
        fullName: 'Patricia Thomas',
        joinDate: 'August 9, 2020',
        email: 'patriciathomas@example.com',
        phoneNumber: '123-456-7897',
        totalFeesNotPaid: '$25',
        borrowedItems: [
            { title: 'Business Management', author: 'O. King', category: 'Book', dueDate: 'September 7, 2023', status: 'Not Returned' },
            { title: 'Marketing Strategies', author: 'P. Wright', category: 'Journal', dueDate: 'July 30, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a9.png',
        fullName: 'James White',
        joinDate: 'September 1, 2020',
        email: 'jameswhite@example.com',
        phoneNumber: '123-456-7898',
        totalFeesNotPaid: '$35',
        borrowedItems: [
            { title: 'Engineering Mechanics', author: 'Q. Scott', category: 'Book', dueDate: 'October 10, 2023', status: 'Not Returned' },
            { title: 'Software Development', author: 'R. Adams', category: 'Journal', dueDate: 'August 25, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a10.png',
        fullName: 'Barbara Lewis',
        joinDate: 'October 5, 2020',
        email: 'barbaralewis@example.com',
        phoneNumber: '123-456-7899',
        totalFeesNotPaid: '$45',
        borrowedItems: [
            { title: 'Digital Marketing', author: 'S. Baker', category: 'Book', dueDate: 'November 15, 2023', status: 'Not Returned' },
            { title: 'Social Media Trends', author: 'T. Green', category: 'Journal', dueDate: 'September 12, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a11.png',
        fullName: 'Susan Harris',
        joinDate: 'November 20, 2020',
        email: 'susanharris@example.com',
        phoneNumber: '123-456-7800',
        totalFeesNotPaid: '$55',
        borrowedItems: [
            { title: 'Graphic Design', author: 'U. Nelson', category: 'Book', dueDate: 'December 5, 2023', status: 'Not Returned' },
            { title: 'Creative Writing', author: 'V. Hill', category: 'Journal', dueDate: 'October 20, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a12.png',
        fullName: 'Kevin Clark',
        joinDate: 'December 25, 2020',
        email: 'kevinclark@example.com',
        phoneNumber: '123-456-7801',
        totalFeesNotPaid: '$65',
        borrowedItems: [
            { title: 'Cybersecurity', author: 'W. Perez', category: 'Book', dueDate: 'January 20, 2024', status: 'Not Returned' },
            { title: 'Ethical Hacking', author: 'X. Roberts', category: 'Journal', dueDate: 'November 15, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a13.png',
        fullName: 'Lisa Robinson',
        joinDate: 'January 18, 2021',
        email: 'lisarobinson@example.com',
        phoneNumber: '123-456-7802',
        totalFeesNotPaid: '$75',
        borrowedItems: [
            { title: 'Artificial Intelligence', author: 'Y. Evans', category: 'Book', dueDate: 'February 5, 2024', status: 'Not Returned' },
            { title: 'Machine Learning', author: 'Z. Turner', category: 'Journal', dueDate: 'December 30, 2023', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a14.png',
        fullName: 'Christopher Martinez',
        joinDate: 'February 14, 2021',
        email: 'christophermartinez@example.com',
        phoneNumber: '123-456-7803',
        totalFeesNotPaid: '$85',
        borrowedItems: [
            { title: 'Cloud Computing', author: 'A. Scott', category: 'Book', dueDate: 'March 10, 2024', status: 'Not Returned' },
            { title: 'Data Science', author: 'B. Hughes', category: 'Journal', dueDate: 'January 25, 2024', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a15.png',
        fullName: 'Angela Lewis',
        joinDate: 'March 22, 2021',
        email: 'angelalewis@example.com',
        phoneNumber: '123-456-7804',
        totalFeesNotPaid: '$95',
        borrowedItems: [
            { title: 'Blockchain Technology', author: 'C. Cooper', category: 'Book', dueDate: 'April 15, 2024', status: 'Not Returned' },
            { title: 'Cryptocurrency', author: 'D. Ward', category: 'Journal', dueDate: 'February 20, 2024', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a16.png',
        fullName: 'Steven Walker',
        joinDate: 'April 17, 2021',
        email: 'stevenwalker@example.com',
        phoneNumber: '123-456-7805',
        totalFeesNotPaid: '$100',
        borrowedItems: [
            { title: 'Game Development', author: 'E. Rodriguez', category: 'Book', dueDate: 'May 10, 2024', status: 'Not Returned' },
            { title: 'Virtual Reality', author: 'F. King', category: 'Journal', dueDate: 'March 25, 2024', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a17.png',
        fullName: 'Mary Hall',
        joinDate: 'May 8, 2021',
        email: 'maryhall@example.com',
        phoneNumber: '123-456-7806',
        totalFeesNotPaid: '$110',
        borrowedItems: [
            { title: 'Quantum Computing', author: 'G. Carter', category: 'Book', dueDate: 'June 5, 2024', status: 'Not Returned' },
            { title: 'Nanotechnology', author: 'H. Mitchell', category: 'Journal', dueDate: 'April 30, 2024', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a18.png',
        fullName: 'James Wright',
        joinDate: 'June 13, 2021',
        email: 'jameswright@example.com',
        phoneNumber: '123-456-7807',
        totalFeesNotPaid: '$120',
        borrowedItems: [
            { title: 'Renewable Energy', author: 'I. Baker', category: 'Book', dueDate: 'July 10, 2024', status: 'Not Returned' },
            { title: 'Sustainable Development', author: 'J. Perez', category: 'Journal', dueDate: 'May 15, 2024', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a19.png',
        fullName: 'Elizabeth Young',
        joinDate: 'July 21, 2021',
        email: 'elizabethyoung@example.com',
        phoneNumber: '123-456-7808',
        totalFeesNotPaid: '$130',
        borrowedItems: [
            { title: 'Urban Planning', author: 'K. Sanchez', category: 'Book', dueDate: 'August 5, 2024', status: 'Not Returned' },
            { title: 'Architecture Trends', author: 'L. Clark', category: 'Journal', dueDate: 'June 20, 2024', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a20.png',
        fullName: 'Mark Harris',
        joinDate: 'August 30, 2021',
        email: 'markharris@example.com',
        phoneNumber: '123-456-7809',
        totalFeesNotPaid: '$140',
        borrowedItems: [
            { title: 'Industrial Design', author: 'M. Lewis', category: 'Book', dueDate: 'September 15, 2024', status: 'Not Returned' },
            { title: 'Product Innovation', author: 'N. Martinez', category: 'Journal', dueDate: 'July 25, 2024', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a21.png',
        fullName: 'Barbara Anderson',
        joinDate: 'September 25, 2021',
        email: 'barbaraanderson@example.com',
        phoneNumber: '123-456-7810',
        totalFeesNotPaid: '$150',
        borrowedItems: [
            { title: 'Robotics', author: 'O. White', category: 'Book', dueDate: 'October 10, 2024', status: 'Not Returned' },
            { title: 'Automation Systems', author: 'P. Garcia', category: 'Journal', dueDate: 'August 20, 2024', status: 'Returned' }
        ]
    },
    {
        profile: '/Media/a2.png',
        fullName: 'Paul Thompson',
        joinDate: 'October 12, 2021',
        email: 'paulthompson@example.com',
        phoneNumber: '123-456-7811',
        totalFeesNotPaid: '$160',
        borrowedItems: [
            { title: 'Bioengineering', author: 'Q. Harris', category: 'Book', dueDate: 'November 5, 2024', status: 'Not Returned' },
            { title: 'Medical Innovations', author: 'R. Clark', category: 'Journal', dueDate: 'September 15, 2024', status: 'Returned' }
        ]
    }
    
];

function displayUsers() {
    const userList = document.getElementById('user-list');
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <img src="${user.profile}" alt="${user.fullName}">
            <p>${user.fullName}</p>
            <p>${"Join date: "+user.joinDate}</p>
        `;
        userCard.addEventListener('click', () => displayQuickOverview(user));
        userList.appendChild(userCard);
    });
}

function displayQuickOverview(user) {
    document.getElementById('overview-name').innerText = user.fullName;
    document.getElementById('overview-join-date').innerText = user.joinDate;
    document.getElementById('overview-email').innerText = user.email;
    document.getElementById('overview-phone').innerText = user.phoneNumber;
    document.getElementById('overview-fees').innerText = user.totalFeesNotPaid;

    const borrowedItemsTable = document.getElementById('overview-borrowed-items');
    borrowedItemsTable.innerHTML = '';
    user.borrowedItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.category}</td>
            <td>${item.dueDate}</td>
            <td>${item.status}</td>
        `;
        borrowedItemsTable.appendChild(row);
    });

    document.getElementById('quick-overview').style.display = 'block';
    document.getElementById('content').classList.add('with-quick-overview');
}

function closeQuickOverview() {
    document.getElementById('quick-overview').style.display = 'none';
    document.getElementById('content').classList.remove('with-quick-overview');
}

document.getElementById('close-btn').addEventListener('click', closeQuickOverview);

// Initialize user list on page load
document.addEventListener('DOMContentLoaded', displayUsers);
// JavaScript to show/hide popup and adjust content margin
const content = document.querySelector('.content');
const quickOverview = document.querySelector('.quick-overview');
const container = document.querySelector('.container');

// Function to show popup
function showPopup() {
    quickOverview.classList.add('popup-visible');
    container.classList.add('popup-visible');
}

// Function to hide popup
function hidePopup() {
    quickOverview.classList.remove('popup-visible');
    container.classList.remove('popup-visible');
}

// Example event listener to toggle popup visibility
document.addEventListener('DOMContentLoaded', function() {
    // Example: Show popup when a user card is clicked
    const userCards = document.querySelectorAll('.user-card');
    userCards.forEach(card => {
        card.addEventListener('click', function() {
            showPopup();
        });
    });

    // Example: Hide popup when close button is clicked
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        hidePopup();
    });
});
