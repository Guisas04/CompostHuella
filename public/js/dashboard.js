// Enhanced Waste Chart
const ctx = document.getElementById('wasteChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['9 Março', '10 Março', '13 Março', '14 Março', '15 Março', '17 Março'],
        datasets: [{
            label: 'O2 (PPB)',
            data: [13, 14, 10, 11, 12, 10],
            borderColor: '#96a1ff',
            backgroundColor: 'rgba(46, 125, 50, 0.05)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#96a1ff',
            pointRadius: 5,
            pointHoverRadius: 7
        },
        {
            label: 'Temp (ºC)',
            data: [13.1, 13.7, 15.1, 14.2, 15.7, 14.5],
            borderColor: '#f5457f',
            backgroundColor: 'rgba(46, 125, 50, 0.05)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#f5457f',
            pointRadius: 5,
            pointHoverRadius: 7
        },
        {
            label: 'Hum (%)',
            data: [24, 23, 26, 24, 27, 25],
            borderColor: '#787878',
            backgroundColor: 'rgba(46, 125, 50, 0.05)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#787878',
            pointRadius: 5,
            pointHoverRadius: 7
        }
    ]
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
                    text: 'Nivel',
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