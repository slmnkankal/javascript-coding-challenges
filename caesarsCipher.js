// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    
    var replacer = [];
    for (var x = 0; x < str.length; x++)  { //loops through the given string
    var index = alphabet.indexOf(str[x]);  //sets the index of letter from the coded string
    if (cipher.charCodeAt(index) > 0) {  //check to see if the letter is alphanumeric
       replacer.push(String.fromCharCode(cipher.charCodeAt(index))); //add to array
    }
    //   else replacer.push(str[x]); //adds non-alphanumeric to the array
    }
    return replacer.join(""); //combines it all back together
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("SERR YB3,İIR?"));