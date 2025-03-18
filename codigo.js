function mudarfoto(item) {
    let foto = document.getElementById("imagem")
    let nomeItem = document.getElementById("nome_item")
    let textoItem = document.getElementById("texto_item")
    

    if (item == 1) {
        foto.src = "./static/imgs/horas extras.png"
        nomeItem.textContent=("Projeto 1")
        textoItem.textContent=("Este projeto tem como objetivo fazer o cálculo de horas extras trabalhadas.")
        
    }

    else if (item == 2) {
        foto.src = "./static/imgs/aumento salario.png"
        nomeItem.textContent=("Projeto 2")
        textoItem.textContent=("Este projeto tem como objetivo fazer o cálculo de aumento salarial.")
        
    }

    else {
        foto.src = "./static/imgs/transporte.png"
        nomeItem.textContent=("Projeto 3")
        textoItem.textContent=("Este projeto tem como objetivo calcular o transporte de colaboradores de uma empresa.")
    }
}

function atualizarHorario() {
    const agora = new Date();

    // Obtendo a hora, minutos e segundos
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    // Atualizando o horário
    document.getElementById("hora-atual").textContent = `${horas}:${minutos}:${segundos}`;

    // Obtendo a data
    const data = agora.toLocaleDateString('pt-BR', {
        weekday: 'long', // Dia da semana por extenso
        year: 'numeric',
        month: 'long', // Mês por extenso
        day: 'numeric'
    });

    // Atualizando a data
    document.getElementById("data-atual").textContent = data;
}

// Atualiza o horário e a data a cada segundo
setInterval(atualizarHorario, 1000);

// Atualiza imediatamente ao carregar a página
atualizarHorario();

