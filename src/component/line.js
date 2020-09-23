import React, {useState, useEffect} from "react";
import {Line} from "react-chartjs-2";
import axios from "axios";

const Bar3Chart = () => {
  const [chartData, setChartData] = useState ({});
  // const [employeeSalary, setEmployeeSalary] = useState ([]);
  // const [employeeAge, setEmployeeAge] = useState ([]);

  const chart= () => {
    let empSal = [];
    let empAge = [];
    axios.get ("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        console.log (res);
        for(const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "SALARIO (y), EDAD (x)",
              data: empSal,
            //   backgroundColor: ["rgba (75, 192, 192, 0.6)"],
              backgroundColor: ['teal', 'yellow', 'green', 'orange', 'red','purple', 'blue', 'fuchsia', 'turquoise', 'brown', 'lime', 'pink', 'navy', 'coral', 'grey', 'silver', 'gold', 'black', 'darkblue', '	russet','applegreen', 'salmon', 'lilac', 'vermillion'],
              borderWidth: 4
            }
          ]
        });
      })
      .catch (err => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect (() => {
    chart();
  }, []);

  return (
    <div className="my-5 py-5" style= {{width: '100%', height: '500px'}}>
      <h1>  </h1>
      <div>
        <Line
          data = {chartData}
          options = {{
            responsive: true,
            título: {texto: "SALARIO POR EDAD", display: true},
            escamas: {
              yAxes: [
                {
                  tick: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridline: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridline: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Bar3Chart ;
