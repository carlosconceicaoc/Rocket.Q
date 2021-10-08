import Modal from './modal.js'; // Importando modal

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

// Obter todos os botões que existem com a classe 'check'
// Identificar quando o 'marcar como lido' for clicado
const checkButtons = document.querySelectorAll('.actions a.check');
const deleteButtons = document.querySelectorAll('.actions a.delete');
const cancelButton = document.querySelector('.button.cancel');

checkButtons.forEach(button => {
    button.addEventListener('click', handlerClick);
});

deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => handlerClick(event, false));
});

cancelButton.addEventListener('click', modal.close);

function handlerClick(event, check = true) {
    const text = check ? 'Marcar como lida' : 'Excluir';

    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red');
    modal.open();
}