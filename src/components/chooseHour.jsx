import '../styles/chooseHour.css'
import imageCalendar from "../assets/calendar-icon.png"
import TCalendar from './calendar';
import CalendarStyle from '../styles/chooseHour.css'
import {useState} from "react"
import ListaCSV from './reservationSelector';
import ListaCalendar from './reservationSelectorCalendar';

const ChooseHour = () => {

    const [show,toggleShow] = useState(false);

    const showCalendar =()=>{
        if(show === true){
        toggleShow(false)
        }else{
        toggleShow(true)
        }
    }

    return (
       <div className="hourpicker">
            <h1>1. Escolha um horário</h1>

            {show &&
            <div className='calendar-box'> 
               <div className='calendar-choose'>
                    <TCalendar style={CalendarStyle}/>
                    <ListaCalendar/>
                </div>
                <div className='button-calendar'>
                    <label className='info-label'>Ou pesquise um horário próximo:</label>
                    <img className='icon-calendar' src={imageCalendar} onClick={showCalendar}/>
                </div>
            </div>
            }

            {!show && 
                <div>
                    <label className='info-label'>Próximos Horários:</label>
                    <ListaCSV/>
                    <div className='button-closedates'>
                        <label className='info-label'>Ou pesquise um horário de preferência:</label>
                        <img className='icon-calendar' src={imageCalendar} onClick={showCalendar}/>
                    </div>
                </div>}
        </div>
    );
}
export default ChooseHour;