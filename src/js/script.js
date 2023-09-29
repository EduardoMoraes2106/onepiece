  // Função para alternar entre os personagens
function alternarPersonagem(personagemSelecionado) {
    // Selecionar todos os elementos com a classe "personagem"
    const personagens = document.querySelectorAll('.personagem');

    // Remover a classe "selecionado" de todos os personagens
    personagens.forEach(personagem => {
        personagem.classList.remove('selecionado');
    });

    // Adicionar a classe "selecionado" ao personagem desejado
    personagemSelecionado.classList.add('selecionado');
}

  // Adicionar um evento de clique a cada botão
const botoes = document.querySelectorAll('.botao');
    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
      // Remover a classe "selecionado" de todos os botões
        botoes.forEach(b => {
            b.classList.remove('selecionado');
    });

      // Adicionar a classe "selecionado" apenas ao botão clicado
    botao.classList.add('selecionado');

       // Obter o índice do botão clicado
        const indiceBotao = Array.from(botoes).indexOf(botao);

      // Obter o personagem correspondente e alternar para ele
        const personagens = document.querySelectorAll('.personagem');
        const personagemSelecionado = personagens[indiceBotao];
        alternarPersonagem(personagemSelecionado);
    });
});