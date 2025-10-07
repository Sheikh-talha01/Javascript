
// push() and pop() are array methods used to add and remove elements at the end of an array.

//  push() Method
//       Adds one or more elements to the end of an array.

let fruits = ["Apple", "Banana"];

// Adding elements using push()
fruits.push("Mango");
fruits.push("Orange", "Grapes");

console.log(fruits);  
// Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]



//¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

// pop() Method
   //Removes the last element from an array.

let numbers = [10, 20, 30, 40];
// Removing elements using pop()

let lastElement = numbers.pop();

console.log(numbers);      
// Output: [10, 20, 30]

console.log(lastElement);  
// Output: 40 (the element removed)

numbers.pop();  
console.log(numbers);      
// Output: [10, 20]



//¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬

// Using push() and pop() Together

let stack = [];

// Push elements (add to stack)
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);  
// Output: [1, 2, 3]

// Pop elements (remove from stack)
console.log(stack.pop());  // Output: 3
console.log(stack.pop());  // Output: 2

console.log(stack);  
// Output: [1]

