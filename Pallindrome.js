let string = 'cddc';

function pallindromeCheck(string) {
    // let oldstring = string;
    let newString = string.split('').reverse().join('');
    if (newString === string){ return true;}
    else{return false}

}

console.log(pallindromeCheck(string));

let numebr = 1234;
// function reverseInteger(number){
// let newNumber = number.split('').reverse().join('');
// return newNumber
// }

// reverseInteger(numebr);


function reverseNumbers(number){
    let arr = [];
    let sum = 0;
    let mul = 1;

    while(number > 0){
        let num = number % 10;   // get last digit
        arr.push(num);
        number = Math.floor(number / 10); // remove last digit
    }    

    for(let i=arr.length-1; i>=0; i--){
        sum += mul * arr[i];
        mul *= 10;    
    }
    return sum;
}

function reverseNumberss(num) {
    let rev = 0;
    while(num > 0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    return rev;
}

console.log(reverseNumberss(1234)); // 4321

function reversereduce(string){
    reverse = string.split('').reduce((rev,char)=>char+rev,'')
}

function reverseNumbersBuiltIn(number){
    return parseInt(number.toString().split().reverse().join(''))*Math.sign(number);
}


//senetnce captilaziation

function capitalization(str) {
  let lowercase = str.toLowerCase();
  let arr = lowercase.split('');

  arr = arr.map((char, index) => {
    if (index === 0 || arr[index - 1] === ' ') {
      return char.toUpperCase();
    }
    return char;
  });

  return arr.join('');
}

const capitalize = (str)=>{
    return str.toLowerCase().split(" ").map((word)=> {word[0].toUpperCase()+ word.slice(1)
        console.log(word.slice(0));    
    }).join("");

}
console.log(capitalization("hello world")); // "Hello World"
console.log(capitalize("javaScript is fun")); // "JavaScript Is Fun"


function fizzbuzz(){

    for(let number =1 ;number<=100;number++)
    
    if(number%3 ==0 && number % 5==0 ){
        console.log("FIZZ BUZZ");    
    }
    else if(number%3 ==0){
        console.log("FIZZ");
    }
    else if(number % 5==0){
        console.log("BUZZ");
        
    }
    else{
        console.log(number);
        
    }
    
}

// fizzbuzz();
