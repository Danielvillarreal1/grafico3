import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';

const BarChart3 = () => {


        // const [employee_salary, setEmployee_salary] = useState([]);
        // const [employee_age, setEmployee_age] = useState([]);

        const [empSal, setEmpSal] = useState([]);
        const [empAge, setEmpAge] = useState([]);

        const data= {
                labels: empSal,
                datasets: [{
                    label: 'Salario',
                    borderColor: 'black',
                    borderwidth: 1,
                    hoverbackgroundColor: 'rgba(255,0,0,0.2)',
                    hoverBorderColor: 'blue',
                    data: empAge,
                    // backgroundColor: ['teal', 'blue', 'fuchsia', 'turquoise', 'red', 'teal', 'blue', 'fuchsia', 'turquoise', 'red'],
                    backgroundColor: 'blue',
            
                }]
            };
        
            const opciones={
                maintainAspectRatio: false,
                responsive: true
            }

           
            const peticionApi= async() => {
               
                await axios.get('http://dummy.restapiexample.com/api/v1/employees')
                .then(response => { 
                    var respuesta= response.data;
                    // console.log(respuesta)
                    var auxEmpSal=[], auxEmpAge=[];
                    respuesta.map(items=>{
                      // console.log(items)
                        auxEmpSal.push(items.employee_salary);
                        auxEmpAge.push(items.employee_age);
                        
                    });
                    setEmpSal(auxEmpSal);
                    setEmpAge(auxEmpAge);

                    
                })
            } 

            useEffect(() =>{
                peticionApi();
            }, [])
    

        return ( 
            <div className="mb-5 pb-5" style= {{width: '100%', height: '500px'}}>
        
            <h2>Salario por edad)</h2>
               
                <Bar
                 data={data}
                options={opciones} 
                
                />
                </div>
                );
        }



 
export default BarChart3;