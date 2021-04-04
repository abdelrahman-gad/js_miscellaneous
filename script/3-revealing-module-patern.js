// Design Pattern : an aproach to take when writing code to solve some problem 
//  that was used before 
// Design pattern categories [creational , behavioral , structural ]
// module is :self contained code 
// Revealing module design pattern is used to expose only specific parts of code
// Revealing module desingn pattern is "behavioral" design  pattern

// Q convert the below code into revealing design pattern ?

// let myModule={
//     data:[],
//     render: () => {

//     },
//     add: () => {

//     },
//     remove: () => {

//     }
// }

// Answer :
// 
let myModule = (function(){
    let _data=[];
    let _render = ( param ) => {
       console.log(param);
    //    listen  to some events and use the methods [_add,_remove]
    };
    let _add = () => {
        _data.push('asdf');
    };
    let _remove = () => {
        _data.pop();
    };
    return{
        render:_render
    }
})();

// exposing variables and functions only on demand


myModule.render('hi');
// maModule._data() xxxxxxx-fail-x
// maModule._add()  xxxxxxx-fail-x
// maModule._remove() xxxxxxx-fail-x





