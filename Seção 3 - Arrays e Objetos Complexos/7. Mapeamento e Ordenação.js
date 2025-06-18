function ordenarNomesPorPreco(produtos) {

    const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
    
    return produtosOrdenados.map(produto => produto.nome);
}

const produtos = [
    { nome: 'Máquina de Lavar', preco: 2500 },
    { nome: 'TV 50`', preco: 3200 },
    { nome: 'Aspirador de pó', preco: 320 },
    { nome: 'Monitor', preco: 900 }
];

const nomesOrdenados = ordenarNomesPorPreco(produtos);
console.log(nomesOrdenados);