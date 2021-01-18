//alert("Hello World!");
function showMessage(message){
    document.getElementById('message').textContent=message;
}
//value will be the most recent value
let welcome='Hello',
    price=898,
    discount=true;

    //value will be constant 
const number=40;

/*with this var keyword, eroor will not be displayed if 
variable was declared aftr showMessage and if we print the value 
it is undefined so we use let keyword
*/
var total=39;
//prescicion is brackets,mul,div,rem,add,sub
let sum=3*2+1/4%6;
let message="Hello \"world\"";
let display=`Hello ${sum}`;
let mess='Hello';
mess=mess+' World';
mess=mess.toLowerCase();
mess=mess.substring(1);
let num=Number.parseFloat("A123.12");
let person={
    firstName:'Mohan',
    lastName:'Babu'
};
let cost=20;
if(cost===20){
    showMessage('true')
}
// showMessage(welcome);
// showMessage(price);
// showMessage(discount);
//showMessage(typeof discount);
//showMessage(message);
//showMessage(person.firstName);
if ((1.1+1.3).toFixed(2)==2.4)
{
    showMessage('true');
}


/*if === is present then it will be false, 
if == is present  then it will be true 
so in javascript while comparing two different datatype values
this will not work as same output so we use === in javascript*/
if(1  === "1")
{
    showMessage('true');
}
else{
showMessage('false');
}

//ternary operator
let money=20;
(money>10) ? showMessage('true'): showMessage('false');
console.log("hello");

//block  of code
if(true){
    let value='yes';//if we change 'let'or 'const' to 'var' then it will be succesfull
    showMessage(value);
}//the value declared in the block cannot be accessed by outside of the block.
//console.log(value);

//for loop
for(i=0;i<3;i++){//if i-- is present then it will be infinite loop
    //console.log(i);
}

//while loop
let j=4;
while(j>0){
    //console.log(j);
    j--;
}

//do while loop
let k=5;
do{
    //console.log(k);// in this loop the value will be execute once
    k--;
}while(k>0);

function changePercentoff(percentage)
{
    document.getElementById('percent-off').textContent=percentage+ "% OFF";
}