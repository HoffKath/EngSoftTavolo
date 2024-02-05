import React, { useState } from 'react';
import ListAllDates from './listAllDates'
import '../styles/reservationSelectorCalendar.css'

const ListaCalendar = () => {
  const [dataList, setDataList] = useState([
    { Horario: '10:00', Capacidade: '10' },
    { Horario: '14:00', Capacidade: '15' },
    { Horario: '12:00', Capacidade: '12' },
    { Horario: '18:00', Capacidade: '10' },
    // Adicione mais dados conforme necessário
  ]);

  const [selectedHoraCapacidade, setSelectedHoraCapacidade] = useState(null);

 
  const handleSelectHoraCapacidade = (selectedItem) => {
    setSelectedHoraCapacidade(selectedItem);
  };

  return (
    <div className="scrollable-list-calendar">
      <h3 className="date-calendar">Dia:</h3>
      <div className="lista-container-calendar">
        {dataList.map((item, index) => (
          <ListAllDates
            key={index}
            horario={item.Horario}
            capacidade={item.Capacidade}
            onSelect={handleSelectHoraCapacidade}
            isSelected={
              selectedHoraCapacidade &&
              selectedHoraCapacidade.horario === item.Horario &&
              selectedHoraCapacidade.capacidade === item.Capacidade
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ListaCalendar;