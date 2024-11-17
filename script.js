// Lista fixa de endereços
const enderecos = [
    "Av. Francisco Samuel Luchesi Filho, 42 - Matadouro, Bragança Paulista/SP",
    "Av. da Saudade nº 252 - Centro, Atibaia/SP",
    "Av. Yadoya, 200 - Centro, Bom Jesus dos Perdões/SP",
];

// Função para exibir o modal
function exibirModal(conteudo) {
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = conteudo;
    const modal = new bootstrap.Modal(document.getElementById("resultadoModal"));
    modal.show();
}

// Função para buscar os pontos de apoio com base no CEP
document.getElementById("cepForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o reload da página.

    // Cria a mensagem dos endereços
    const mensagem = `
        <h4>Pontos de Apoio Próximos:</h4>
        <ul>
            ${enderecos.map((endereco) => `<li>${endereco}</li>`).join("")}
        </ul>
    `;

    // Exibe no modal
    exibirModal(mensagem);
});

// Função para o formulário de contato
document.querySelector("#contato form").addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o reload da página.

    // Coleta os valores do formulário
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    // Cria a mensagem de confirmação
    const mensagemModal = `
        <h4>Obrigado, ${nome}!</h4>
        <p>Sua mensagem foi recebida: <em>"${mensagem}"</em></p>
        <p>Um agente de atendimento entrará em contato.</p>
        <h5>Informações sobre os postos de atendimento:</h5>
        <ul>
            ${enderecos.map((endereco) => `<li>${endereco}</li>`).join("")}
        </ul>
    `;

    // Exibe no modal
    exibirModal(mensagemModal);

    // Limpa o formulário
    event.target.reset();
});
