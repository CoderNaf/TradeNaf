import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LineGrafic() {
    const chartRef1 = useRef(null);

    useEffect(() => {
        if (chartRef1 && chartRef1.current) {
            const myChart1 = new Chart(chartRef1.current, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Profit',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: '#08D665',
                        borderColor: '#08D665',
                        borderWidth: 1
                    },
                    {
                        label: 'Losses',
                        data: [50, 30, 20, 50, 80, 25, 60],
                        backgroundColor: '#FF204E',
                        borderColor: '#FF204E',
                        borderWidth: 1
                    }
                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'Source code Pro',
                                    size: 15
                                }
                            }
                        },
                        title: {
                            font: {
                                family: 'Source code Pro',
                                size: 15
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false // Oculta la cuadrícula en el eje x
                            }
                        },
                        y: {
                            grid: {
                                display: false // Oculta la cuadrícula en el eje y
                            }
                        }
                    }
                }
            });

            return () => {
                myChart1.destroy();
            };
        }
    }, []);

    return (
        <canvas ref={chartRef1}></canvas>
    );
}

export {LineGrafic}
