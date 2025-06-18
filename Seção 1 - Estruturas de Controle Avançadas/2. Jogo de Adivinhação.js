const prompt = require("prompt-sync")()

function jogoAdivinhacao() {

    const numAleatorio = Math.floor(Math.random() * 100) + 1;
    let chute;
    let tentativas = 0;
    
    console.log("Olá, seja bem-vindo ao Jogo de Adivinhação!");
    console.log("Tente adivinhar o número entre 1 e 100.");
    console.log("Vamos lá, pode começar!");
    
    
    while (true) {
        chute = parseInt(prompt("Digite seu chute:"));
        tentativas++;
        
        if (isNaN(chute) || chute < 1 || chute > 100) {
            console.log("Por favor, digite um número válido entre 1 e 100.");
            continue;
        }
        
        if (chute === numAleatorio) {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas!`);
            break;
        }
        
        else if (chute < numAleatorio) {
            console.log("Mais alto... Tente novamente!");
        }
        else {
            console.log("Mais baixo... Tente novamente!");
        }
    }
}

 jogoAdivinhacao();