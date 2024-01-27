import TCalendar from "../components/calendar";
import Separator from "../components/separator";

const TableBooking = () =>{
  const containerStyle = {
    position: 'relative',
    display:'flex',
    margin: '100px',
    top: '50%',   // Ajusta a posição vertical (Y)
    left: '100%',  // Ajusta a posição horizontal (X)
    transform: 'translate(-50%, -50%)', 
  };

    return (
      
      <div className="calender">
          <p>
          <Separator text={'Informação'}/>
          </p>
          <p>
          <TCalendar /*style={containerStyle}*//>
          </p>
          <p>
          <Separator text={'Informação'}/>
          </p>
      </div>
    );
  
}

  
export default TableBooking;