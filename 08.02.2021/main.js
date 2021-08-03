

// function customConcat(...numbers) {
//     let result=[];
//     for (let i = 0; i < numbers.length; i++) {
//         result.push(numbers[i]);
//     }
//     return result.flat();

// };

// console.log(customConcat(1,2,3,4,1,2,3,4));



//REVERSE

function customReverse(arr=[]) {
    let result=[];
    for (let i = arr.length-1; i >=0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(customReverse([1,2,3,4]));



// FOREACH



function forEach(arr = [], cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

const logger = (value, index, array) => console.log(value);
forEach([1, 2, 3, 4, 5], logger);

 
//FILTER



function Filter(arr = [], cb) {
    const result=[];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i],i,arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

const NumberBiggerThanThree = (a) => {
    return a>3;
};
console.log(Filter([1, 2, 3, 4, 5], NumberBiggerThanThree));



//MAP


function customMap(arr = [], cb) {
    const result=[];
    for (let i = 0; i < arr.length; i++) {
       result.push(cb(arr[i]));
    }
    return result;
}

const sumFiveNumber = (a) => {
    return a+5;
};
console.log(customMap([1, 2, 3, 4, 5] ,sumFiveNumber));




// SOME



function customSome(arr = [], cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return true;
        }
    }
    return false;
}


const divideByTwo = (a) => {
    return a % 3 === 0;
};
console.log(customSome([1, 2, 3, 4, 5] ,divideByTwo));



// EVERY


function customEvery(arr = [], cb) {
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i])) {
            return false;
        }
    }
    return true;
}

const divideByThree = (a) => {
    return a % 2 === 0;
};
console.log(customEvery([1, 2, 3, ,4, 5] ,divideByThree));



