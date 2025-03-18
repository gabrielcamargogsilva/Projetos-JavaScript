function calcular() {
    let salario = parseFloat(document.getElementById("n1").value)
    let aumento;
    let novo_salario;
        
    if(salario <= 1200) {
        aumento = salario * 0.16
    } else if (salario <= 2100) {
        aumento = salario * 0.13
    } else if (salario <= 3000){
        aumento = salario * 0.10
    }
    else {
        aumento = salario * 0.05

    }

    novo_salario = salario + aumento
    

    document.getElementById("res").innerText = `Valor a receber pós aumento: R$ ${novo_salario.toFixed(2)}`;
}
