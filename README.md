# P123-FE-JS-callbacks-array-methods

### Arrays
* https://www.w3schools.com/js/js_arrays.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

### Strings
* https://www.w3schools.com/js/js_string_methods.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


### Callback functions
* https://code-boxx.com/javascript-callback-functions/
* https://www.w3schools.com/js/js_callback.asp

### Task
Implement following array methods by yourself: filter, map, forEach, some, every, reverse. All of the functions should accept arrays as a parameter and a callback function, and as in array methods you must provide correct arguments to callbacks
Example reverse function
```js
  function reverse(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  }
  reverse([2,3,4,56,5,8]) // expected output is [8, 5, 56, 4, 3, 2]
