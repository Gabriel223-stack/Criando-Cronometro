var sec = 0
var min = 0
var hr = 0
var interval

window.alert ('Clique no iniciar para iniciar o cronômetro!')

function twoDigits(digit) {
    if (digit < 10) {//ADICIONANDO VALOR DE MAIS UM ZERO SE O VALOR FOR MENOR QUE 10, ATENDIDO OS REQUISITOS O ZERO É ADICIONADO A FRENTE
        return('0' + digit)
    } else {
        return(digit)
    }
}

function start() {
    watch()
    interval = setInterval(watch, 1000) //CHAMAMOS A FUNÇÃO WATCH PARA TESTE NO setInterval
}

function pause(){
    clearInterval(interval) //CHAMANDO A FUNÇÃO START PARA LIMPAR
}

function stop(){
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById("watch").innerText = '00:00:00'
}

// TESTANDO SE ESTÁ CONTANDO
function watch(){
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if (min == 60) {
            min = 0
            hr++
        }
    }
    document.getElementById("watch").innerText = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec)}`
} 
