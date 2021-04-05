





let isInt = (num)=>{
        // assert that the passed number is numerical
 return (                      !isNaN(num)                 &&( parseInt(num) ===num )                 );
}


console.log(isInt(3));
console.log(isInt(3.3));
console.log(isInt(3));
