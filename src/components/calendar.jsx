import '../styles/calendar.css'
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

function TCalendar({ onDateChange }) {

  const [date, setDate] = useState(new Date());

  // useEffect para chamar onDateChange com a data inicial assim que a página carregar
 // useEffect(() => {
 //   onDateChange(date);
  //}, [date, onDateChange]); // O array vazio assegura que o useEffect seja chamado apenas uma vez, quando o componente é montado

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate); // Chamando a função de retorno de chamada com a nova data
  };

  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={handleDateChange} 
                    value={date} 
                    minDetail='year'
                    minDate={new Date()}/>
      </div>
       {/* <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p> */}
    </div>
  );
}

export default TCalendar;