import React, { useState } from 'react';
import ListCloseDates from './listCloseDates'
import '../styles/reservationSelector.css'


const ListaCSV = () => {
  const [dataList, setDataList] = useState([
    { Data: '2024-02-20', Horario: '10:00', Capacidade: '10' },
    { Data: '2024-02-20', Horario: '14:00', Capacidade: '15' },
    { Data: '2024-02-21', Horario: '12:00', Capacidade: '12' },
    { Data: '2024-02-22', Horario: '18:00', Capacidade: '10' },
    // Adicione mais dados conforme necessário
  ]);

  const handleSelectItem = (selectedItem) => {
    console.log('Item selecionado:', selectedItem);
    // Faça o que for necessário com o item selecionado
  };

  return (
    
      <div className="lista-container">
        {dataList.map((item, index) => (
          <ListCloseDates
            key={index}
            data={item.Data}
            horario={item.Horario}
            capacidade={item.Capacidade}
            onSelect={handleSelectItem}
          />
        ))}
    </div>
  );
};

export default ListaCSV;