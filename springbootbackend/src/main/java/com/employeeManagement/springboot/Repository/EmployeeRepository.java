package com.employeeManagement.springboot.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.employeeManagement.springboot.Model.Employee;;

public interface EmployeeRepository extends JpaRepository<Employee,Long>{
  //All crud database methodes  
}
