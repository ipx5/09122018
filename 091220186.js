function makeCounter() {
    var counter = 0;
    return function(){
        return counter++;
    }
    
}
var counter = makeCounter();
console.log(counter());


var counter2 = makeCounter();
console.log(counter2());


var arr= ['Larry', 'Curly', 'Moe'];
console.log(arr.includes('Larry'));

function name(name) {
    var arr= ['Larry', 'Curly', 'Moe'];
    return arr.includes(name);
    
}

//IIFE
const isInclude = (function(){
    var arr= ['Larry', 'Curly', 'Moe'];
    return (name) => arr.includes(name);
})()

console.log(name('Larry'));
console.log(isInclude);