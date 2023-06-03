/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let count = 0;
    let first = 0;
    let second = 1;
    for(;;count++) {
        if(count === 0) yield first;
        if(count === 1) yield second;
        const aux = first + second;
        first = second;
        second = aux;
        yield aux;
        
    } 
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */