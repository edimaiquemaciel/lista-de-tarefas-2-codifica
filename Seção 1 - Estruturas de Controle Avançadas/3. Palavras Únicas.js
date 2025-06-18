function extrairPalavrasUnicas(texto) {
    const palavras = texto.split(' ');
    
    const palavrasUnicas = [];
    
    for (let i = 0; i < palavras.length; i++) {
        const palavraAtual = palavras[i];
        let palavraExistente = false;
        
        for (let j = 0; j < palavrasUnicas.length; j++) {
            if (palavrasUnicas[j] === palavraAtual) {
                palavraExistente = true;
                break;
            }
        }
        
        if (!palavraExistente) {
            palavrasUnicas.push(palavraAtual);
        }
    }
    
    return palavrasUnicas;
}

const texto = "olá olá mundo mundo";
const resultado = extrairPalavrasUnicas(texto);
console.log(resultado);