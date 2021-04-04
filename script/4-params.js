//console.log('params');
// determine if the passed parameter are equel to the expected
let f = function(a , b ){
    
    console.log(arguments.length); // length of params passed during the invocation of function
    console.log(f.length);         // length of params if func while the creation  of function
  if(arguments.length === f.length){
      console.log('match');
  }else{
      console.log('does not match');
  }
}

f(1);
f(1,2);
f(1,3,5);


