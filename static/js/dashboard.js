// Enhanced Waste Chart
const ctx = document.getElementById('wasteChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Kg de Lixo Depositado',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: '#2e7d32',
            backgroundColor: 'rgba(46, 125, 50, 0.05)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#2e7d32',
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true
                }
            },
            tooltip: {
                backgroundColor: '#2e7d32',
                titleColor: '#fff',
                bodyColor: '#fff'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0,0,0,0.05)'
                },
                title: {
                    display: true,
                    text: 'Kilogramas',
                    color: '#666'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});