function dataValida(dia, mes, ano) {

    if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
        return false;
    }
    
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }
    
    let diasMes;
    switch (mes) {
        case 2:
            if ((ano % 400 === 0) || (ano % 100 !== 0 && ano % 4 === 0)) {
                diasMes = 29;
            } else {
                diasMes = 28;
            }
            break;
        case 4: case 6: case 9: case 11:
            diasMes = 30;
            break;
        default:
            diasMes = 31;
    }
    
    return dia <= diasMes;
}



console.log(dataValida(31, 12, 2023));
console.log(dataValida(29, 2, 2020))