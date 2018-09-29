var title = document.querySelector(".title");
title.textContent = "Projeto Nutrição";
// console.log(title);

var h1 = document.querySelector(".titulo_pagina");
h1.textContent = "projeto Nutrição";
// console.log(h1);

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => validarPaciente(paciente) );

function validarPaciente(paciente){

    let tdNome = paciente.querySelector(".info-nome");
    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");
    let tdGordura = paciente.querySelector(".info-gordura");
    let tdImc = paciente.querySelector(".info-imc");

    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;

    let pesoValido = true;
    let alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        // console.log("Peso invalido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("dados-invalidos");
    }


    if (altura <= 0 || altura >= 3.5) {
        // console.log("Altura invalido!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("dados-invalidos");
    }

    if (alturaValida && pesoValido)
        tdImc.textContent = (peso / (altura * altura)).toFixed(2);

}
// Aero function
document
    .querySelector('.titulo_pagina')
    .addEventListener('click', () => console.log("clicado"));
