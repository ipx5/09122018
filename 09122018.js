var arr1 =[1,2,3];
var newarr = arr1.map((i) => {
    return i+1;
});
console.log(arr1);
console.log(newarr);

var arr2 = [1,2,3];
var arr3= arr2.forEach((i) => 
    i+=1
);


var result = arr1.reduce((acc,val) => {
    return acc+=val
},0)
console.log(result);

console.log(arr1.reverce());
console.log('helo'.split('').join(''));

var str= 'hello';
console.log(str.split('').reverce().join(''));

console.log(parseInt('5'))
var num = 5;

console.log(typeof num);
console.log(typeof num.toString());

function reversInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed);
}
console.log(reversInt(5));

//(-90) == -9  

//(-51) == -15  












