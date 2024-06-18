// let a = 'ABCDE';

// let adultHoodAge = 'abcd';

// if(a > adultHoodAge) {
//     console.log('A is an adult');
// } else if (a === adultHoodAge) {
//     console.log('A is exactly ' + adultHoodAge);
// } 
// else {
//     console.log('A is a minor ');
// }

// switch(a) {
//     case 'A':
//         console.log('Values is A')
//         break;
//     case 'B':
//         console.log('Values is B')
//         break;
//     case 'ABCD':
//         console.log('Values is ABCD')
//         break;
//     default:
//         console.log('Default condition \n ' + '"' + a + '"');
//         break;
// }


// let a = 10;
// let b = a;
// console the variable a, a times

// for (let b = a; b > 0; b = b - 1) {
//     console.log(a);
// }

// while (b > 0) {
//     console.log(a);
//     if (b < 2)  {
//         break;
//     }
//     b = b - 1;
//     console.log(b);
// }


/**
 
 ----> 6
*
**
***
****
*****
******
*******
******
*****
****
***
**
*

 */

// let a = 6;

// for (let b = 0; b <= a; b = b + 1) {
//     let star = '';
//     for (let c = 0; c < b; c++) {
//         star = star + '*'
//     }

//     console.log(star);
// }

// for (let b = a; b > 0; b = b - 1) {
//     let star;
//     for (let c = 0; c < b; c++) {
//         star = star + '*'
//     }

//     console.log(star);
// }


// function sumOfTwoNumber (number1 = 0, number2 = 0) {
//     console.log(number1, number2);
//     console.log(number1 + number2);
// }

// sumOfTwoNumber(10,20);

// let additionOfTwoNumbers =  () => {
//     console.log(arguments);
        // console.log(number1, number2);
        // console.log(number1 + number2);
// }

// let sumOfTwoNumbers = function () {
//     console.log(arguments);
            // console.log(number1, number2);
            // console.log(number1 + number2);
// }

// sumOfTwoNumbers(10,20);

// let key1 = 10;

// const obj = {
//     [key1]: 255,
//     'key2': 'abcd',
//     'arrayKey': [],
//     'objectKey': {
//         'abcd': 'xyz',
//         'xyz': 1234,
//     },
//     'additionOf2Numbers': function(number1, number2) {
//         console.log(number1 + number2);
//         // return number1 + number2;
//     }
// };

// let var1 = obj.additionOf2Numbers(1, 2);

// console.log(var1);

// console.log(typeof (() => {}));

    // let func1 = function () {}


// class animal {
//     constructor(name, animalCall) {
//         this.voiceSound = animalCall;
//         this.name = name;
//     }
//     legs = 4;

//     callVoice = () => {
//         return this.name + ' calls by ' + this.voiceSound;
//     }
// }


// const dog = new animal('dog','Barks');
// const cat = new animal('cat', 'Meow');

// console.log(dog.voiceSound);
// console.log(cat.voiceSound);

// console.log(dog.callVoice());
// console.log(cat.callVoice());

// dog.legs = 5;

// console.log(dog.legs);
// console.log(cat.legs);

// const arr1 = [1, 2, 'abcd'];

// const arr2 = [false, undefined, null];

// const arr3 = [];

// arr3[0] = 'xyz';

// arr3.push('lmno');

// console.log();


// const arr1 = [1, 2, 'abcd'];

// let arr2 = arr1;
// arr1[0] = 20;
// console.log(arr2);

// function a (var1, ...var2) {
//     console.log(var1);
//     console.log(var2);
// }

// a(1, 2, undefined, null, false);

let arr1 = ['data1', 'data2', 'data3'];

// console.log(arr1.map((elem) => elem + '*' ));
// console.log(arr1.filter((element, position, arr) => { return position === 1}));
// arr1.reduce();

// const tempFunction = elem => elem + '*';

// console.log(tempFunction('abcd'))

