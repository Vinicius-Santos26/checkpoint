const repository = require('../repositories/product-repository');
const axios = require('axios');

exports.get = async (req, res, next) => {
  const data = await repository.get();
  res.status(200).send(data);
}

exports.post = async (req, res, next) => {
 await repository.create(req.body);

 const text = `O produto ${req.body.title} foi cadastrado.`;

 await axios
 .post('http://localhost:8080/send-email', {
  emailFrom: "vinioliveira261100@gmail.com",
	emailTo: "vinioliveira261100@gmail.com",
	subject: "Novo produto cadastrado",
	text
 });

 res.status(201).send({message: "Criado com sucesso!"});
}

exports.put =  async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  await repository.update(id, body);

  res.status(200).send({message: "Alterado com sucesso!"});
}

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  
  const data = await repository.getById(id);

  if(data == null) 
    res.status(404).send();

  res.status(200).send(data);
}

exports.delete = async (req, res, next) => {
  const id = req.params.id;
  
  await repository.delete(id);

  res.status(200).send({message: "Desabilitado com sucesso!"});
}
