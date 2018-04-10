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