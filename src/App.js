import React, { Component } from 'react'
import axios from 'axios'
import data from './MOCK_DATA.json'


class App extends Component { 

  render(){
    return (
      <>
        <div className="jumbotron">
          <h1 className="display-4">Employee Directory</h1>
        </div>
        {data.map((employee, index) => {
        return <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{employee.first_name} {employee.last_name}</h5>  
              <h6>{employee.email}</h6> 
              <h6>{employee.gender}</h6>
            </div>
          </div>  
        </div>  
      })}
   </>
    )
  }
}
  


 


export default App
