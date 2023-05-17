// This function accepts a variable number of arguments and returns an array of only the even numbers
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

// This function accepts a variable number of arguments and returns the smallest argument
const findMin = (...args) => Math.min(...args);

// This function accepts two objects and returns a new object which contains all the keys and values of the first and second object
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});


// This function accepts an array and a variable number of arguments and returns a new array with the original array values and all of additional arguments doubled
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];


// This function removes a random element in the items array and return a new array without that item
const removeRandom = (items) => {
    let idx = Math.floor(Math.random() * items.length); // get a random index
    return [...items.slice(0, idx), ...items.slice(idx + 1)]; // return a new array without the element at the random index
  };
  
  
// This function returns a new array with every item in array1 and array2
const extend = (array1, array2) => [...array1, ...array2];


// This function returns a new object with all the keys and values from the original object and a new key/value pair
const addKeyVal = (obj, key, val) => ({...obj, [key]: val});


// This function returns a new object with a key removed
const removeKey = (obj, key) => {
    let {[key]: _, ...newObj} = obj; // remove key from the object and assign the rest to newObj
    return newObj; // return newObj
  };
  

// This function combines two objects and returns a new object
const combine = (obj1, obj2) => ({...obj1, ...obj2});

  
// This function returns a new object with a modified key and value
const update = (obj, key, val) => ({...obj, [key]: val});

