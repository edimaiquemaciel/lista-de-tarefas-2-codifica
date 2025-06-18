function fatorial(n) {

    if (n < 0) {
        throw new Error("O número é negativo. Tente novamente");
    }

    if (n === 0) {
        return 1;
    }
    

    return n * fatorial(n - 1);
}



try {
    console.log("Primeiro exemplo: ", fatorial(0));
    console.log("Segundo exemplo: ", fatorial(5));
    console.log("Terceiro exemplo: ", fatorial(10));
    console.log(fatorial(-3));
} catch (e) {
    console.error(e.message);
}