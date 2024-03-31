//
// The receivesAFunction function
const receivesAFunction = (callback) => {
 
  callback();
};

// The returnsANamedFunction function
const returnsANamedFunction = () => {
  
  const namedFunction = function namedFunction() {
    console.log("This is a named function");
  };
  
  return namedFunction;
};

// The returnsAnAnonymousFunction function
const returnsAnAnonymousFunction = () => {
  // Return an anonymous function
  return function() {
    console.log("This is an anonymous function");
  };
};


receivesAFunction(() => {
  console.log("Callback function called");
});

const namedFunc = returnsANamedFunction();
namedFunc();

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc();
