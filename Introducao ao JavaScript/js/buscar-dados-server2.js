let buscar = document.querySelector('#buscar-paciente');
buscar.addEventListener('click', () => {

    fetch('https://api-pacientes.herokuapp.com/pacientes')
        //return one Promise
        .then(r => r.json())
        //return object
        .then(pacientes => pacientes.forEach(paciente => adicionarPacienteNaTabela(paciente)))
        .catch(log => console.log(log));
});


// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
//
// xhr.addEventListener('load', () => {
//     if(xhr.status == 200){
//         console.log(typeof xhr.responseText);
//         console.log(xhr.responseText);
//
//         let pacientes = JSON.parse(xhr.responseText);
//
//         pacientes.forEach((paciente) => {
//             adicionarPacienteNaTabela(paciente);
//         });
//         // console.log("JSON.parse(xhr.responseText); "+pacientes);
//         // console.log(typeof pacientes);
//
//         // pacientes = JSON.stringify(pacientes);
//         // console.log("pacientes = JSON.stringify(pacientes); "+pacientes);
//         // console.log(typeof pacientes);
//     }else{
//         console.log(xhr.status);
//         console.log(xhr.responseText);
//     }
// });
//
// xhr.send();