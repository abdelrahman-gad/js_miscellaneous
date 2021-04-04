let num = 0;

 async function increment(){
     num += await Promise.resolve(2);
     console.log(num);
}

increment(); // note that when increment() was invoked  num = 0

num += 1;
console.log(num);