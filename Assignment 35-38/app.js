// Question 1

// function currentDate() {
//     var date = new Date();
//     document.write(date);
// }
// currentDate();


// Question 2

// function names() {
//     var fName = prompt("Enter Your First Name");
//     var lName = prompt("Enter Your Last Name");
//     alert("Hello " + fName + " " + lName + "!")
// }
// names();

// Question 3

// function numbers() {
//     var num1 = +prompt("Enter any Number");
//     var num2 = +prompt("Enter any number again");
//     var sum = num1 + num2;
//     return sum;
// }
// var result = numbers();
// alert(result);


// Question 4

// function operation(num1, num2, operator) {
//     var result;
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         return "Invalid operator";
//     }
//     document.write("The result is: " + result);
//     return result;
// }
// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /):");
// var result = operation(number1, number2, operator);  


// Question 5

// function squaredNum(number) {
//     var square = number * number;
//     return square;
// }
// var number = +prompt("Enter any number");
// var result = squaredNum(number);
// document.write("Square of " + number + " is: " + result);


// Question 6

// function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     } else {
//       var result = 1;
//       for (var i = 2; i <= number; i++) {
//         result *= i;
//       }
//       return result;
//     }
// }
// var number = +prompt("Enter any Number");
// var result = factorial(number);
// document.write("The factorial of " + number + " is: " + result);
    

// Question 7

// function counting(start, end) {
//     if (start <= end) {
//       for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//       }
//     } else {
//       for (var i = start; i >= end; i--) {
//         document.write(i + "<br>");
//       }
//     }
// }
// var startNumber = +prompt("Enter the start number:");
// var endNumber = +prompt("Enter the end number:");
// counting(startNumber, endNumber);


// Question 8




// Question 9

// function getRectArea(width, height) {
//     if (width > 0 && height > 0) {
//       return width * height;
//     }
//     return 0;
//   }
// document.write(getRectArea(5, 8));


// Question 10

// function palindrome(str) {
//     var replacedStr = str.replace(/[\W_]/g, "").toLowerCase();
//     var reversedStr = "";
//     for (var i = replacedStr.length - 1; i >= 0; i--) {
//       reversedStr += replacedStr[i];
//     }
//     var resultMessage;
//     if (replacedStr === reversedStr) {
//       resultMessage = "The string " + str + "\" is a palindrome.";
//     } else {
//       resultMessage = "The string \"" + str + "\" is not a palindrome.";
//     }
//     document.write(resultMessage);
// }
// var input = prompt("Enter a string:");
// palindrome(input);


// Question 11

// function capitalization(str) {
//     var words = str.split(" ");
//     var capitalizedWords = [];
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//       capitalizedWords.push(capitalizedWord);
//     }
//     var result = capitalizedWords.join(" ");
//     return result;
// }
// var inputString = "the quick brown fox";
// var capitalizedStr = capitalization(inputString);
// document.write("EXAMPLE STRING : " + inputString + "<br>");
// document.write("EXPECTED OUTPUT : " + capitalizedStr);
  

// Question 12

// function word(str) {
//     var words = str.split(" ");
//     var longestWord = "";
//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
//     return longestWord;
// }
// var inputString = "Web Development Tutorial";
// var longestWord = word(inputString);
// document.write("EXAMPLE STRING : " + inputString + "<br>")
// document.write("EXPECTED OUTPUT : " + longestWord);
  

// Question 13

// function occurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
//     return count;
// }
// var inputString = "JSResourceS.com";
// var inputLetter = "o";
// var occurrences = occurrences(inputString, inputLetter);
// document.write("Sample arguments : " + inputString + "<br>");
// document.write("The letter \'" + inputLetter + "\' occurs " + occurrences + " times in the string.");


// Question 14

// function calcCircumference(radius) {
//     var circumference = (2 * Math.PI * radius).toFixed(2);
//     document.write("The circumference of circle is: " + circumference + "<br>");
//   }
//   function calcArea(radius) {
//     var area = (Math.PI * radius * radius).toFixed(2);
//     document.write("The area of circle is: " + area);
//   }
// var radius = 5;
// calcCircumference(radius);
// calcArea(radius);