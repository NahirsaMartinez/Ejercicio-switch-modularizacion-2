const ulInformacion = document.querySelector ("#info-reserva");
const selectCantCamas = document.querySelector ("#cant-camas");
const selectCantDias = document.querySelector ("#cant-dias");
const selectDiaIngreso = document.querySelector ("#dia-ingreso");
const selectServicios = document.querySelector ("#servicios-adicionales");

const pCamasTotal = document.querySelector ("#camas-total");
const pDiasTotal = document.querySelector ("#dias-total");
const pDiaIngreso = document.querySelector ("#Ingreso-reserva");
const pServiciosAdicionales = document.querySelector ("#servicio-comida");

let cantCamas = 0;
let cantDias = 0;
let diaDeIngreso = 0;
let serviciosComida = 0;

function agregarInformacion(){

    cantCamas = (selectCantCamas.value);
    cantDias = (selectCantDias.value);
    diaDeIngreso = (selectDiaIngreso.value);
    serviciosComida = selectServicios.value;

    pCamasTotal.innerHTML = `Las cantidad de camas son ${cantCamas}`;    
    pDiasTotal.innerHTML = `La cantidad de dias son ${cantDias}`;
    pDiaIngreso.innerHTML = `El dia de ingreso es ${diaDeIngreso}`;
    pServiciosAdicionales.innerHTML = `Los servicios adicionales seleccionados son: ${serviciosComida}`;

    ulInformacion.innerHTML = `<li>Las cantidad de camas son ${cantCamas} <br> La cantidad de dias son ${cantDias} <br> El dia de ingreso es ${diaDeIngreso} <br> Los servicios adicionales seleccionados son: ${serviciosComida}</li>`;
}