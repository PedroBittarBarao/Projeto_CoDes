document.addEventListener('DOMContentLoaded', function() {
    hoje = document.querySelector('#data')

    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    console.log(date)
    
    hoje.innerHTML = date
    
})