function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {

        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}


function searchQuery(query) {
    console.log(`Buscando: ${query}`);
}

const searchDebounced = debounce(searchQuery, 300);


searchDebounced("o");
searchDebounced("ol");
searchDebounced("olá");
