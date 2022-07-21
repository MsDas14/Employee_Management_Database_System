package com.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.employee.entity.*;

public interface EmpRepo extends JpaRepository<Employee, Long> {

}
