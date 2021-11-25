document.addEventListener('DOMContentLoaded', function() {
    
    data = document.querySelector('#data').innerHTML

    var today = new Date();
    var dia = today.getDate();
    var nmes = today.getMonth()+1;
    
    ld = data.split('/')
    console.log(ld)

    diapag = parseInt(ld[0])
    mespag = parseInt(ld[1])
    console.log(diapag)
    console.log(mespag)

    console.log(dia)
    console.log(nmes)

    if(mespag <= nmes) {
        console.log('if 1')
        if(diapag < dia) {
            console.log('if 2')
            p = document.createElement('p')
            p.className = 'pendente'
            p.innerHTML = 'pendente'
            main = document.querySelector('header')
            main.prepend(p)
        }
    }


})