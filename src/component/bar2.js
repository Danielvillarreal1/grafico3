import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';

const Bar2Chart = () => {



        // const [minutos, setMinutos] = useState([]);
        // const [paises, setPaises] = useState([]);
        const [suite, setSuite] = useState([]);
        const [name, setName] = useState([]);

        const data= {
                labels: name,
                datasets: [{
                    label: 'Name',
                    borderColor: 'black',
                    borderwidth: 1,
                    hoverbackgroundColor: 'rgba(255,0,0,0.2)',
                    hoverBorderColor: 'blue',
                    data :suite,
                    // backgroundColor: ['teal', 'blue', 'fuchsia', 'turquoise', 'red', 'teal', 'blue', 'fuchsia', 'turquoise', 'red'],
                    backgroundColor: 'blue',
            
                }]
            };
        
            const opciones={
                maintainAspectRatio: false,
                responsive: true
            }

            // const {equipo, setEquipo} = useState([]);

            // const obtenerDatos = async () => {
            //     const data = await fetch('https://jsonplaceholder.typicode.com/users')   await axios.get('http://localhost:3001/paisesRedesSociales')
            //     const users = await data.json()
            //     setEquipo(users);
            // }

            // useEffect(() =>{
            //     obtenerDatos();
            // }, [])
            const peticionApi= async() => {
                await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    console.log(response.data);
                    var respuesta= response.data;
                    var auxName=[], auxSuite=[];
                    respuesta.map(info =>{
                        auxName.push(info.name)
                        auxSuite.push(info.suite);
                    });
                    setName(auxName);
                    setSuite(auxSuite);
                })
            } 

            useEffect(() =>{
                peticionApi();
            }, [])
    

        return ( 
            <div className="mb-5 pb-5" style= {{width: '100%', height: '500px'}}>
        
            <h2>Paises que mas utilizan redes Sociales (Promedio de minutos al dia por usuario)</h2>
                {/* <Bar data={data} options={opciones} /> */}
                <Line
                 data={data}
                options={opciones} 
                
                />
                </div>
         );
    }
     
 
export default Bar2Chart;