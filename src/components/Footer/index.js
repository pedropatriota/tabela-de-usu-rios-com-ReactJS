import React from 'react';
import {Footer} from './styles';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import TvIcon from '@material-ui/icons/Tv';
import UpdateIcon from '@material-ui/icons/Update';

export default function FooterComponent() {
const data = ()=>{
const date = new Date();
let weekday = date.getDay();
let month = date.getMonth();
let day= date.getDate();
let year = date.getFullYear();

switch (weekday) {
    case 0:
      weekday = "Domingo";
      break;
    case 1:
      weekday = "Segunda";
      break;
    case 2:
       weekday = "Terça";
      break;
    case 3:
      weekday = "Quarta";
      break;
    case 4:
      weekday = "Quinta";
      break;
    case 5:
      weekday = "Sexta";
      break;
    case 6:
      weekday = "Sábado";
      break
    default:
      break
  };
 
  switch (month) {
    case 0:
      month = "Janeiro";
      break;
    case 1:
      month = "Fevereiro";
      break;
    case 2:
       month = "Março";
      break;
    case 3:
      month = "Abril";
      break;
    case 4:
      month = "Maio";
      break;
    case 5:
      month = "Junho";
      break;
    case 6:
      month = "Julho";
      break
      case 7:
      month = "Agosto";
      break;
    case 8:
       month = "Setembro";
      break;
    case 9:
      month = "Outubro";
      break;
    case 10:
      month = "Novembro";
      break;
    case 11:
      month = "Dezembro";
      break;    
    default:
      break    
  };
    const dataImpressa = `${weekday}, ${day} de ${month} de ${year}`;
    return dataImpressa;
};

  const time = ()=>{
    const today=new Date();
    let h=today.getHours();
    if(h<10){
        h=`0${today.getHours()}`;
    }
    let m=today.getMinutes();
    if(m<10){
        m=`0${today.getMinutes()}`;
    }
    let s=today.getSeconds();
    if(s<10){
        m=`0${today.getSeconds()}`;
    }
    const horaImpressa=`// ${h}:${m}:${s}`;
    return horaImpressa
  }

  const icon1={    
    marginRight:"10px"
  };

  const icons={
    color:"#626262",
    marginRight:"5px"
  };
  

  return (    
    <Footer>
        <ul>
           <li><RadioButtonCheckedIcon style={icon1}/> NO AR</li> 
           <li><TvIcon style={icons}/> ENCONTRO -10:00</li>
           <li><UpdateIcon style={icons}/> Última atualização em 10:28</li>  
        </ul>
        <ul>
            <li>{data()}</li> 
            <li>{time()}</li>  
        </ul>      
    </Footer>
  );
}