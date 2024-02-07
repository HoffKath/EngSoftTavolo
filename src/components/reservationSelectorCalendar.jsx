import React, { useState } from 'react';
import { format, startOfToday } from 'date-fns';
import { ptBR } from 'date-fns/locale'; // Importe o locale ptBR
import ListAllDates from './listAllDates'
import '../styles/reservationSelectorCalendar.css'

const ListaCalendar = ({ dataList, selectedDate, onChangeSelected }) => {
  // const [dataList, setDataList] = useState([
  //   { Data: '2024-02-20', Horario: '10:00', Capacidade: '10' },
  //   { Data: '2024-02-20', Horario: '14:00', Capacidade: '15' },
  //   { Data: '2024-02-21', Horario: '12:00', Capacidade: '12' },
  //   { Data: '2024-02-22', Horario: '18:00', Capacidade: '10' },
  //   { Data: '2024-02-05', Horario: '18:00', Capacidade: '10' },
  //   // Adicione mais dados conforme necessário
  // ]);

  const [selectedHoraCapacidade, setSelectedHoraCapacidade] = useState(null);

 
  const handleSelectHoraCapacidade = (selectedItem) => {
    setSelectedHoraCapacidade(selectedItem);
    onChangeSelected(selectedItem);
     console.log(selectedItem.data,selectedItem.horario,selectedItem.capacidade);
  };

  // Verifica se selectedDate é null, se sim, define como a data de hoje
  const adjustedSelectedDate = selectedDate || startOfToday();

  const filteredDataList = dataList.filter((item) => item.Data === adjustedSelectedDate.toISOString().split('T')[0]);

  const formattedDate = format(adjustedSelectedDate, "dd 'de' MMMM", { locale: ptBR });

  return (
    <div className="scrollable-list-calendar">
      <h3 className="date-calendar">Dia: {adjustedSelectedDate ? formattedDate : 'N/A'}</h3>
      <div className="lista-container-calendar">
        {filteredDataList.map((item, index) => (
          <ListAllDates
            key={index}
            data={item.Data}
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