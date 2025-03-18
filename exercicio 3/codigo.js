function calcular() {
    let funcionarios = parseFloat(document.getElementById("n1").value)
    let dias = parseFloat(document.getElementById("n2").value)

    let valor_pessoa
        
    if(funcionarios >= 1 && funcionarios <= 49) {
        valor_pessoa = 4.50 
    } else if (funcionarios >= 50 && funcionarios <= 99) {
        valor_pessoa = 4.10 
    } else if (funcionarios >= 100 && funcionarios <= 149){
        valor_pessoa = 3.80
    }
    else {
        valor_pessoa = 3.60
    }

    let valor_total = funcionarios * valor_pessoa * dias 
    

    document.getElementById("res").innerHTML = `Valor total a pagar: R$ ${valor_total.toFixed(2)}`;
}
