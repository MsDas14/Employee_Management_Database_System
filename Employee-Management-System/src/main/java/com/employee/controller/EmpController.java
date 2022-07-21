package com.employee.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.employee.repository.*;
import com.employee.entity.*;
import com.employee.exception.*;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/employee/")
@CrossOrigin("http://localhost:3000")

public class EmpController {
	
	
	@Autowired
	private EmpRepo repo;
	
	@GetMapping("/getEmployees")
	List<Employee> getEmployees(){
		return repo.findAll();
	}
	
	@GetMapping("getEmployees/{id}")
	Employee getEmpbyId(@PathVariable Long id) {
		return repo.findById(id).orElseThrow(()->new UserNotFoundException(id));
	}
	
	@PutMapping("/Employee/{id}")
	Employee updateEmployee(@RequestBody Employee newEmp, @PathVariable Long id) {
		return repo.findById(id).map(emp -> {emp.setFirstName(newEmp.getFirstName());
											 emp.setLastName(newEmp.getLastName());
											 emp.setEmailID(newEmp.getEmailID());
											 return repo.save(emp);
											 }).orElseThrow(()-> new UserNotFoundException(id));
	}
	
	
	@PostMapping("/newEmployee")
    Employee newEmployee(@RequestBody Employee newEmployee) {
        return repo.save(newEmployee);
    }
	
	@DeleteMapping("Employee/{id}")
	String deleteEmployee(@PathVariable Long id) {
		if(!repo.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		else {
			repo.deleteById(id);
			return "User with id "+id+" has been deleted.";
		}
	}
	
}
