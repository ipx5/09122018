var arr=[1,2,3];
var result =arr.map(function(i,idx){return i+1;});

var result2=arr.map(incr)
function incr(i, idx) {
    return i+2;
    
}
console.log(result);
console.log(result2);
