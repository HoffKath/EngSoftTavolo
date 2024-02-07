import Visual from '../styles/restaurantBanner.css'
import RatingView from './ratingView';
import restaurantPasta from '../assets/restaurantBanner.png'

const RestaurantBanner = ({name, rating, phone, adress, cuisine, VegOption, GlutenFreeOption, picture}) => {

    return (
        <div className="Informations">

            <h1>Informação</h1>
            
            <div className='RestaurantBanner'>
                <a href="#"><img src={restaurantPasta/*mudar para 'picture'*/}></img></a>
                <div>
                    <label className="RestaurantName">Restaurante {name}</label>

                    <div className="InfoInline">
                        <label>Avaliação:</label>
                        <RatingView className={Visual} rating={rating}/>
                        <label className="Phone">Telefone: {phone}</label><br/>
                    </div>

                    <div className='Adress'>
                        <label>Endereço: {adress}</label><br/>
                    </div>

                    <div className='MoreInfo'>
                        <label>Culinária: {cuisine}</label><br/>
                        <label>{VegOption === 'true' ? 'Possui Opção Vegetariana' : 'Não Possui Opção Vegetariana'}</label><br/>
                        <label>{GlutenFreeOption === 'true' ? 'Possui Opção sem Glúten' : 'Não Possui Opção sem Glúten'}</label><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantBanner;