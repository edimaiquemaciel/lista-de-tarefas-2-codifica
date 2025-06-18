function paresParaObjeto(pares) {
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor;
        return obj;
    }, {});
}

const pares = [
    ['nome', 'Thiago'],
    ['sobrenome', "Maciel"],
    ['idade', 32],
    ['cidade', 'Fortaleza']
];

const objeto = paresParaObjeto(pares);
console.log(objeto);


console.log(`
    ________________________________________________________
    `);


function objetoParaPares(obj) {
    return Object.entries(obj);
}

const pessoa = {
    nome: 'Thiago',
    idade: 32,
    profissao: 'Desenvolvedor FullStack'
};

const arrayPares = objetoParaPares(pessoa);
console.log(arrayPares);