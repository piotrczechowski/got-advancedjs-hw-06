// Task 1.1
let age: number = 50; 
let names: string = 'Max'; 
let toggle: boolean = true; 
let empty: null = null; 
let notInitialize: undefined; 
let callback: (a: number) => number = (a) => { return 100 + a };

// Task 1.2
let anything: any = -20; 
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


