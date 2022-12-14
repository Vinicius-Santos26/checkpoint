package com.servico.apiemail.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.servico.apiemail.model.EmailModel;
import com.servico.apiemail.model.StatusEmail;
import com.servico.apiemail.repository.EmailRepository;

@Service
public class EmailService {
	
	@Autowired
	private EmailRepository emailRepository;
	
	@Autowired
	private JavaMailSender emailSender;
	
	@SuppressWarnings("finally")
	public EmailModel sendEmail(EmailModel emailModel) {
		emailModel.setSendDateEmail(LocalDateTime.now());
		
		try {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setFrom(emailModel.getEmailFrom());
			message.setTo(emailModel.getEmailTo());
			message.setSubject(emailModel.getSubject());
			message.setText(emailModel.getText());
			emailSender.send(message);
			
			emailModel.setStatusEmail(StatusEmail.SEND);
		}catch(Exception e) {
			emailModel.setStatusEmail(StatusEmail.ERROR);
		}finally {
			return emailRepository.save(emailModel);
		}
	}
}
