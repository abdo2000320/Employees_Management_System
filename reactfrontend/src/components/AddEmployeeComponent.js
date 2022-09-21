import React, {useState, useEffect} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

  const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')    
  const navigate = useNavigate()
  const {id} = useParams()

   const saveOrUpdateEmployee = (e) => {
       e.preventDefault();

       const employee = {firstName,lastName,emailId}
      
    if(id)
        EmployeeService.updateEmployee(id,employee)
            .then((response) => {
                navigate('/employees')
            }).catch(error => {
                console.log(error)
            })

    else
        EmployeeService.createEmployee(employee)
           .then((response) => {
                console.log(response.data)
                navigate('/employees')
           }).catch(error => {
                console.log(error)
           })

   }
  
  useEffect((id) => {
    EmployeeService.getEmployeeById(id).then((response) => {
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmailId(response.data.emailId)
    }).catch(error => {
        console.log(error)
    })
  },[])

  
  const title = () => {
    if(id)
       return <h2 className='text-center'>update Employee</h2>
    else
        return <h2 className='text-center'>Add Employee</h2>
    }

    return (
    <div>
        <br></br>
        
        <div className='container'>
            <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {title()}
            </div>
            <div className='card-body'>
                 <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>FirstName</label>
                        <input
                            type="text"
                            placeholder="Enter first Name"
                            name = "firstName"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                         
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>LastName</label>
                        <input
                            type="text"
                            placeholder="Enter last Name"
                            name = "lastName"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                         
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-label'>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            name = "emailId"
                            className="form-control"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                         
                    </div>
                    <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>
                        Submit
                    </button>
                    <Link to="/employees" className="btn btn-danger ">Cancel</Link>
                 </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddEmployeeComponent