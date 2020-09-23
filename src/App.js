import React from 'react';
// import  BarChar  from './component/bar';
import './App.css';
import Bar2Chart from './component/bar2';
import Bar3Chart from './component/bar4';
import LineChart from './component/line';
import PieChart from './component/pie';
import DoughnutChart from './component/doughnut';
import BarChart3 from './component/bar3';

function App() {
  return (
    <div className="">
    {/* <BarChar /> */}
    
    
    

  
    <div className="container">
  <div className="row">
  {/* <div className="col-md-8"><Bar2Chart /></div> */}
    {/* <div className="col-md-8"><LineChart /></div>
    <div className="col-md-8"><PieChart /></div> */}
    {/* <div className="w-100"></div> */}
    {/* <div className="col-md-8"><Bar3Chart /></div> */}
    <div className="col-md-8"> <BarChart3 /></div>

   
    
  </div>
</div>
   
    </div>
  );
}

export default App;
