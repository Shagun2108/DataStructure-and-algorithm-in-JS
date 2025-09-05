function wordCounter(text){

    const counter = {}
    const wordArray = text.toLowerCase().split(" ");

    for(let word of wordArray){

        if(word in counter){
            counter[word]++;

        }else{
            counter[word] =1;
        }

    }

 return counter;

}

const word = "hello my name is name is my name shagun"

 console.log(wordCounter(word));