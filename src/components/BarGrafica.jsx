// import React from "react";
// import { Bar } from "react-chartjs-2"; // Cambio a Bar
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, animator, plugins } from "chart.js";
// import { color } from "chart.js/helpers";
// ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);

// const cantidad = [10, 56, 20,];
// const tipo = ["Estras bajo", "Estres Moderado", "Estres Alto"];

// const midata = {
//     labels: tipo,
//     datasets: [
//         {
//             label: "Cantidad estudiantes",
//             data: cantidad,
//             backgroundColor: "rgba(0, 220, 105, 0.5)", 
//         },
//     ],
// };

// const misoptions = {
//     resposive: true,
//     animation : true,
//     plugins :{
//         legend : {
//             display: false
//         }
//     },
//     scales: {
//         y: {
//             min : -25,
//             max: 100
//         },
//         x: {
//             ticks: {color:'rgba(0,220,195)'} 
//         },
//     },
// };

// export default function BarGrafica() { 
//     return <Bar data={midata} options={misoptions} />; 
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);

export default function BarGrafica() {
  //const url = "http://127.0.0.1:8000/";
  const url = 'https://taller-back-i5y5.onrender.com/'

  const [cantidad, setCantidad] = useState([0, 0, 0]);
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const fechaI = '2024-04-27';
  const feD = new Date();
  feD.setDate(feD.getDate()+1)
  const fechaActual = feD.toISOString().split('T')[0];


  useEffect(() => {
    setFechaInicio(fechaI);
    setFechaFin(fechaActual);
  }, []);

  useEffect(() => {
    cargarCantidadEstres();
  }, [fechaInicio, fechaFin]);

  const cargarCantidadEstres = async () => {
    try {
      const resultados = await axios.get(`${url}estudiantesfecha/${fechaInicio}/${fechaFin}/`);

      const estudiantesLeve = resultados.data.filter(estudiante => estudiante.resultado_test < 19);
      const estudiantesModerado = resultados.data.filter(estudiante => estudiante.resultado_test >= 19 && estudiante.resultado_test < 37);
      const estudiantesAlto = resultados.data.filter(estudiante => estudiante.resultado_test >= 37);

      setCantidad([estudiantesLeve.length, estudiantesModerado.length, estudiantesAlto.length]);
    } catch (error) {
      console.error('Error al cargar cantidad de estrés:', error);
    }
  };

  const tipo = ["Estres bajo", "Estres Moderado", "Estres Alto"];

  const midata = {
    labels: tipo,
    datasets: [
      {
        label: "Cantidad estudiantes",
        data: cantidad,
        backgroundColor: "rgba(2, 246, 2, 0.5)",
      },
    ],
  };

  const misoptions = {
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        min: 0,
      },
      x: {
        //ticks: { color: 'rgba(0,220,195)' }
        ticks: { color: 'rgba(0,0,0)' }
      },
    },
  };

  return (
    <>


      <div className="container mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 mb-4">
            <div className="card border-primary">
              <div className="card-body">
                <h5 className="card-title"></h5>
                <div className="bg-light p-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="">Fecha inicio</label>
                        <input
                          type='date'
                          name='inicio'
                          value={fechaInicio}
                          min='2024-04-27'
                          onChange={(e) => setFechaInicio(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="">Fecha fin</label>
                        <input
                          type='date'
                          name='fin'
                          value={fechaFin}
                          max={fechaFin}
                          onChange={(e) => setFechaFin(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <Bar data={midata} options={misoptions} />;
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card border-primary">
              <div className="card-body">
                <h5 className="card-title"></h5>
                <div className="bg-light p-3 text-start">
                  <p>Estres Bajo: {cantidad[0]}</p>
                  <p>Estres Moderado: {cantidad[1]}</p>
                  <p>Estres Alto: {cantidad[2]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
