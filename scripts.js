function agendarHorario() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    const corteDesejado = document.getElementById('corteDesejado').value;
    const pintar = document.getElementById('pintar').value;
    const tipoPintura = document.getElementById('tipoPintura').value;
    const mensagem = `Olá! Gostaria de agendar um horário na barbearia.\nNome: ${nomeCliente}\nCorte Desejado: ${corteDesejado}\nPintar: ${pintar}\nTipo de Pintura: ${tipoPintura}.`;

    const numeroWhatsapp = '+5598984544326';
    const linkwhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(linkwhatsapp, '_blank');
}

function verificarHorarioBarbearia() {
    const dataAtual = new Date();
    const diaSemana = dataAtual.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();

    // Horários de funcionamento da barbearia
    const horarioManhaInicio = 8;
    const horarioManhaFim = 12;
    const horarioTardeInicio = 14;
    const horarioTardeFim = 18;

    let estaAberta = false;

    if (diaSemana === 0) { // Domingo
        estaAberta = hora >= horarioManhaInicio && hora < horarioManhaFim && minutos <= 30;
    } else { // Segunda a Sábado
        estaAberta = (hora >= horarioManhaInicio && hora < horarioManhaFim) ||
            (hora >= horarioTardeInicio && hora < horarioTardeFim);
    }

    if (estaAberta) {
        document.getElementById('statusBarbearia').innerText = 'ABERTA.';
    } else {
        document.getElementById('statusBarbearia').innerText = 'FECHADA.';
    }
}

verificarHorarioBarbearia();