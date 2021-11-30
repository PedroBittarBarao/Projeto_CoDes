document.addEventListener('DOMContentLoaded', function() {
    adicionar = document.querySelector('#add_pessoa')

    dic = {}

    botao = document.querySelector('button')
    botao.addEventListener('click', function() {

        console.log('asdh')
        nome = document.querySelector('#nome').value
        console.log(nome)
        nascimento = document.querySelector('#nascimento').value
        telefone = document.querySelector('#telefone').value
        email = document.querySelector('#email').value
        plano = document.querySelector('#plano').value
        notas = document.querySelector('#notas').value
        
        dic[nome] = {}
        dic[nome]['nascimento'] = nascimento
        dic[nome]['telefone'] = telefone
        dic[nome]['email'] = email
        dic[nome]['plano'] = plano
        dic[nome]['notas'] = notas

        console.log(dic)
    })




})