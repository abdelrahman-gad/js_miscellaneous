console.log('closures');


function f2(){
    console.log('set Time out with var');
    for(var i = 0; i<=3; i++){
        console.log('loop : '+ i);
        setTimeout(()=>{
            console.log(i);
        });
    }
}
f2();


function f1(){
    console.log('set Time out with let');
  
    for(let i = 0; i<=3; i++){
        console.log('loop : ' + i);
        setTimeout(()=>{
            console.log(i);
        });
    }
}
f1();