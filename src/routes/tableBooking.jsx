import ChooseHour from "../components/chooseHour";
import Confirmation from "../components/confirmation";
import RestaurantBanner from "../components/restaurantBanner";
//import '../styles/tableBooking.css'
import '../styles/confirmation.css'

const TableBooking =()=>{

    return (
      <div>
          <RestaurantBanner/>
          <ChooseHour/>
          <Confirmation/>
      </div>
    );
  
}

  
export default TableBooking;