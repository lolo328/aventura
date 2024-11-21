// Script para alternar entre os passos
document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', () => {
        const proximoPasso = button.getAttribute('data-proximo');
        
        // Ocultar todos os passos
        document.querySelectorAll('.passo').forEach(passo => {
            passo.classList.remove('ativo');
        });

        // Mostrar o próximo passo
        document.getElementById(`passo-${proximoPasso}`).classList.add('ativo');
    });
});
