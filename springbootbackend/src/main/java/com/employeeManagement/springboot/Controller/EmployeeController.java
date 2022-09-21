package com.employeeManagement.springboot.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.employeeManagement.springboot.Exception.RessourceNotFoundException;
import com.employeeManagement.springboot.Model.Employee;
import com.employeeManagement.springboot.Repository.EmployeeRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

     
    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    
    //build create employee REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    //build update employee REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id)
                    .orElseThrow(() -> new RessourceNotFoundException("Employee not found with the id"+ id));
        return ResponseEntity.ok(employee);
    } 

     //build update employee REST API
     @PutMapping("{id}")
     public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
        Employee updateEmployee = employeeRepository.findById(id)
                        .orElseThrow(() -> new RessourceNotFoundException("Employee not exist with the id"+ id));
       
        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setEmailId((employeeDetails.getEmailId()));

        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    //build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id)
                   .orElseThrow(() -> new RessourceNotFoundException("Employee not found with Id"+ id));
        employeeRepository.delete(employee);
        return ResponseEntity.ok(employee);
    }
}

    

