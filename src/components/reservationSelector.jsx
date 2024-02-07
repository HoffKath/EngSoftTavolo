import React, { useState } from 'react';
import ListCloseDates from './listCloseDates'
import '../styles/reservationSelector.css'


const ListaCSV = ({ dataList,  onChangeSelected }) => {
  
  const first5DataList = dataList.slice(0, 5);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectDate = (selectedItem) => {
    setSelectedDate(selectedItem);
    onChangeSelected(selectedItem);
    //console.log(selectedDate.data,selectedDate.horario,selectedItem.capacidade);
  };

  return (
    
      <div className="lista-container">
        {first5DataList.map((item, index) => (
          <ListCloseDates
            key={index}
            data={item.Data}
            horario={item.Horario}
            capacidade={item.Capacidade}
            onSelect={handleSelectDate}
            isSelected={
              selectedDate &&
              selectedDate.data === item.Data &&
              selectedDate.horario === item.Horario &&
              selectedDate.capacidade === item.Capacidade
            }
          />
        ))}
    </div>
  );
};

export default ListaCSV;