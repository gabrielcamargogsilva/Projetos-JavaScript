function calcular() {
    let salario = parseFloat(document.getElementById("n1").value)
    let horasUteis = parseInt(document.getElementById("n2").value)
    let horasFimDeSemana = parseInt(document.getElementById("n3").value)

    if (isNaN(salario) || isNaN(horasUteis) || isNaN(horasFimDeSemana)) {
        document.getElementById("res").innerText = "Por favor, preencha todos os campos corretamente."
        return
    }

    let valorHora = salario / 200
    let valorHorasUteis = horasUteis * valorHora
    let valorHorasFimDeSemana = horasFimDeSemana * valorHora * 1.5
    let totalAReceber = valorHorasUteis + valorHorasFimDeSemana

    document.getElementById("res").innerHTML = `
         Valor da hora: R$ ${valorHora.toFixed(2)}<br>
         Horas extras úteis: R$ ${valorHorasUteis.toFixed(2)}<br>
         Horas extras fim de semana: R$ ${valorHorasFimDeSemana.toFixed(2)}<br>
         <strong>Total a receber:</strong> R$ ${totalAReceber.toFixed(2)}
    `;
}
