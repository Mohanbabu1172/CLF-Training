// let myFunction = function logFunction(message,mes) {
//     console.log(message,mes);
// }
// myFunction('Hello', 'World');

// function getSecretCode(value) {
//     let code=value*42;
//     return code;
// }
// showMessage( getSecretCode(2));
//functions can access the value which is defined outside the block
//but not access the value which is present inside the block

//nested function block
let key =42;
function getSecretCode(value) {
    let keyGenerator=function(){
        let key=12;
        console.log('in Key generator: ', key);
        return key;
    }
    let code= value*keyGenerator();
    console.log('In getSecretcode: ', key);
    return code;
}

let secretcode=getSecretCode(2);
showMessage(secretcode);

changePercentoff(30);





let person1={
    name:'mohan',
    age:22,
    partTime: false,
}
// person1.age=23;
// person1['age']=24;
console.log(person1.age);

let person2={
    name:'mohan',
    age:22,
    partTime: false,
    showInfo: function(realAge) {
        showMessage(this.name+ ' is ' + realAge);//if we give only name then it shows some bootsrap code
    }
};
person2.showInfo(21);

let person3 ={
    name:'mohan',
    age:22,
    partTime: false
};
function incrementAge(p) {
    p.age++;
}
incrementAge(person3);
showMessage(person3.age);

// for the day and date
let now=new Date();
showMessage(now.toDateString());

//absolute values
showMessage(Math.abs(-34));
showMessage(Math.random());

let s='Hello';
showMessage(s.charAt(0));
showMessage(message);
//stylizing DOM
const header=document.getElementById('message');
header.style.color='red';
header.style.fontWeight='800';


//detecting button clicks
// const button=document.getElementById('seereview');
// button.addEventListener('click', function(){
//     console.log('click');
// });

const button=document.getElementById('seereview');
button.addEventListener('click', function(){
    const review=document.getElementById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent="Close Review";
    }
    
    else{
        review.classList.add('d-none');
        button.textContent="See Review";

    }
});


//Arrays
const values=['a','b','c','d'];
values[1]='bbb';
console.log(values);//a b c d displays with indexes
console.log(typeof values);//object
console.log(Array.isArray(values));//true
console.log(Array.of(values));//Returns a new array from a set of elements.
console.log(values[0]);//a
console.log(values[8]);//undefined
console.log(values[1]);//bbb

values.push('e');
console.log(values);//a,bbb,c,d,e

last=values.pop();
console.log(last);//e
console.log(values);//a,bbb,c,d

shifting=values.shift();
console.log(shifting);//a

console.log(values);//bbb,c,d

values.unshift('a');
console.log(values);//a,bbb,c,d

//slice
const newValues=values.slice(1,3);//in slice 1 is for index and 3 is for the element in the last
console.log(newValues);//bbb, c

//splice
//for deleting
values.splice(1,1);//a,c,d  first 1 is for index and second 1 is for count to delete the values.
console.log(values);
//for inserting
values.splice(1, 0, 'b');//a,b,c,d (1) is for index value 0 is for delete count third element is to insert in the place of index.
console.log(values);

//Array searching and looping
//indexOf
console.log(values.indexOf('b'));//1
console.log(values.indexOf('h'));//-1 It will not be undifined in arrays

//filter
const set=values.filter(function(item){
    return item>'b';
});
console.log(set);//c d

values.splice(1, 0, 'bbb');//a,bbb,b,c,d

//find
const set1=values.find(function(item){
    return item.length>1;
});
console.log(set1);//bbb if there is cccccc then it also shows bbb because bbbstands first in the array

//forEach
values.forEach(function(item){
    console.log(item);//displays output line by line
});

//accessing DOM
const containers=
document.getElementsByClassName('container');
console.log(containers);

//scoping and hoisting
//Global scope- If we declare the value outside the function that value can be used in anyplace.
//Function scope - If we declare a variable inside the function that cannot be accessed by out side of the function
//Hoisting is good for functions but in declaring variable let and const should be used for better use.
//undeclared variables and strict mode
'use strict';//for strict mode specify this in the function or in global scope
