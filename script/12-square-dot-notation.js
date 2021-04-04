let sam ={
  castiel:"mary"
}

let dean={ 
   john:"crowley",
   mary:"chunck"
}

console.log(dean[sam.castiel]); // = dean["marry"]  = 'chunk'
console.log(dean.sam.castiel);  // fail   
console.log(dean[sam['castiel']]);  // = dean["marry"]  = 'chunk'
console.log(dean[sam[castiel]]);  // fail