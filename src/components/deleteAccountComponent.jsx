import React, { useState } from 'react';
import ConsumerService from '../services/csv/consumerService';
import RestaurantService from '../services/csv/restaurantService';
import { useNavigate } from 'react-router-dom';
import '../styles/forms.css';

const DeleteAccountComponent = () => {
  const [confirmation, setConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleDeleteAccount = async (e) => {
    e.preventDefault();

    const GLOBAL_ID = localStorage.getItem('GLOBAL_ID');

    if (confirmation) {
      try {
        await ConsumerService().deleteConsumerById(GLOBAL_ID);
        await RestaurantService().deleteRestaurantById(GLOBAL_ID);
        console.log('Account deleted successfully');
        navigate('/');
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    } else {
      console.log('Deletion not confirmed');
    }
  };

  const handleConfirmationChange = (e) => {
    setConfirmation(e.target.value === 'true');
  };

  return (
    <div className="wrapper">
      <div className="content-login">
        <h2 className="active">Lamentamos que esteja deletando sua conta!</h2>
        <form className="box-login" onSubmit={handleDeleteAccount}>
          <label className="text">
            Confirmar delete?
            <select name="confirmarDelete" id="delete" onChange={handleConfirmationChange}>
              <option value="false">Não</option>
              <option value="true">Sim</option>
            </select>
          </label>
          <label className="text">
            <input type="submit" className="botao" value="Deletar Conta" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default DeleteAccountComponent;
