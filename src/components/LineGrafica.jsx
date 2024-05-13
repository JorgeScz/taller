// import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// const beneficios = [0, 56, 20,];
// const meses = ["Estras bajo", "Estres Moderado", "Estres Alto"];

// const midata = {
//   labels: meses,
//   datasets: [
//     {
//       label: "Cantidad de estudiantes",
//       data: beneficios,
//       tension: 0.5,
//       fill: true,
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//       pointRadius: 5,
//       pointBorderColor: "rgb(255, 99, 132)",
//       pointBackgroundColor: "rgba(255, 99, 132)",
//     },
//   ],
// };

// const misoptions = {
//   scales: {
//     x: {
//       type: "category", 
//     },
//   },
// };

// export default function LineGrafica() {
//   return <Line data={midata} options={misoptions} />;
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function LineGrafica() {
  const url = "http://127.0.0.1:8000/";
  const [resultadosEstudiantes, setResultadosEstudiantes] = useState([]);
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const fechaI = '2024-04-27';
  const feD = new Date();
  feD.setDate(feD.getDate() + 1)
  const fechaActual = feD.toISOString().split('T')[0];

  useEffect(() => {
    setFechaInicio(fechaI);
    setFechaFin(fechaActual);
  }, []);


  useEffect(() => {
    cargarResultadosEstudiantes();
  }, [fechaInicio, fechaFin]);

  const cargarResultadosEstudiantes = async () => {
    try {
      const response = await axios.get(`${url}/estudiantesfecha/${fechaInicio}/${fechaFin}/`);
      const estudiantes = response.data;
      const resultados = estudiantes.map(estudiante => estudiante.resultado_test);
      const nombres = estudiantes.map(estudiante => estudiante.nombre); 

      setResultadosEstudiantes({ resultados, nombres });
    } catch (error) {
      console.error('Error al cargar resultados de estudiantes:', error);
    }
  };

  const midata = {
    labels: resultadosEstudiantes.nombres || [], 
    datasets: [
      {
        label: "Resultado del test",
        data: resultadosEstudiantes.resultados || [], 
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
    ],
  };

  const misoptions = {
    scales: {
      x: {
        type: "category", // Usa la escala de categoría para el eje X
      },
    },
    // Otras opciones personalizadas aquí
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-12 mb-12">
            <div className="card border-primary">
              <div className="card-body">
                <h5 className="card-title"></h5>
                <div className="bg-light p-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 mb-3">
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
                      <div className="col-md-3 mb-3">
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
                  <Line data={midata} options={misoptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
