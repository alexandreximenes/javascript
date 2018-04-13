// Captura os dados dos inputs e inclui na tabela
var form = document.querySelector('.form');
var campos = [
  form.querySelector('#data'),
  form.querySelector('#quantidade'),
  form.querySelector('#valor')
];

var tbody = document.querySelector('table tbody');
form.addEventListener('submit', function(event){
  event.preventDefault();
  tbody.parentNode.classList.remove('tbNegociacao');
  
    var tr = document.createElement('tr');
    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);
    
    form.reset();
    form.data.focus();
  
});

//// fazendo testes

/*
    let n1 = new Negociacao(new Date(), 1, 10.50);
    // Não esta funcionando, porque o objeto esta congelado
    n1._quantidade = 13131;
    n1._valor = 5000.000,55;
    console.log(n1);
    console.log(n1.volume);

    let n2 = new Negociacao(new Date(), 2, 4444);
    console.log(n2);
    console.log(n2.volume);


    // Trabalhando com data
    // data continua imutavel
    console.log(n2.data);

    let amanha = new Date();
    amanha.setDate(14);
    n2._data = amanha;

    console.log(n2.data);

    //Esta alterando, não esta encapsulando, 
    // porque a DATA é um objeto e Object.freeze(obj) não congela um objeto com mais atributos e metodos
    //n2.data.setDate(14);
    console.log(n2.data);
*/