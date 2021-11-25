document.addEventListener('DOMContentLoaded', function() {
    
    hoje = document.querySelector('#data')

    var today = new Date();
    var dia = today.getDate();
    var nmes = today.getMonth()+1

    dicimes = {
        1: 'Janeiro', 2: 'Fevereiro', 3: 'Março', 4: 'Abril', 5: 'Maio', 6: 'Junho', 7: 'Julho', 8: 'Agosto', 9: 'Setembro', 10: 'Outubro', 11: 'Novembro', 12: 'Dezembro'
    }
    mes = dicimes[nmes];
    date = dia + " " +  mes ;
    console.log(date)

    hoje.innerHTML = date
    
    hoje.addEventListener('click', function(event){
        window.location="/tela_mes.html";
    })

})