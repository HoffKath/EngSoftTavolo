import React, { useState } from 'react';
import ConsumerService from '../services/csv/consumerService.js';
import Consumer from '../data/consumer.js';
import User from '../data/user.js';
import '../styles/forms.css'

const SignCustomersForms = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    notificacoes: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new consumer object based on the form data
      const newUser = new User(formData.nome, formData.email, formData.senha);
      const newConsumer = new Consumer(newUser, formData.telefone);
      
      // Call the createConsumer method from ConsumerService
      await ConsumerService().createConsumer(newConsumer);

      // Reset the form fields after successful submission
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        notificacoes: false,
      });

      console.log('Consumer created successfully!');
    } catch (error) {
      console.error('Error creating consumer:', error);
    }
  };

  return (
    <div className="wrapper">
      <div className="content-login">
        <h2 className="active">Bem Vindo a Tavolo!</h2>
        <form className="box-login" onSubmit={handleSubmit}>
          <label className="text">
            Seu nome:
            <input
              type="text"
              id="nomeFuncionario"
              className="campo"
              name="nome"
              placeholder="Seu Nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </label>
          <label className="text">
            Email:
            <input
              type="email"
              id="email"
              className="campo"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="text">
            Telefone:
            <input
              type="text"
              id="telefone"
              className="campo"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </label>
          <label className="text">
            Insira uma senha:
            <input
              type="password"
              id="password"
              className="campo"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </label>
          <label className="text">
            Aceita receber notificações:
            <select
              name="notificacoes"
              id="mesas-quant"
              value={formData.notificacoes}
              onChange={handleChange}
            >
              <option value={false}>Não</option>
              <option value={true}>Sim</option>
            </select>
          </label>
          <label className="text">
            <input type="submit" className="botao" value="Criar Conta" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SignCustomersForms;
