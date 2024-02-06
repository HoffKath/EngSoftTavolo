import '../styles/restaurantPreview.css'
import RatingView from './ratingView'
import image1 from "../assets/restaurantBanner.png"



function RestaurantPreview(props) {
    return (
        <div className='container-restaurantPreview' style={props.style}>
            <img className='image-restaurantPreview' src={props.restaurantImg ?? image1}/>
            <p>{props.restaurantName ?? "Pasta Today"}</p>
            <div className='container-restaurantPreview-rating'>
                <p>Avaliação:<RatingView style={{marginLeft: '5px', marginBottom: '5px'}} rating={props.restaurantRating ?? "5"}/></p>
            </div>
        </div>
    )
}

export default RestaurantPreview;