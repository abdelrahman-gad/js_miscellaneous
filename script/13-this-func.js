

let circle= {
    radius:10,
    circumfrence:function(){
        console.log(this); // this=radius
        return 2 * Math.PI * this.radius;
    },

    diameter(){
       console.log(this);// this=radius
       return 2 * this.radius;
    },
    area:()=>{
       console.log(this);  // this=window so  window.radius=undefined
       console.log(this.radius);
       return Math.PI * this.radius * this.radius;  // undefinde * Math.PI = NaN
    }
}

console.log(circle.circumfrence());
console.log(circle.diameter());
console.log(circle.area());


