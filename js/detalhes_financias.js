document.addEventListener('DOMContentLoaded', function() {
    
    function pendente() {
        p = document.createElement('p')
        p.className = 'pendente'
        p.innerHTML = 'pendente'
        main = document.querySelector('main')
        main.prepend(p)
    }

    function pago() {
        pago = document.createElement('p')  
        pago.className = 'pago'
        pago.innerHTML = 'pago' 
        main = document.querySelector('main')
        main.prepend(pago)
    }

    data = document.querySelector('#data').innerHTML

    var today = new Date();
    var dia = today.getDate();
    var nmes = today.getMonth()+1;
    

    ld = data.split('/')
    console.log(ld)

    diapag = parseInt(ld[0])
    mespag = parseInt(ld[1])
    console.log('diapag')
    console.log(diapag)
    console.log('mespag')
    console.log(mespag)

    console.log(dia)
    console.log(nmes)

    if(diapag < dia) {
        pendente()
    }else if(diapag > dia){
        pago()
        
    }


})