// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')

// Essa função será chamada quando o botão "Somar" for clicado.
function somar(){
    // Obtém os valores dos campos de entrada n1 e n2 e converte-os em números.
    // Realiza a operação de soma e atribui o resultado ao campo de entrada res.
    res.innerHTML += `<p>O resultado da soma entre ${n1.value} e ${n2.value} é ${Number(n1.value) + Number (n2.value)}</p>`
}

function subtracao(){
    res.innerHTML += `<p>O resultado da subtração entre ${n1.value} e ${n2.value} é ${Number(n1.value) - Number(n2.value)}</p>`
}

function divisao(){
    if (Number(n2.value) === 0){
        res.innerHTML += `<p> Erro!!!, não é possível subtrair um número por zero`
    } else {
    res.innerHTML += `<p> O resultado da divisão entre ${Number(n1.value)} e ${Number(n2.value)} é ${Number(n1.value) / Number(n2.value)}</p>`}
}

function multiplicacao(){
    res.innerHTML += `<p>O resultado da multiplicação entre ${n1.value} e ${n2.value} é ${Number(n1.value) * Number(n2.value)}</p>`
}

function raiz() {
    if (Number(n1.value) < 0) {
        res.innerHTML += `<p>Erro: não é possível calcular a raiz quadrada de um número negativo.</p>`
    } else {
        res.innerHTML += `<p>A raiz quadrada de ${n1.value} é ${Math.sqrt(Number(n1.value))}</p>`
    }
}

function potencia() {
    res.innerHTML += `<p>O resultado de ${n1.value} elevado a ${n2.value} é ${Math.pow(Number(n1.value), Number(n2.value))}</p>`
}


function limpar(){
    res.innerHTML = ""
}