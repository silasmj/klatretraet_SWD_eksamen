package com.example.klatretraet_swd_eksamen;

import com.example.klatretraet_swd_eksamen.models.Employee;
import com.example.klatretraet_swd_eksamen.repositories.EmployeeRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.internal.verification.VerificationModeFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

//import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.reset;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.awt.*;
import java.util.Arrays;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(value = Employee.class, excludeAutoConfiguration = SecurityAutoConfiguration.class)
public class TestController {

    @Autowired
    MockMvc mvc;

    @MockBean
    EmployeeRepository eRepo;

    @Test
    public void test() throws Exception {
        Employee emp1 = new Employee(1L, "Silas", "silas.png");
        Employee emp2 = new Employee(2L, "Guobin", "gub.png");
        Employee emp3 = new Employee(3L, "Daniel", "daniel.png");

        List<Employee> employees = Arrays.asList(emp1, emp2, emp3);

        given(eRepo.findAll()).willReturn(employees);

        mvc.perform(get("/employees")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", org.hamcrest.Matchers.hasSize(3)))
                .andExpect(jsonPath("$[0].name", is("Silas")))
                .andExpect(jsonPath("$[1].name", is("Guobin")))
                .andExpect(jsonPath("$[2].name", is("Daniel")));

        verify(eRepo, VerificationModeFactory.times(1)).findAll();
        reset(eRepo);
    }
}
