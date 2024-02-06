import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import '../styles/listCloseDates.css'

const ListCloseDates = ({ data, horario, capacidade, onSelect, isSelected }) => {
    const dateObject = parseISO(data);
    const formattedDay = format(dateObject, 'd', { locale: ptBR });
    const formattedMonth = format(dateObject, 'MMMM', { locale: ptBR });
  

    const handleItemClick = () => {
        onSelect({ data, horario, capacidade });
    };

    const itemClassName = `list-item ${isSelected ? 'selected' : ''}`;
  
    return (
      <div className={itemClassName} onClick={handleItemClick}>
        <div className="date-container">
          <p className="day">{formattedDay}</p>
          <p className="month">{formattedMonth}</p>
        </div>
        <p className="item-info">Horário: {horario}</p>
        <p className="item-info">Capacidade: {capacidade}</p>
      </div>
    );
  };
  
  export default ListCloseDates;