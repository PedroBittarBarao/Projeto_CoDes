document.addEventListener('DOMContentLoaded', function() {


    block = document.getElementById("block")
    clear = document.getElementById("clear")

    block.addEventListener('click', function() {
        e = document.getElementById("drop")
        hora = e.value
        hora = parseInt(hora)
        console.log(hora)
        if(hora==0) {
            return
        }
        if(hora<=7){
            hora+=1
        }
        else if(hora<=14){
            hora+=2
        }
        else{
            return
        }
        console.log(hora)

        quadrados = document.querySelectorAll('div')
        console.log(quadrados[hora])
        quadrados[hora].className = 'hora3'
    })

    clear.addEventListener('click', function() {
        e = document.getElementById("drop")
        hora = e.value
        hora = parseInt(hora)
        console.log(hora)
        if(hora==0) {
            return
        }
        if(hora<=7){
            hora+=1
        }
        else if(hora<=14){
            hora+=2
        }
        else{
            return
        }
        console.log(hora)

        quadrados = document.querySelectorAll('div')
        console.log(quadrados[hora])
        quadrados[hora].className = 'hora'
    })



})