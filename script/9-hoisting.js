function f(){
//   hoisting is lifting all declarations up to the top of the scope [scope might be a global scope and it might be a function scope ]
//   hoisting is working with var and does not wok with let 

 console.log(area); // referrene error
 console.log(name); // undefined 

 var area ='giza';
 let name = 'abdelrahman';

}

f();

