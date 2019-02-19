function makeCounter() {
    var counter = 0;
    return function(){
        return counter++;
    }
    
}
var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());



var counter2 = makeCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
