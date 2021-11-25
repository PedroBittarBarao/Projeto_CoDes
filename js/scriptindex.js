document.addEventListener('DOMContentLoaded', function() {
    
    hoje = document.querySelector('#data')

    var today = new Date();
    var dia = today.getDate();
    var nmes = today.getMonth()+1;

    dicimes = {
        1: 'Janeiro', 2: 'Fevereiro', 3: 'Março', 4: 'Abril', 5: 'Maio', 6: 'Junho', 7: 'Julho', 8: 'Agosto', 9: 'Setembro', 10: 'Outubro', 11: 'Novembro', 12: 'Dezembro'
    }
    mess = dicimes[nmes];
    date = dia + ' de ' + mess;
    
    hoje.innerHTML = date;
    
    hoje.addEventListener('click', function(event){
        loc = window.location.pathname;
        dir = loc.substring(0, loc.lastIndexOf('/'));
        console.log(dir)
        window.location= dir + "/dia24.html";
    })

})