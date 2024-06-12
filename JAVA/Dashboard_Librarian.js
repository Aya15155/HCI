const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Books Borrowed',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: 'white',
                        borderColor: '#0F254F',
                        borderWidth: 1
                    },
                    {
                        label: 'Visitors',
                        data: [25, 30, 10, 15, 20, 35],
                        backgroundColor: 'orange',
                        borderColor: 'orange',
                        borderWidth: 1
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
            // Update the chart data here based on the period (daily, weekly, monthly)
            // Example:
            if (period === 'daily') {
                chart.data.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                chart.data.datasets[0].data = [5, 2, 4, 6, 3, 8, 7];
                chart.data.datasets[1].data = [10, 15, 20, 25, 30, 35, 40];
            } else if (period === 'weekly') {
                chart.data.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
                chart.data.datasets[0].data = [20, 15, 25, 30];
                chart.data.datasets[1].data = [50, 45, 60, 70];
            } else if (period === 'monthly') {
                chart.data.labels = ['January', 'February', 'March', 'April', 'May', 'June'];
                chart.data.datasets[0].data = [12, 19, 3, 5, 2, 3];
                chart.data.datasets[1].data = [25, 30, 10, 15, 20, 35];
            }
            chart.update();
        }
    // Event listeners for dropdown content
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

    overdueBooksTable.addEventListener('click', function (event) {
        const target = event.target.closest('tr');
        if (target) {
            const detailsContent = detailsSection.querySelector('.details-content');
            const cells = target.querySelectorAll('td');
            detailsContent.innerHTML = `
                <h3>${cells[2].textContent}</h3>
                <p><strong>Member:</strong> ${cells[1].textContent}</p>
                <p><strong>Author:</strong> ${cells[3].textContent}</p>
                <p><strong>Overdue:</strong> ${cells[4].textContent}</p>
                <p><strong>Return Date:</strong> ${cells[5].textContent}</p>
            `;
            detailsSection.style.display = 'block';
        }
    });

    closeBtn.addEventListener('click', function () {
        detailsSection.style.display = 'none';
    });
