import moment from 'moment'

export default function getDay(params) {


     let fecha = new Date(params || moment().format());
     
    
     
     return fecha.getDay();
}