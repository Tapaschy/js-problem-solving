// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverse(str){
   let newstring="";

   for(let i=str.length-1;i>=0;i--){
      newstring+=str[i]
   }
   return newstring;
}

console.log(reverse('hello world'));

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function positivenumber(num) {
   let sum=0;
   for(let i=0;i<num.length;i++){
      if(num[i]>0){
         sum+=num[i];
      }
      }
      
   return sum;
}

let result= positivenumber( [2, -5, 10, -3, 7]);
console.log(result);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 



// 
// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function indices(array, target) {
   for (let i = 0; i < array.length - 1; i++) {
     for (let j = i + 1; j < array.length; j++) {
       if (array[i] + array[j] === target) {
         return [i, j];
       }
     }
   }
 
   
   return [];
 }
 
 const result2 = indices([1, 3, 6, 8, 11, 15], 9);
 console.log("Indices of two numbers:", result2);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation

 function calculator(num1, num2, operator) {
   if (operator === "+") {
     return num1 + num2;
   } else if (operator === "-") {
     return num1 - num2;
   } else if (operator === "*") {
     return num1 * num2;
   } else if (operator === "/") {
     return num1 / num2;
   } 
 }
 
 // Test cases
 console.log(calculator(5, 2, "+")); 

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
 function genPassword() {
   let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
   let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let numberChars = "0123456789";
   let specialChars = "!@#$%^&*()";
 
   let allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
   let passwordLength = 12;
   let password = "";
 
 
   password += getRandomChar(lowercaseChars);
   password += getRandomChar(uppercaseChars);
   password += getRandomChar(numberChars);
   password += getRandomChar(specialChars);
 
   
   for (let i = 4; i < passwordLength; i++) {
     password += getRandomChar(allChars);
   }
 
   return password;
 }
 
 function getRandomChar(characters) {
   let randomIndex = Math.floor(Math.random() * characters.length);
   return characters.charAt(randomIndex);
 }
 

 const password = genPassword();
 console.log(password);
 
 
 

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


function romanint(s) {

   const sym = { 
       'I': 1,
       'V': 5,
       'X': 10,
       'L': 50,
       'C': 100,
       'D': 500,
       'M': 1000
   }

   let result7 = 0;

   for (i=0; i < s.length; i++){
       const cur = sym[s[i]];
       const next = sym[s[i+1]];

       if (cur < next){
           result7 += next - cur 
           i++
       } else {
           result7 += cur
       }
   }

   return result7; 
};

console.log(romanint("MCMIV"));
