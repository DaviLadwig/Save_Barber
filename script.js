document.getElementById("formAgendamento")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        let nome = document.getElementById("nome").value
        let telefone = document.getElementById("telefone").value
        let servico = document.getElementById("servico").value
        let data = document.getElementById("data").value
        let hora = document.getElementById("hora").value

        let mensagem = `Olá, gostaria de confirmar um agendamento:

Nome: ${nome}
Telefone: ${telefone}
Serviço: ${servico}
Data: ${data}
Hora: ${hora}`

        let numero = "5599999999999"

        let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

        window.open(url, "_blank")

    })