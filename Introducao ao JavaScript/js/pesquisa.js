let pesquisa = document.querySelector(".pesquisa");
pesquisa.addEventListener('input', () => {
    let nomeDigitado = pesquisa.value;
    let pacientes = document.querySelectorAll('.paciente');

    if(nomeDigitado.length > 0){
        pacientes.forEach(p => {
            let nome = p.querySelector('.info-nome').textContent;

            /**
             * Regular Expression
             */
            var expressao = new RegExp(nomeDigitado, 'i');
            if(expressao.test(nome)){
                p.classList.remove('fadeout');
            }else{
                p.classList.add('fadeout');
            }
        });
    }else{
        pacientes.forEach(p => {
                p.classList.remove('fadeout');
        });
    }
});
