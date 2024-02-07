import '../styles/chooseHour.css'
import imageCalendar from "../assets/calendar-icon.png"
import TCalendar from './calendar';
import CalendarStyle from '../styles/chooseHour.css'
import {useState} from "react"
import ListaCSV from './reservationSelector';
import ListaCalendar from './reservationSelectorCalendar';

const ChooseHour = ({onChangeSelected, Hour}) => {

    // Função para obter a lista de horários entre o intervalo fornecido
    function getHorarios(intervaloHorario) {
        const [inicio, fim] = intervaloHorario.split(' - ');
        const [inicioHora, inicioMinuto] = inicio.split(':').map(Number);
        const [fimHora, fimMinuto] = fim.split(':').map(Number);
      
        const horarios = [];
      
        for (let hora = inicioHora; hora <= fimHora; hora++) {
          for (let minuto = 0; minuto < 60; minuto += 30) {
            const horario = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
            if ((hora === inicioHora && minuto >= inicioMinuto) || (hora !== inicioHora && hora !== fimHora) || (hora === fimHora && minuto <= fimMinuto)) {
              horarios.push(horario);
            }
          }
        }
      
        return horarios;
      }

      function getRandomEvenInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let num;
        do {
          num = Math.floor(Math.random() * (max - min) + min);
        } while (num % 2 !== 0); // Garante que o número seja par
        return num;
      }
  
  // Função para criar a lista de objetos para os próximos 30 dias
  function criarDataList(intervaloHorario) {
    const dataList = [];
    const dataAtual = new Date();
  
    for (let i = 0; i < 30; i++) {
      const data = new Date(dataAtual);
      data.setDate(dataAtual.getDate() + i);
      const dataISO = data.toISOString().split('T')[0];
      const horarios = getHorarios(intervaloHorario);
  
      horarios.forEach(horario => {
        dataList.push({ Data: dataISO, Horario: horario, Capacidade: 10 }); // Capacidade padrão de 10
      });
    }
  
    return dataList;
  }

    const intervaloHorario = '09:00 - 23:00';
    const capacidadeString = 'Quatro';
    const dataList = criarDataList(intervaloHorario);


    /*const [dataList, setDataList] = useState([
        { Data: '2024-02-05', Horario: '18:00', Capacidade: '10' },
        { Data: '2024-02-06', Horario: '18:00', Capacidade: '10' },
        { Data: '2024-02-20', Horario: '10:00', Capacidade: '10' },
        { Data: '2024-02-20', Horario: '14:00', Capacidade: '15' },
        { Data: '2024-02-21', Horario: '12:00', Capacidade: '12' },
        { Data: '2024-02-22', Horario: '18:00', Capacidade: '10' },
        { Data: '2024-02-23', Horario: '13:00', Capacidade: '12' },
        { Data: '2024-02-24', Horario: '13:00', Capacidade: '12' },
        // Adicione mais dados conforme necessário
      ]);*/

    const [show,toggleShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedItem, setChangeSelected] = useState(null);

    const showCalendar =()=>{
        if(show === true){
        toggleShow(false)
        }else{
        toggleShow(true)
        }
    }

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        console.log(newDate);
      };

    const handleChangeSelected = (newSelected) => {
        setChangeSelected(newSelected);
        onChangeSelected(newSelected);
        console.log(newSelected);
    };

    return (
       <div className="hourpicker">
            <h1>1. Escolha um horário</h1>

            {show &&
            <div className='calendar-box'> 
               <div className='calendar-choose'>
                    <TCalendar onDateChange={handleDateChange} style={CalendarStyle}/>
                    <ListaCalendar dataList={dataList} selectedDate={selectedDate} onChangeSelected={handleChangeSelected} />
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
                    <ListaCSV dataList={dataList} onChangeSelected={handleChangeSelected}/>
                    <div className='button-closedates'>
                        <label className='info-label'>Ou pesquise um horário de preferência:</label>
                        <img className='icon-calendar' src={imageCalendar} onClick={showCalendar}/>
                    </div>
                </div>}
        </div>
    );
}
export default ChooseHour;