import '../styles/calendar.css'
import { useState } from 'react';
import Calendar from 'react-calendar';

function TCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} 
                    value={date} 
                    minDetail='year'
                    minDate={new Date()}/>
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default TCalendar;