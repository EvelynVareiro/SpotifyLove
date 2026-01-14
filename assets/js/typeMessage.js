const textElement = document.querySelector('.message h3');
const text = textElement.textContent;

let index = 0;
let isDeleting = false;

textElement.textContent = '';

function typeLoop() {
    if (!isDeleting && index <= text.length) {
        // digitando
        textElement.textContent = text.substring(0, index);
        index++;
        setTimeout(typeLoop, 90);

    } else if (isDeleting && index >= 0) {
        // apagando
        textElement.textContent = text.substring(0, index);
        index--;
        setTimeout(typeLoop, 50);

    } else {
        // troca o estado (digitar <-> apagar)
        isDeleting = !isDeleting;
        setTimeout(typeLoop, 1000); // pausa entre ações
    }
}

typeLoop();
