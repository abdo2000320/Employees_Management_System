import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

export const ListEmployeesComponent = () => {
  
  const [employees, setEmployees] = useState([])

  const deleteEmployee = (id) =>{
      EmployeeService.deleteEmployee(id).then((response) => {
            getAllEmployee()
      }).catch(error => console.log(error))
  }

  const getAllEmployee = () => {
          EmployeeService.getAllEmployees()
          .then((response) => {
            setEmployees(response.data)
            console.log(response.data)
          }).catch(error => {
            console.log(error);
          })           
  }

  useEffect(() => {
          getAllEmployee()        
  }, [employees])
  


  return  (
      <div className="container" style={{ marginBottom : "50px" }}>
          <h2 className="text-center">List Employees</h2>
          <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
          <table className="table table-bordered table-striped">
              <thead>
                 <th>Employee Id</th>
                 <th>Employee FirstName</th>
                 <th>Employee LastName</th>
                 <th>Employee Email Id</th>
                 <th>Actions</th>
              </thead>
              <tbody>
                {
                  employees.map(employee =>{
                    return (<tr key="employee.id">
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                        <td>
                          <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>update</Link>
                          <button 
                                className='btn btn-danger' 
                                onClick={() => deleteEmployee(employee.id)}
                                style = {{marginLeft:"10px"}}
                          >
                            delete
                           </button>
                        </td>
                    </tr>)
                  })
                }
              </tbody>
          </table>
      </div>
  )
}

export default ListEmployeesComponent