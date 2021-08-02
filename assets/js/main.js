// let num = 5;
// let num2 = num;

// num = 100;

// console.log("num", num);
// console.log("num2", num2);

// const obj = {
//     firstname: 'aqil'
// };

// const obj2 = obj;

// obj.firstname = 'samir';

// console.log('from obj', obj);
// console.log('from obj2', obj2);

// function myFunc(obj) {
//     obj.firstname = "samir";
// }

// const obj = {
//     firstname: "aqil"
// }

// myFunc(obj);
// console.log(obj);

// function myFunc(str) {
//     str = "hello world"
// }

// const string = "hello hello";
// myFunc(string);
// console.log(string);

// [30, 70, 5, 100] -> 100;

// [1,2,3,4,5]
// [2,4,6,8,10]
// function multiplyByTwoNumbersInArray(array = []) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         const multiplied = array[i] * 2;
//         result.push(multiplied);
//         // array[i] = array[i] * 2
//         // result.push(array[i] * 2);
//     }
//     return result;
//     // return array;
// }
// const numbers = [1, 2, 3, 4, 5];
// const result = multiplyByTwoNumbersInArray(numbers);
// console.log("multiplyByTwoNumbersInArray", result)

// function sumWithFiveNumbersInArray(array = []) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         const summed = array[i] + 5;
//         result.push(summed);
//     }
//     return result;
// }

// const result2 = sumWithFiveNumbersInArray(numbers);
// console.log("sumWithFiveNumbersInArray", result2);


// function divideByTwoNumbersInArray(array = []) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         const divided = array[i] / 2;
//         result.push(divided);
//     }
//     return result;
// }

// const result3 = divideByTwoNumbersInArray(numbers);
// console.log("divideByTwoNumbersInArray", result3);


// function loopThroughArrayAndDoSomething(array = [], cb) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         const modifiedVersion = cb(array[i]);
//         result.push(modifiedVersion);
//     }
//     return result;
// }

// const multiplyByTwo = a => a * 2;
// const divideByFive = a => a / 5;
// const sumWithFive = a => a + 5;
// function divideByFour(a) {
//     return a / 4;
// }

// const numbers = [1, 2, 3, 4, 5];

// const result4 = loopThroughArrayAndDoSomething(numbers, multiplyByTwo);
// const result5 = loopThroughArrayAndDoSomething(numbers, divideByFive);
// const result6 = loopThroughArrayAndDoSomething(numbers, sumWithFive);
// const result7 = loopThroughArrayAndDoSomething(numbers, divideByFour);

// const numbers = [4, 6, 13, 22, 9, 7, 1, 2, 3];
// const userNames = ["Zakir", "Babek", "Asif", "Qubad", "Cavidan", "Dashdemir", "Aflatun", "Chinara", "Yusif"];
// const arrays = [1, 2, 3, [1, 2, 3, 4], ["arr", "arr2", [1, 2, 3, [1, 2, 3]]]];

// const users = [
//     {
//         f: 'Samir',
//         l: 'Dadash-zade',
//         age: 29
//     },
//     {
//         f: 'Agil',
//         l: 'Atakishiyev',
//         age: 22
//     },
//     {
//         f: 'Ulvi',
//         l: 'Asad-zade',
//         age: 29
//     }
// ]

// const result = numbers.join(" ");
// const result = numbers.pop();
// typeof result;
// const result = numbers.forEach(function (number) {
//     console.log(number);
//     // return undefined
// });
// const result = numbers.map(number => {
//     number * 2;
//     return undefined
// });

// const result2 = numbers.map(number => {
//     return number * 5;
// });

// const multiplyByTwo = (number, index, array) => {
//     return number * 2;
// }
// const result2 = numbers.map(multiplyByTwo);

// console.log(result);
// console.log(result2);
// console.log(numbers);

// const result = numbers.some((number) => {
//     return number % 2 === 0;
// });
// console.log(result);

// const result = numbers.filter((number) => number % 3 === 0 && number % 2 === 0);
// const result = numbers.find((number, index, array) => number === 6);
// const result = users.find(user => user.age === 29);
// const result = numbers.sort((a, b) => b - a);
// first argument included - second argument not included;
// console.log(arrays.flat(Infinity));
// console.log(arrays);


// function concat() { } //

// concat([1, 2, 3, 4], [1, 2, 3]) // [1,2,3,4,1,2,3]
// concat([1, 2, 3], 1, 2, 3, 4);
// concat(1, 2, 3, [1, 2, 3, 4]);

// function flat(array) {
//     return [];
// }

// flat([1, 2, 3, [1, 2, 3, [1, 2, 3]]]); // [1,2,3,1,2,3,1,2,3]

/*
    An ATM allows a customer to withdraw a maximum of $500 per day. If a customer withdraws more than $300, the service charge is 4% of the amount over $300. If the customer does not have sufficient money in the account, the ATM informs the customer about the insufficient funds and gives the customer the option to withdraw the money for a service charge of $25.00. If there is no money in the account or if the account balance is negative, the ATM does not allow the customer to withdraw any money. If the amount to be withdrawn is greater than $500, the ATM informs the customer about the maximum amount that can be withdrawn. Write an algorithm that allows the customer to enter the amount to be withdrawn. The algorithm then checks the total amount in the account, dispenses the money to the customer, and debits the account by the amount withdrawn and the service charges, if any.
*/

// function forEach(arr = [], cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr);
//     }
// }

// const logger = (value, index, array) => console.log(value);
// forEach([1, 2, 3, 4, 5], logger);

const user = {
    firstname: 'Agil',
    lastname: 'Atakishiyev',
    balance: 400,
    currency: 'USD',
    userLimitations: {
        maxAmountPerDay: 500,
        minimumAmountForNotCharging: 300,
        creditCharge: 25,
        chargePercentageForOverMinimumAmount: 0.04
    },
    todayWithdrawnAmount: 0,
    withDraw: function (amount = 0) {
        if (this.balance <= 0) {
            alert('You can not withdraw until you increase your balance');
            return;
        }

        if (amount > this.balance) {
            if (window.confirm(`You dont have sufficient balance, but we can give you credit for ${amount}. You should pay back ${Math.abs(this.balance - amount - this.userLimitations.creditCharge)}`)) {
                const decreaseAmount = this.balance - amount - 25;
                this.balance = decreaseAmount;
                console.log(Math.abs(decreaseAmount));
                this.todayWithdrawnAmount += amount + Math.abs(decreaseAmount);
                alert(`Balance decreased by amount of ${decreaseAmount}`);
            } else {
                alert('Bye bye user');
            }
            return;
        }

        if (amount >= this.userLimitations.maxAmountPerDay) {
            const newAmount = parseInt(prompt('Dear user you overlimited today'));
            user.withDraw(newAmount);
            return;
        }

        if (amount < this.balance && (amount + this.todayWithdrawnAmount) <= this.userLimitations.maxAmountPerDay) {
            let decreaseAmount = amount;
            if (amount >= this.userLimitations.minimumAmountForNotCharging) {
                decreaseAmount = amount + (amount - this.userLimitations.minimumAmountForNotCharging) * this.userLimitations.chargePercentageForOverMinimumAmount;
            }
            this.balance = this.balance - decreaseAmount;
            this.todayWithdrawnAmount += decreaseAmount;
            alert(`Balance decreased by amount of ${decreaseAmount}`);
            return;
        }
    }
};


user.withDraw(200);
user.withDraw(250);
console.log(user);