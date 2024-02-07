import React, { useState } from 'react';
import '../styles/confirmation.css';
import Button from './button';
import { Link } from 'react-router-dom';


const Confirmation = ({ onFormSubmit, name, phone, availableSeats }) => {
    const [formData, setFormData] = useState({
        numberOfSeats: '',
        specialRequest: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
        console.log(formData);
    };

    const { numberOfSeats, specialRequest } = formData;

    const options = Array.from({ length: availableSeats }, (_, index) => index + 1);

    return (
        <div className="confirmation">
            <h1>2. Preencha o cadastro</h1>
            <form className="info" onSubmit={handleSubmit}>
                <label>
                    Nome: {name}
                </label>

                <label className="inline-label">
                    Telefone: {phone}
                </label><br />

                <label>
                    Número de lugares:
                    <select name="numberOfSeats" value={numberOfSeats} onChange={handleInputChange}>
                        <option value="">Selecione</option>
                        {options.map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </label><br />

                <label>
                    Pedido especial:<br />
                    <textarea name="specialRequest" maxLength={1000} value={specialRequest} onChange={handleInputChange} />
                </label>
                <Button type="submit" className="ConfirmationButton" label="Reservar!" />
                
            </form>
        </div>
    );
};

export default Confirmation;
