
let strings = 'abcd';

function reverseString(string){
   let array =  string.split('');
   reverseArray = reverseArray(array);
   const str = reverseArray.join("");
   return str;


}
function reverseArray(arr) {

    n = arr.length;

    for(i=0;i<Math.floor( n/2) ;i++){
        start = arr[i];
        end = arr[n-i-1];
        arr[i] = end;
        arr[n-i-1]=start;
    }
    return arr;

}
console.log(reverseString(strings))



function reverseStringOne(string){
    return string.split('').reverse().join("");
}


function reverseStringTwo(string){
    let reverseString= '';

    for(i= string.length -1;i>=0;i--){
        reverseString+=str[i];
    }
    return reverseString;
}


function reverseStringReduce(string){

   return  string.split("").reduce((rev,char)=>char+rev,"");
}