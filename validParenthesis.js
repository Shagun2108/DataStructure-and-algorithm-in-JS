const isValidParenthesis =(str)=>{
    const stack = [];
    const brackets ={
        "{":"}",
        "[":"]",
        "(":")",
    }
    for (let char of str){
        if(brackets[char]){
            stack.push(char)
        }else{
            const top = stack.pop();

            if(!top || brackets[top] !== char){
              return false
            }
        }
    }
    return stack.length === 0;

}

console.log(isValidParenthesis("()[]{}")); // true
isValidParenthesis("{[()]}"); // true
isValidParenthesis("([)]");   // false (wrong order)
isValidParenthesis("(");      // false (unclosed)
isValidParenthesis("]");      // false (closing before opening)
const str = "abcd";

function reverseString(str) {
    let result = [];
    const stack = [];

    // push all characters
    for (let ch of str) {
        stack.push(ch);
    }

    // pop until empty
    while (stack.length) {
        result.push(stack.pop());
    }

    return result.join('');
}

console.log(reverseString(str));