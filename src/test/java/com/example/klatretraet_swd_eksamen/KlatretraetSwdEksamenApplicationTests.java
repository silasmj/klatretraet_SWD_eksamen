package com.example.klatretraet_swd_eksamen;

import com.example.klatretraet_swd_eksamen.controllers.EmployeeController;
import com.example.klatretraet_swd_eksamen.models.Employee;
import com.example.klatretraet_swd_eksamen.repositories.EmployeeRepository;
import org.apache.catalina.filters.CorsFilter;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import static org.hamcrest.CoreMatchers.is;


import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@SpringBootTest
class KlatretraetSwdEksamenApplicationTests {

    @Autowired
    EmployeeRepository eRepo;

    Employee emp = new Employee(1L, "Silas", "silas.png");

    @Test
    void updateEmployee() {
        emp.setName("Oliver");
        assertEquals("Oliver", emp.getName());
    }


}
