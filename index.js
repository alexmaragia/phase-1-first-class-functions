// 1. Function that receives another function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // 2. Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }
  
  // 3. Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return () => {
      console.log("This is an anonymous function");
    };
  }
  