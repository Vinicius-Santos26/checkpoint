package com.servico.apiemail.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.servico.apiemail.model.EmailModel;

public interface EmailRepository extends MongoRepository<EmailModel, String>{

}
