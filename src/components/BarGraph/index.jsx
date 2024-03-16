import { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

function BarGraph(){
    const chartRef2 = useRef(null);

    useEffect(() => {
        if (chartRef2 && chartRef2.current) {
            const myChart2 = new Chart(chartRef2.current, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'monthly profit',
                        data: [65,30, 80, 10, 26, 55],
                        backgroundColor: '#D1EDDD',
                        borderColor: '#08D665',
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'source code pro',
                                    size: 15,
                                    weight: 'normal'
                                }
                            }
                        },
                        title: {
                            font: {
                                family: 'source code pro',
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
                myChart2.destroy();
            };
        }
    }, []);

    return (
        <canvas ref={chartRef2}></canvas>
    );
}

export { BarGraph };
