import React, { useState } from 'react';
import RestaurantService from '../services/csv/restaurantService';
import User from '../data/user';
import Restaurant from '../data/restaurant';
import '../styles/forms.css';

const SignRestaurantForms = () => {
  const [formData, setFormData] = useState({
    nomeRestaurante: '',
    nome: '',
    endereco: '',
    telefone: '',
    email: '',
    mesas: '',
    horarios: '',
    vegano: false,
    semGluten: false,
    culinaria: '',
    senha: '',
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
      const newUser = new User(formData.nome, formData.email, formData.senha);

      const newRestaurant = new Restaurant(
        newUser,
        formData.nomeRestaurante,
        formData.endereco,
        formData.telefone,
        formData.mesas,
        formData.horarios,
        formData.vegano,
        formData.semGluten,
        formData.culinaria
      );

      await RestaurantService().createRestaurant(newRestaurant);

      setFormData({
        nomeRestaurante: '',
        nome: '',
        endereco: '',
        telefone: '',
        email: '',
        mesas: '',
        horarios: '',
        vegano: false,
        semGluten: false,
        culinaria: '',
        senha: '',
      });

      console.log('Restaurant created successfully!');
    } catch (error) {
      console.error('Error creating restaurant:', error);
    }
  };

  return (
    <div className="wrapper">
      <div className="content-login">
        <h2 className="active">Bem Vindo a Tavolo!</h2>
        <form className="box-login" onSubmit={handleSubmit}>
          <label className="text">
            Nome do restaurante:
            <input
              type="text"
              id="nomeRestaurante"
              className="campo"
              name="nomeRestaurante"
              placeholder="Restaurante"
              value={formData.nomeRestaurante}
              onChange={handleChange}
            />
          </label>
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
            Endereço do restaurante:
            <input
              type="text"
              id="endereco"
              className="campo"
              name="endereco"
              placeholder="Endereço"
              value={formData.endereco}
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
            Quantidades de mesas disponiveis para reserva:
            <select
              name="mesas"
              id="mesas-quant"
              value={formData.mesas}
              onChange={handleChange}
            >
              <option value="Uma">Uma</option>
              <option value="Duas">Duas</option>
              <option value="Três">Três</option>
              <option value="Quatro">Quatro</option>
            </select>
          </label>
          <label className="text">
            Insira os horários disponíveis para reserva:
            <input
              type="text"
              id="horarios"
              className="campo"
              name="horarios"
              placeholder="Horários"
              value={formData.horarios}
              onChange={handleChange}
            />
          </label>
          <label className="text">
            Possui opções vegetarianas/veganas:
            <select
              name="vegano"
              id="vegan"
              value={formData.vegano}
              onChange={handleChange}
            >
              <option value={false}>Não</option>
              <option value={true}>Sim</option>
            </select>
          </label>
          <label className="text">
            Possui opções sem gluten:
            <select
              name="semGluten"
              id="gluten"
              value={formData.semGluten}
              onChange={handleChange}
            >
              <option value={false}>Não</option>
              <option value={true}>Sim</option>
            </select>
          </label>
          <label className="text">
            Culinária foco:
            <input
              type="text"
              id="culinaria"
              className="campo"
              name="culinaria"
              placeholder="Culinária Foco"
              value={formData.culinaria}
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
            Envie a logo do restaurante:
            <input type="file" />
          </label>
          <label className="text">
            <input type="submit" className="botao" value="Criar Conta" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default SignRestaurantForms;
