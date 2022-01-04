package com.example.klatretraet_swd_eksamen.errorhandling;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@Controller
public class ErrorHandlerController implements ErrorController {

    @GetMapping("/error")
    public String customError(HttpServletRequest request) {
        // Get error status
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);

        if (status != null) {
            int statusCode = Integer.parseInt(status.toString());

            // Display specific error page
            if (statusCode == HttpStatus.NOT_FOUND.value()) {
                return "404";
            }else if (statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {
                return "500";
            }else if (statusCode == HttpStatus.FORBIDDEN.value()) {
                return "403";
            }
        }
        return "error";
    }


    //Der skal tilføjes:
    // server.error.whitelabel.enabled=false
    // I application.properties
}
