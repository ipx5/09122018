function testme() {
    return 'hello';
    
}

testme.one=1;
testme.two=2;

console.log(testme);
console.log(testme.one);



function makeCounter() {
    function counter(){
        return counter.currentCounter++;
        
    }
    counter.currentCounter = 1;
    return counter;
}

//написать функцию makecounter которая воздращает обьект getnext функцию 
// которая имеет set умеет устанавливать значение счетчика
//reset которая 

