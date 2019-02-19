function makeCounter() {
    return function(){
        return function() {
            return 'hello'
        }
    }
    
}
var result = makeCounter();

console.log(result);
console.log(result()());

