package com.example.klatretraet_swd_eksamen;

import com.example.klatretraet_swd_eksamen.models.Employee;
import com.example.klatretraet_swd_eksamen.repositories.EmployeeRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
public class TestRepository {

    @Autowired
    private TestEntityManager testEntityManager;

    @Autowired
    private EmployeeRepository eRepo;

    @Test
    public void whenFindByNameThenReturnArtist(){
        //given
        Employee employee = new Employee();
        employee.setName("Silas Jensen");
        testEntityManager.persist(employee);
        testEntityManager.flush();

        //when
        Employee employeeFound = eRepo.findByName("Silas Jensen");

        //then
        assertEquals(employeeFound.getName(), employee.getName());
    }

}
