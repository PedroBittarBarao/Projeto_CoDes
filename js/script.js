document.addEventListener('DOMContentLoaded', function() {
    hoje = document.querySelector('#data')

    dia  = data.getDate().toString(),
    diaF = (dia.length == 1) ? '0'+dia : dia,
    mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = (mes.length == 1) ? '0'+mes : mes,
    anoF = data.getFullYear();
    data = diaF+"/"+mesF+"/"+anoF;

    hoje.innerHTML = data
    
    
})