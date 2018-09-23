var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener('dblclick', (e) => {
   let TR = e.target.parentNode;
   TR.classList.add('fadeout');
   setTimeout(() => {
       TR.remove();
   }, 500);
});




/*
var pacientes = document.querySelectorAll(".paciente");

document.querySelector('#tabela')
        .forEach((paciente) => {
            paciente.addEventListener('dblclick', (e) => {

    });
});*/