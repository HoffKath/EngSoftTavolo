import '../styles/listAllDates.css'

const ListAllDates = ({data, horario, capacidade, onSelect, isSelected }) => {

  const handleItemClick = () => {
    onSelect({data, horario, capacidade});
  };

  const itemClassName = `hora-capacidade-item ${isSelected ? 'selected' : ''}`;

  return (
    <div className={itemClassName} onClick={handleItemClick}>
        <p className="item-info-calendar">Horário: {horario}</p>
        <p className="item-info-calendar">Capacidade: {capacidade}</p>
    </div>
  );
};

export default ListAllDates;