// Capstone Project II
// In this project I will be creating a Ceasar Cypher program
// The cypher will take letter e.g A and move it down 15 places to get e.g P
// In order to do this we need to create a function
// First we create the function and assign the variable output and use the upper and lowercase method
// Then we use the string.length method to make sure the function runs the length of th string
// we use the charcodeat method to get he Ascii Value of a letter and the run an if statement to find the value
// Then we use the fromcharcode method to convert the ASCII to a string
// Then we add 15 so the letter will move 15 places to the right
// an else statement is used inorder to cycle the letters
// Return output

// First we Create the function called cypher and define the varible output "";

function cypher(str) {
  let output = "";
  // Then I create a for loop to run the length string
  // Then we define a var called wordToNum that takes the string and uses the charCodeAt(i) to find the asccii value of the string

  for (let i = 0; i < str.length; i++) {
    let wordToNum = str.charCodeAt(i);
    let shift = wordToNum + 15;
    // We then define the var shift that we will use to cycle through the alphabet
    // So we will create 3 if statements to account for the asccii values of uppercase,lowercase and numbers.
    // so the first if statement will account for uppercase values

    if (wordToNum >= 65 && wordToNum <= 90) {
      if (shift > 90) {
        shift = 64 + (shift - 90);
      }
      // The second one for lowercase values
    } else if (wordToNum >= 97 && wordToNum <= 122) {
      if (shift > 122) {
        shift = 96 + (shift - 122);
      }
    } else {
      shift = wordToNum;
    }

    output += String.fromCharCode(shift);
  }
  return output;
}
// Finally we output the string

console.log(cypher("12345"));
