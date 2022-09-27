package com.servico.apiemail.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.servico.apiemail.model.EmailModel;
import com.servico.apiemail.service.EmailService;

@Controller
public class EmailController {
    
    @Autowired
    private EmailService emailService;
    
    @PostMapping("/send-email")
    public ResponseEntity<EmailModel> sendEmail(@RequestBody EmailModel model){
        emailService.sendEmail(model);
        return new ResponseEntity<>(model, HttpStatus.OK);
    }
}