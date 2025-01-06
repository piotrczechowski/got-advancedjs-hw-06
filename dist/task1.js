// Task 1.1
let age = 50;
let names = 'Max';
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => { return 100 + a; };
// Task 1.2
let anything = 20;
anything = 'Text';
anything = {};
// Task 1.3
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
else {
    console.error('The variable "some" is not a string.');
}
// Task 1.4
let person = ['Max', 21];
// Task 1.5
//union type
let value;
value = 'Piotr';
value = 20;
//literal type
let payment;
payment = 'approved';
payment = 'rejected';
// Task 1.6
// Function with return type void 
function showMesage(message) {
    console.log(message);
}
// Function with return type calculated two numbers
function calc(num1, num2) {
    return num1 + num2;
}
// Function with custom error
function throwError(message) {
    throw new Error(message);
}
// Task 1.7
function isWeekend(day) {
    return day === 'saturday' || day === 'sunday';
}
let myGender;
myGender = 'male'; // OK
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
