var title  = document.querySelector(".title");
title.textContent = "Projeto Nutrição";
console.log(title);

var h1 = document.querySelector(".titulo_pagina");
h1.textContent = "projeto Nutrição";
console.log(h1);


/*
					<tr class="paciente" id="primeiro-paciente">
							<td class="info-nome">Paulo</td>
							<td class="info-peso">100</td>
							<td class="info-altura">2.00</td>
							<td class="info-gordura">10</td>
							<td class="info-imc">0</td>
                        </tr>
                        */ 

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
        
    var tdNome = paciente.querySelector(".info-nome").textContent;
    var tdPeso = paciente.querySelector(".info-peso").textContent;
    var tdAltura = paciente.querySelector(".info-altura").textContent;
    var tdGordura = paciente.querySelector(".info-gordura").textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var isValido = true;


    if(tdPeso <= 0 || tdPeso >= 1000){
        console.log("Peso invalido!");
        isValido = false;
    }


    if(tdAltura <= 0 || tdAltura >= 3.5){
        console.log("Altura invalido!");
        isValido = false;
    }

    if(isValido) 
        tdImc.textContent = (tdPeso / (tdAltura * tdAltura)).toFixed(2);    
});