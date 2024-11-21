// Função para controlar os passos da aventura
const botoes = document.querySelectorAll('.btn-proximo');
botoes.forEach((botao) => {
    botao.addEventListener('click', function () {
        // Esconde o passo atual
        const passoAtual = document.querySelector('.passo.ativo');
        passoAtual.classList.remove('ativo');
        
        // Exibe o próximo passo
        const proximoPasso = document.getElementById(`passo-${this.getAttribute('data-proximo')}`);
        proximoPasso.classList.add('ativo');
    });
});
