let começar = document.getElementById('começar')    
let pergunta = document.querySelectorAll('#Pergunta1')
let radio = document.getElementsByName("res")
let button = document.querySelectorAll('#verificar')
let buttonfu = document.getElementById('verificarf')
let respostas = document.querySelectorAll('#respostas')
let next = document.querySelectorAll('#next')
let finalres = document.getElementById('result')
next[0].disabled = true
next[1].disabled = true
next[2].disabled = true
next[3].disabled = true
function sumir() {
    começar.classList.add('sumir')
    pergunta[0].classList.add('aparecer')
    button[0].classList.add('aparecer')
    next[0].classList.add('sumir')
}
function verificar() { 
if (radio[1].checked) {
    respostas[0].innerHTML = `Você acertou!! passe para a proxima pergunta`
    document.getElementById('verificar').disabled = true
    next[0].disabled = false
    } else if (radio[0].checked || radio[2].checked){
    respostas[0].innerHTML = `Você acertou!! passe para a proxima pergunta`
    document.getElementById('verificar').disabled = true
    next[0].disabled = false
    } if (radio[3].checked) {
    respostas[1].innerHTML = `Você acertou!! passe para a proxima pergunta`
    button[1].disabled = true
    next[1].disabled = false
    } else if (radio[4].checked || radio[5].checked){
    respostas[1].innerHTML = '<p>Você errou, vá para aproxima pergunta</p>'
    button[1].disabled = true
    next[1].disabled = false
    } if (radio[8].checked) {
    respostas[2].innerHTML = `Você acertou!! passe para a proxima pergunta`
    button[2].disabled = true
    next[2].disabled = false
    } else if (radio[6].checked || radio[7].checked){
    respostas[2].innerHTML = '<p>Você errou, vá para aproxima pergunta</p>'
    button[2].disabled = true
    next[2].disabled = false   
    } if (radio[10].checked) {
    respostas[3].innerHTML = '<p>Você Acertou!! Aperte para somar os Resultados</p>'
    button[3].disabled = true
    next[3].disabled = false
    } else if (radio[9].checked || radio[11].checked){
    respostas[3].innerHTML = '<p>Você errou, Aperte para somar os Resultados</p>'
    button[3].disabled = true
    next[3].disabled = false
}
}
function proximo() {
    pergunta[0].classList.remove('aparecer')
    pergunta[1].classList.add('aparecer')
    button[1].classList.add('aparecer')
    next[0].classList.remove('sumir')
    next[1].classList.add('sumir')
}
function proximo1() {
    pergunta[1].classList.remove('aparecer')
    pergunta[2].classList.add('aparecer')
    button[1].classList.remove('aparecer')
    button[2].classList.add('aparecer')
    next[1].classList.remove('sumir')
    next[2].classList.add('sumir')
}
function proximo2() {
    pergunta[2].classList.remove('aparecer')
    pergunta[3].classList.add('aparecer')
    button[2].classList.remove('aparecer')
    button[3].classList.add('aparecer')
    next[2].classList.remove('sumir')
    next[3].classList.add('sumir')
}
function Somar() {
    pergunta[3].classList.remove('aparecer')
    button[3].classList.remove('aparecer')
    next[3].classList.remove('sumir')
    finalres.classList.add('aparecer')
}    
buttonfu.addEventListener('click', verificar)