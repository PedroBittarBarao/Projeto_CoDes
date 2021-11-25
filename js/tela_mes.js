document.addEventListener('DOMContentLoaded', function() {

    meshtml = document.querySelector('#mes')

    var today = new Date();
    var dia = today.getDate();
    var nmes = today.getMonth()+1;

    dicimes = {
        1: 'Janeiro', 2: 'Fevereiro', 3: 'Março', 4: 'Abril', 5: 'Maio', 6: 'Junho', 7: 'Julho', 8: 'Agosto', 9: 'Setembro', 10: 'Outubro', 11: 'Novembro', 12: 'Dezembro'
    }
    mess = dicimes[nmes];
    
    meshtml.innerHTML = mess;
    
})