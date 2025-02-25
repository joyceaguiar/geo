// script.js

let clickCount = 0;

const messages = [
    "Você é o melhor amigo que alguém pode ter! 💙",
    "Nossa amizade significa o mundo para mim! 🫶",
    "Sempre posso contar com você, obrigado por tudo! 🙏",
    "Você é incrível e eu sou grata pela nossa amizade! 👊",
    "Só queria que você soubesse o quanto é especial! ✨",
    "Gado chorão da peste! ✨"
];

function showMessage() {
    const messageElement = document.getElementById("message");
    
    // Atualiza a mensagem a cada clique
    if (clickCount < messages.length) {
        messageElement.innerHTML = messages[clickCount];
        messageElement.style.display = "block";
        messageElement.style.animation = "fadeIn 2s ease-out"; // Animação suave
        clickCount++;
    } else {
        messageElement.innerHTML = "Você é uma pessoa incrível, e nossa amizade vai durar para sempre! 💙";
    }
}