document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('wasteChart').getContext('2d');
    
    const accessibleColors = {
        o2: '#4e79a7',
        temp: '#e15759',
        hum: '#59a14f'
    };
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['9 Março', '10 Março', '13 Março', '14 Março', '15 Março', '17 Março'],
            datasets: [{
                label: 'O2 (PPB)',
                data: [13, 14, 10, 11, 12, 10],
                borderColor: accessibleColors.o2,
                backgroundColor: 'rgba(78, 121, 167, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#fff',
                pointBorderColor: accessibleColors.o2,
                pointRadius: 5,
                pointHoverRadius: 7
            },
            {
                label: 'Temp (ºC)',
                data: [15.3, 13.7, 15.1, 14.2, 15.7, 14.5],
                borderColor: accessibleColors.temp,
                backgroundColor: 'rgba(225, 87, 89, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#fff',
                pointBorderColor: accessibleColors.temp,
                pointRadius: 5,
                pointHoverRadius: 7
            },
            {
                label: 'Hum (%)',
                data: [24, 23, 26, 24, 27, 25],
                borderColor: accessibleColors.hum,
                backgroundColor: 'rgba(89, 161, 79, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#fff',
                pointBorderColor: accessibleColors.hum,
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
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#333',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    padding: 12,
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 13
                    }
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
                        text: 'Nível',
                        color: '#333',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                }
            },
            animation: {
                duration: 0
            },
            transitions: {
                show: {
                    animation: {
                        duration: 0
                    }
                },
                hide: {
                    animation: {
                        duration: 0
                    }
                }
            },
            maintainAspectRatio: false
        }
    });
});