function makeCounter() {
    return function(i,idx){
        return i+1;
        }
    }
var arr=[1,2,3];

var incrementer = makeCounter();
var result = arr.map(incrementer);

console.log(result);
console.log(incrementer(4));

