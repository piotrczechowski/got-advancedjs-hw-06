// Task 1.1
let age: number = 50; 
let names: string = 'Max'; 
let toggle: boolean = true; 
let empty: null = null; 
let notInitialize: undefined; 
let callback: (a: number) => number = (a) => { return 100 + a };

// Task 1.2
let anything: any = 20; 
anything = 'Text'; 
anything = {};

// Task 1.3
let some: unknown; 
some = 'Text'; 

let str: string; 

if (typeof some === 'string') {
    str = some; 
} else {
    console.error('The variable "some" is not a string.');
}

// Task 1.4
let person: [string, number] = ['Max', 21];

// Task 1.5

//union type
let value: string | number; 
value ='Piotr';
value = 20;

//literal type
let payment: 'approved' | 'rejected';
payment = 'approved';
payment = 'rejected';

// Task 1.6
// Function with return type void 
function showMesage(message: string): void {
    console.log(message);
}

// Function with return type calculated two numbers
function calc(num1: number, num2: number): number {
    return num1 + num2;
}

// Function with custom error
function throwError(message: string): never {
    throw new Error(message);
}

// Task 1.7

function isWeekend(day: string): boolean {
    return day === 'saturday' || day === 'sunday';
}

// Task 1.8
type Gender = 'male' | 'female';

let myGender: Gender;
myGender = 'male'; // OK
// myGender2 = 'other'; // Error

// Task 1.9

interface Page {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: {
      createAt: Date;
      updateAt: Date;
    };
  }



const page1: Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
  };
  
  const page2: Page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  };
  
  