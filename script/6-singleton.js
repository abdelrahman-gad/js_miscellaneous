// singleton is a creational design pattern 
// used to create an object that every time you create an instance from it you get a reference to the same object

 let obj = (function() {
      let objInstance ;//private variable 
      let create = function(){ //private function to create methods 
      let _isRunning = false;
      let stop=function(){
          _isRunning=false;
      }
      let start=function(){
        _isRunning=true;
      }
      let currentState=function(){
          return _isRunning;
      }
      return {
          start,
          stop,
          currentState
       }
     }
     return { //  return only vars in this object
       getInstance:function(){
          if(!objInstance){ // if there is no instantiotion create one 
            objInstance = create();
          } 
          return objInstance;  // return an instance of obj
       }
     }
 })();

 let obj1 = obj.getInstance();
 let obj2 =obj.getInstance();
 console.log(obj1);
//  because obj1 and obj2 both return the same object so any change at any one of them will  be the same as the another
 obj1.start();
 console.log(obj1 === obj2);
 console.log(obj1.currentState()); 
 console.log(obj2.currentState());