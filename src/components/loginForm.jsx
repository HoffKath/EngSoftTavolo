import React, { useState } from 'react';
import ConsumerService from '../services/csv/consumerService';
import RestaurantService from '../services/csv/restaurantService';
import '../styles/forms.css';

const LoginForms = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const isConsumerAuthenticated = ConsumerService().checkCredentials(email, password);
    console.log(isConsumerAuthenticated)
    const isRestaurantAuthenticated = RestaurantService().checkCredentials(email, password);
    console.log(isRestaurantAuthenticated)

    if (isConsumerAuthenticated) {
      console.log('Consumer Login successful');
    } else if (isRestaurantAuthenticated) {
      console.log('Restaurant Login successful');
    } else {
      setError('Invalid email or password');
    }

    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="wrapper">
      <div className="content-login">
        <h2 className="active">Faça o login!</h2>
        <form className="box-login" onSubmit={handleLogin}>
          <input
            type="email"
            id="email"
            className="campo"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            className="campo"
            name="senha"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" className="botao" value="Entrar" />
        </form>
        <div className="box-lembrar-senha">
          <a className="link" href="#">
            Lembrar Senha ?
          </a>
        </div>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default LoginForms;
