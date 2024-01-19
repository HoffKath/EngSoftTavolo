import '../styles/restaurantPreview'
import RatingView from './ratingView'

function RestaurantPreview(props)
{
    return (
        <div className='container-restaurantPreview'>
            <img className='image-restaurantPreview' src={props.src}/>
            <p>
                {props.restaurantName}
            </p>
            <div className='container-restaurantPreview-rating'>
                <p>Avaliacao: </p>
                <RatingView rating={props.rating}/>
            </div>
        </div>
    )
}