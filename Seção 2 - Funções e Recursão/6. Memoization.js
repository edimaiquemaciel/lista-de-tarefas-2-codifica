function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {

        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn.apply(this, args);
        cache.set(key, result);
        
        return result;
    };
}


function calcular(a, b) {
    console.log('Calculando...');
    return a * b;
}


const calcularMemoizado = memoize(calcular);

console.log(calcularMemoizado(2, 3));
console.log(calcularMemoizado(2, 3));
console.log(calcularMemoizado(4, 5));