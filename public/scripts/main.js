import Modal from './modal.js'; // Importando modal

const modal = Modal();

// Obter todos os botões que existem com a classe 'check'
// Identificar quando o 'marcar como lido' for clicado
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {
    button.addEventListener('click', event => {
        modal.open();        
    });
});

const cancelButton = document.querySelector('.button.cancel');
cancelButton.addEventListener('click', modal.close);