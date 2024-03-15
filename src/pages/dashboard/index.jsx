import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importa Chart desde chart.js

function Dashboard() {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const myChart = new Chart(chartRef.current, {
                type: 'line', // Tipo de gráfico
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'My First dataset',
                        data: [10, 59, 80, 81, 56, 55, 40],
                        backgroundColor: 'rgba(75, 192, 192, 0.4)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    // Opciones del gráfico (si las hay)
                }
            });

            return () => {
                myChart.destroy(); // Destruye el gráfico al desmontar el componente para evitar pérdidas de memoria
            };
        }
    }, []);

    return (
        <div className="">
            <div className="w-[500px] grid">
                <canvas ref={chartRef} className="w-full"/>
            </div>
        </div>
    );
}

export { Dashboard };
