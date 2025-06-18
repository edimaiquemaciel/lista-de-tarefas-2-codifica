function agruparVendasPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {

        if (acumulador[venda.cliente]) {
            acumulador[venda.cliente] += venda.total;
        } 

        else {
            acumulador[venda.cliente] = venda.total;
        }
        return acumulador;
    }, {});
}

const vendasClientes = [
    { cliente: 'Fabricio', total: 200 },
    { cliente: 'Joao', total: 85 },
    { cliente: 'Julia', total: 20 },
    { cliente: 'Laura', total: 455 }
];

const totalPorCliente = agruparVendasPorCliente(vendasClientes);
console.log(totalPorCliente);
