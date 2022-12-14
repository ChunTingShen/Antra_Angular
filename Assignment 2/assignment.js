// 1. Write a JavaScript function that reverse a number.

function reverseNumber(num){    
    let new_arr = num.toString().split("").reverse().join("");
    return parseFloat(new_arr) * Math.sign(num);
     
}

console.log(reverseNumber(32243));
console.log(reverseNumber(-9527));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 

function checkPalindrome(str){
    if (!str) return true;
    str = str.replace(" ", "")
    str = str.toLowerCase();
    
    let left = 0;
    let right = str.length - 1;

    while (left < right){
        if (str[left] == str[right]){
            left ++;
            right --;
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome('madam'));
console.log(checkPalindrome('nurses run'));


// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 

function generateAllCombinations(str){
    //let str_arr = [];
    let str_arr = new Set();
    for (let i = 0; i < str.length; i++){
        for (let j = i + 1; j < str.length + 1; j++){
            str_arr.add(str.slice(i, j));
        }
    }
    return str_arr;
}

console.log(generateAllCombinations('ddd'));
console.log(generateAllCombinations('dog'));


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function alphaOrder(str){
    return str.split("").sort().join("");
}

console.log(alphaOrder("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function upperFirstLetter(str){
    str = str.split(" ");
    for (let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    str = str.join(" ");
    return str;
}


console.log(upperFirstLetter('the quick brown fox'));


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function findLongestWord(str){
    str = str.split(" ");
    let longestword = "";
    for (let i = 0; i < str.length; i++){
        if (str[i].length > longestword.length){
            longestword = str[i];
        }
    }
    return longestword;
}

console.log(findLongestWord('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function countVowels(str){

    const count = str.match(/[aeiou]/gi).length;
    return count;

}

console.log(countVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function isPrime(num){
    if (num == 1) return true;
    let flag = 0;
    for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(1223));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function argumentType(input){
    return typeof(input);
}

console.log(argumentType(1234));
console.log(argumentType('abcd'));
console.log(argumentType());
console.log(argumentType(true));
console.log(argumentType(new Object));
console.log(argumentType(()=> {}));



// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function buildIdentityMatrix(num){
    let res = [];

    for (let i = 0; i < num; i++){
        if (!res[i]){
            res[i] = []; // initiate new array
        }
        for (let j = 0; j < num; j++){
            if (i === j){
                res[i][j] = 1;
            } else {
                res[i][j] = 0;
            }
        }
    }
    return res;
}

console.log(buildIdentityMatrix(5));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

function findSecondNumber(arr){
    arr = arr.sort(function(x,y) {return x - y});
    return [arr[1], arr[arr.length-2]];
}

console.log(findSecondNumber([-10,1,2,3,47,59,6]));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

function isPerfectNum(num){
    let divisors = [];

    for (let i = 0; i< (num/2)+1; i++){
        if (num % i == 0){
            divisors.push(i);
        }
    }
    const sum = divisors.reduce((partialsum, a) => partialsum + a, 0);
    return sum == num;
}

console.log(isPerfectNum(496));

// 13. Write a JavaScript function to compute the factors of a positive integer. 

function findFactors(num){
    let divisors = [];

    for (let i = 0; i< (num/2)+1; i++){
        if (num % i == 0){
            divisors.push(i);
        }
    }
    return divisors;
}

console.log(findFactors(495));

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function amountTocoins(num, arr){
    arr = arr.sort((a,b) => a + b );
    let result = [];
    let lowest = arr[arr.length-1];
    let index = 0;
    if (num === 0) return [];

    if (num >= arr[0]){
        left = num - arr[0];
        return [arr[0]].concat(amountTocoins(left, arr));
    } else {
        arr.shift();
        return amountTocoins(num, arr);
    }
    

}

console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result. 

function exponent(b, n) {
    if (n === 0){
        return 1;
    }
    let res = b;
    let neg = 1;
    if (n < 0){
        neg = -1;
        n = n * -1;
    }
    while (n > 1){
        res = res * b;
        n --;
    }

    if (neg === 1) {
        return res;
    } else {
        return 1/res;
    }

    
}

console.log(exponent(3, -5));

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function findUniqueChars(str){
    let result = "";
    for (let i = 0; i < str.length; i++){
        if (result.includes(str[i]) === false){
            result += str[i];
        }
    }
    return result;
}

console.log(findUniqueChars("thequickbrownfoxjumpsoverthelazydog"))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function countOccurrences(str){
    const counts = new Map();

    for (const ch of str){
        let first = counts.get(ch);
        if (first == undefined){
            counts.set(ch, 1);
        } else {
            counts.set(ch, first + 1);
        }
    }

    for (const [ch] of counts){
        console.log(`${ch} : ${counts.get(ch)}`);
    }
}

countOccurrences('wqeqweqwee');




// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.

function abinarySearch(target, arr){
    let left = 0;
    let right = arr.length;

    while (left <= right){
        let med = Math.floor((left + right)/2);
        
        if (target == arr[med]){
            return med;
        }

        else if (target > arr[med]){
            left = med + 1;
        } 
        
        else {
            right = med - 1;
        }
    }
}


console.log(abinarySearch(15, [11,12,13,14,15,16]));



// 19. Write a JavaScript function that returns array elements larger than a number. 

function isTooBig(num, arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > num){
            result.push(arr[i])
        }
    }
    return result;
}

console.log(isTooBig(60, [2, 62, 23, 98, 205, 7, 51, 61]));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateRandomString(len){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < len; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;

}

console.log(generateRandomString(11));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

function possibleSubsets(array, length){
    let result = [];
    let temp = [];

    function backtracking(start){
        if (start === array.length ){
            if (temp.length === length) {
                result.push([...temp]);
            }
            return;
        }
        temp.push(array[start]);
        backtracking(start + 1);
        temp.pop();

        backtracking(start + 1);
    }
    backtracking(0);
    return result;
}

console.log(possibleSubsets([1,2,3,4,5],2));


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

function countCharacter(str, char){
    let map = new Map();
    for (let i of str){
        if (map.has(i)){
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    if (map.has(char)){
        return map.get(char);
    }
    else {
        return 0;
    }
}

console.log(countCharacter('microsoft.com', 'o'));


// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

function firstNotRepeatedChar(str){
    let freq = new Map();

    for (let char of str){
        if (freq.has(char)){
            freq.set(char, freq.get(char) + 1);
        } else {
            freq.set(char, 1);
        }
    }
    for (let char of str){
        if (freq.get(char) === 1){
            return char;
        }
    }
    return -1;

}

console.log(firstNotRepeatedChar('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]


function bubbleSort(arr){
    
    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){
            if (arr[j] > arr[i]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function Longest_Country_Name(arr){
    let temp = "";
    for (let name of arr){
        if (name.length > temp.length){
            temp = name;
        }
    }
    return temp;
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters. 

function findLongestSubstring(str){
    let longest = '';
    let current = '';

    for (let i = 0; i < str.length; i++){
        if (!current.includes(str[i])){
            current += str[i];
        } else {
            if (current.length > longest.length){
                longest = current;
            }
            current = str[i]
        }
    }
    return longest;
}

console.log(findLongestSubstring('aabcdefgabazbwfrbc'));

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.


function longestPalindrome(str) {
    // Special case for strings with fewer than 2 characters
    if (str.length < 2) return str;
  
    let longest = "";
  
    for (let i = 0; i < str.length; i++) {
      // Check for palindromes with odd length
      let palindrome = getLongestPalindromeAt(str, i, i);
      if (palindrome.length > longest.length) longest = palindrome;
  
      // Check for palindromes with even length
      palindrome = getLongestPalindromeAt(str, i, i + 1);
      if (palindrome.length > longest.length) longest = palindrome;
    }
  
    return longest;
  }
  
  // Helper function that returns the longest palindrome
  // at a given center position (left + right) in the string
  function getLongestPalindromeAt(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
  
    // Return the palindrome without the characters that were
    // not part of the original palindrome
    return str.slice(left + 1, right);
  }

console.log(longestPalindrome('bananas'));


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function foo (cb) {
    cb();
}
function callback() {
    console.log("Hello World")
}

foo(callback)

// 29. Write a JavaScript function to get the function name. 

function getFunName(cb){
    return cb.name;
}

console.log(getFunName(foo))