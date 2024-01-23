import '../styles/confirmation.css'
const Dados  = ({name, phone, restaurantName, restaurantAddress, restaurantPhone, quant, time, pedido}) =>{
    return(
        <div className="dados">
            <h1>Obrigada por reservar!</h1>
            <form className="info">
                <label class="text">Seus dados: </label>
                <p></p>
                <label>Nome: {name} </label>
                <label className="inline-label">Telefone: {phone}</label>
            </form>

        <form className='info'>
            <label className="text"> Dados do restaurante:</label>
            <p></p>
            <label>Nome: {restaurantName}</label>
            <label className="inline-label">Telefone: {restaurantPhone}</label>
            <label>Endereço: {restaurantAddress}</label>
            
        </form>
        <form className='info'>
            <label class="text">Dados da reserva: </label>
            <p></p>
            <label>Quantidade de lugares: {quant}</label>
            <label>Horário: {time}</label>
            <label>Pedido especial: {pedido}</label>
        </form>
        </div>
    )
}
export default Dados