const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul' ,'Aug','Sept','Oct','Nov','Dec'],
        datasets: [
            {
                label: 'Books Borrowed',
                data: [12, 19, 3, 5, 2, 3,7,5,8,9,2,10],
                backgroundColor: '#ffffffcb',
                borderColor: '#0F254F',
                borderWidth: 1,
            },
            {
                label: 'Visitors',
                data: [25, 30, 10, 15, 20, 35,60 ,50,44,20,10,40],
                backgroundColor: '#ff721ac2',
                borderColor: '#fd6100',
                borderWidth: 1,
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updateChart(period) {
    if (period === 'daily') {
        chart.data.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        chart.data.datasets[0].data = [5, 2, 4, 6, 3, 8, 7];
        chart.data.datasets[1].data = [10, 15, 20, 25, 30, 35, 40];
    } else if (period === 'weekly') {
        chart.data.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        chart.data.datasets[0].data = [20, 15, 25, 30];
        chart.data.datasets[1].data = [50, 45, 60, 70];
    } else if (period === 'monthly') {
        chart.data.labels =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul' ,'Aug','Sept','Oct','Nov','Dec'];
        chart.data.datasets[0].data = [12, 19, 3, 5, 2, 3,7,5,8,9,2,10];
        chart.data.datasets[1].data = [25, 30, 10, 15, 20, 35,60 ,50,44,20,10,40];
    }
    chart.update();
}

const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const period = event.target.textContent.toLowerCase();
        updateChart(period);
    });
});

const overdueBooksTable = document.getElementById('overdue-books-table');
const detailsSection = document.querySelector('.details');
const closeBtn = document.querySelector('.close-btn');
const container = document.querySelector('.container');

overdueBooksTable.addEventListener('click', function (event) {
    const target = event.target.closest('tr');
    if (target) {
        const detailsContent = detailsSection.querySelector('.details-content');
        const cells = target.getElementsByTagName('td');

        const title = cells[0].textContent;
        const author = cells[1].textContent;
        const dueDate = cells[2].textContent;
        const overdueDays = cells[3].textContent;

        

        detailsContent.innerHTML = `
            
            <p><strong>Book title:</strong><h3>${title}</h3>
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Due Date:</strong> ${dueDate}</p>
            <p><strong>Overdue Days:</strong> ${overdueDays}</p>
        `;

        detailsSection.style.display = 'block';
        container.classList.add('popup-visible');
    }
});

closeBtn.addEventListener('click', function () {
    detailsSection.style.display = 'none';
    container.classList.remove('popup-visible');
});
