import '../styles/chooseHour.css'
import Button from './button';
import TCalendar from './calendar';
import CalendarStyle from '../styles/chooseHour.css'
import {useState} from "react"

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
            <div className='containerSmall'> 
               <div style={{display: 'flex', alignItems: 'center'}}>
                    <TCalendar style={CalendarStyle}/>

                    <div className='detailsBox'>
                        <button className="smallDetails">
                            <label className='hour'>Horário: 19:00 </label>
                            <label className='capacity'>Capacidade: 15</label>
                        </button>
                    </div>
                    
                </div>
            </div>}

            {!show &&
            <div className='containerBig'> 
               <div style={{alignItems: 'center'}}>
                    <label>Próximos Horários:</label>
                        <button className="bigDetails">
                            <div className='datelbl'>
                                <label className='daylbl'>20</label><br/>
                                <label>Novembro</label>
                            </div>
                            <label className='hour'>Horário: 20:00 </label>
                            <label className='capacity'>Capacidade: 20</label>
                        </button>
                </div>
            </div>}

            <label>Ou pesquise um horário de preferência:</label>
            <Button onClick={showCalendar}/>
        </div>
    );
}
export default ChooseHour;