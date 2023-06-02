const ulInformacionReserva = document.querySelector ("ul");
const selectOpcionReserva = document.querySelector ("select");
const divOpcionesReserva = document.querySelector ("#opciones-reserva");
const spanTituloOpcion = document.querySelector ("#opciones-reserva span");

const OPC_1_CANT_DIAS = 1;
const OPC_2_CANT_DIAS = 3;
const OPC_3_CANT_DIAS = 7;

const OPC_1_DIA_INGRESO = "Lunes";
const OPC_2_DIA_INGRESO = "Miercoles";
const OPC_3_DIA_INGRESO = "Sabado";

const OPC_1_SERV_EXTRA = "Desayuno";
const OPC_2_SERV_EXTRA = "Desayuno y almuerzo";
const OPC_3_SERV_EXTRA = "Desayuno, almuerzo y cena";

const OPC_1 = 1;
const OPC_2 = 2;
const OPC_3 = 3;
const OPC_4 = 4;

let opcActual = OPC_1;

function agregarInformacion(){

    cantCamas = (selectOpcionReserva.value);
    cantDias = (selectCantDias.value);
    diaDeIngreso = (selectDiaIngreso.value);
    serviciosComida = selectServicios.value;

    pCamasTotal.innerHTML = `Las cantidad de camas son ${cantCamas}`;    
    pDiasTotal.innerHTML = `La cantidad de dias son ${cantDias}`;
    pDiaIngreso.innerHTML = `El dia de ingreso es ${diaDeIngreso}`;
    pServiciosAdicionales.innerHTML = `Los servicios adicionales seleccionados son: ${serviciosComida}`;

    ulInformacionReserva.innerHTML = `<li>Las cantidad de camas son ${cantCamas} <br> La cantidad de dias son ${cantDias} <br> El dia de ingreso es ${diaDeIngreso} <br> Los servicios adicionales seleccionados son: ${serviciosComida}</li>`;
}

function actualizaOpcReserva() {
    switch (opcActual) {
        case OPC_1:
            actualizaAOpcionInfo2();
            break;
        case OPC_2:
            actualizaAOpcionInfo3();
            break;
        case OPC_3:
            actualizaAOpcionInfo4();
            break;
        case OPC_4:
            actualizaOpcionesATerminado();
    }
    opcActual++;
}

function actualizaOpcionesATerminado(){
    divOpcionesReserva.innerHTML = `
        <h2>Reserva finalizada</h2>
    `;
}

function actualizaAOpcionInfo4(){
    spanTituloOpcion.innerHTML = "Seleccione servicio extra:";
    selectOpcionReserva.innerHTML = `
        <option value="${OPC_1_SERV_EXTRA}">${OPC_1_SERV_EXTRA}</option>
        <option value="${OPC_2_SERV_EXTRA}">${OPC_2_SERV_EXTRA}</option>
        <option value="${OPC_3_SERV_EXTRA}">${OPC_3_SERV_EXTRA}</option>
    `;
}

function actualizaAOpcionInfo3() {
    spanTituloOpcion.innerHTML = "Seleccione día de ingreso:";
    selectOpcionReserva.innerHTML = `
        <option value="${OPC_1_DIA_INGRESO}">${OPC_1_DIA_INGRESO}</option>
        <option value="${OPC_2_DIA_INGRESO}">${OPC_2_DIA_INGRESO}</option>
        <option value="${OPC_3_DIA_INGRESO}">${OPC_3_DIA_INGRESO}</option>
    `;
}

function actualizaAOpcionInfo2() {
    spanTituloOpcion.innerHTML = "Seleccione cantidad de días";
    selectOpcionReserva.innerHTML = `
                <option value="${OPC_1_CANT_DIAS} día">${OPC_1_CANT_DIAS} día</option>
                <option value="${OPC_2_CANT_DIAS} días">${OPC_2_CANT_DIAS} días</option>
                <option value="${OPC_3_CANT_DIAS} días">${OPC_3_CANT_DIAS} días</option>
            `;
}

function actualizarOpcSeleccionadas() {
    ulInformacionReserva.innerHTML += `
        <li>${selectOpcionReserva.value}</li>
    `;
}

 function enviarInformacion(){
    actualizarOpcSeleccionadas();
    actualizaOpcReserva();
}
