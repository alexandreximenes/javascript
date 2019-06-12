var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

var tbody = document.querySelector('table tbody');

var form = document.querySelector('.form');  

form.addEventListener('submit', function(event){

    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(campo => {
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

