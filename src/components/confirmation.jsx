import '../styles/confirmation.css'
import Button from './button';

const Confirmation = ({ name, phone, availableSeats}) => {
    const options = Array.from({ length: availableSeats }, (_, index) => index + 1);
    return (
        <div className="confirmation">
            <h1>2. Preencha o cadastro</h1>
            <form className="info">
                <label>Nome: {name}</label>

                <label className="inline-label">Telefone: {phone}</label><br />

                <label>Número de lugares:
                    <select>
                        <option value="">Selecione</option>
                        {options.map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </label><br />

                <label>Pedido especial:<br />
                    <textarea maxLength={1000} />
                </label>


                <Button className="ConfirmationButton" label="Reservar!" />
            </form>

        </div>
    );
}

export default Confirmation;