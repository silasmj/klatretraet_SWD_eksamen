package com.example.klatretraet_swd_eksamen.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;

//Til at håndtere custom exceptions, eller nærmere håndtere eksisterende exceptions, men efterfølgende customize måden vi viser erroren til clienten.
@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(value = {ApiRequestException.class})
    public ResponseEntity<Object> handleApiRequestException(ApiRequestException e) {
        // Create payload containing exception details
        HttpStatus notFound = HttpStatus.NOT_FOUND;

        ApiException apiException = new ApiException(
                e.getMessage(),
                e,
                notFound,
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        // Return the actual response entity
        return new ResponseEntity<>(apiException, notFound);
    }
}


/*
Kan se således ud i controlleren:

@GetMapping("/employees")
public List<Employee> getAllEmployees() {
    throw new ApiRequestException("Ooops cannot get all employees - by custom exception")
}
 */
