const turnoForm = document.getElementById('turnoForm');
const listaTurnos = document.getElementById('listaTurnos');

function cargarTurnos() {
    const turnosGuardados = JSON.parse(localStorage.getItem('turnos')) || [];
    listaTurnos.innerHTML = '';

    turnosGuardados.forEach((turno, index) => {
        const li = document.createElement('li');
        li.textContent = `${turno.nombre} : ${turno.especialidad} - Fecha: ${turno.fecha}`;
        
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = () => eliminarTurno(index);
        
        li.appendChild(eliminarBtn);
        listaTurnos.appendChild(li);
    });
}

function guardarTurno(turno) {
    const turnosGuardados = JSON.parse(localStorage.getItem('turnos')) || [];
    turnosGuardados.push(turno);
    localStorage.setItem('turnos', JSON.stringify(turnosGuardados));
}

function eliminarTurno(index) {
    const turnosGuardados = JSON.parse(localStorage.getItem('turnos')) || [];
    turnosGuardados.splice(index, 1);
    localStorage.setItem('turnos', JSON.stringify(turnosGuardados));
    cargarTurnos(); 
}
 
turnoForm.onsubmit = (e) => {
    e.preventDefault();

    const especialidad = document.getElementById('especialidad').value;
    const nombrePaciente = document.getElementById('nombrePaciente').value;
    const fechaTurno = document.getElementById('fechaTurno').value;

    const nuevoTurno = {
        especialidad,
        nombre: nombrePaciente,
        fecha: fechaTurno
    };

    guardarTurno(nuevoTurno);
    cargarTurnos(); 
    turnoForm.reset(); 
};

cargarTurnos();