console.log("script started");

// function hello (){
//     console.log("hello");
// }
// setTimeout(hello,2000);

// call bcak is basically argumnet to other function
// when wwe pass function as a argumnet

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

function sum(a, b) {
  console.log(a + b);
}
calculator(5, 6, sum);

// call back hell
// nested callbcaks stacaked below one a nother forming a pyramid structure



//data1 then data2 the data3

// getData(1);
// getData(2);
// getData(3);

function getDatas(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      console.log("inside get next Data");

      getNextData();
    }
  }, 2000);
}
//promise version
function getDatabyPromise(dataId) {
    return new Promise((resolve , reject)=>{
    setTimeout(() => {
    console.log("ye done boys", dataId);
    resolve("yes well done");
  }, 2000);
    })
 
}

let p1 = getDatabyPromise(1);
p1.then((res)=>{
    let p2 = getDatabyPromise(2);
    p2.then(()=>{
        let p3 = getDatabyPromise(3)
    })
})

async function getDatabyasyncawait(){
 await getDatabyPromise(4);
 await getDatabyPromise(5);
 await getDatabyPromise(6)
}
getDatabyasyncawait();
// getDatas(1, () => {
//   getDatas(2, () => {
//     getData(3);
//   });
// });



// nested call back stacked bewlo one another forming pyramid straucture

//Promises function
 
// promise is a for eventual compleation of tsask it is objecty in js 

const getPromise = ()=>{
   return new Promise((resolve ,reject)=>{
    console.log("saved it");
    resolve("sucess");
    // reject("some error ocuured");
    //  3 states of a promise[pending ,fullfill rejected]
}) // reoslve and reject are the callbacks provided by Js
}

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfileld");    
// }).then(()=>{
//     console.log("hello world");
    
// })
// promise.catch((err)=>{
//     console.log("rejected");
    
// })



function getData(dataId) {
  return new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        // console.log(promise);
        
        console.log("function called");  
        resolve("sucess");
    },2000)  
  })
}
// getData(1223);

// promisess .then() && catch()


function asyncfunction(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("sucess")
            
        },3000)
    })
}

function asyncfunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1 getting api");
            resolve("sucess 2")
            
        },4000)
    })
}
let Promises = asyncfunction()
Promises.then((data)=>{
 console.log(data); 
}).then(()=>{
 let promisetwo = asyncfunction2();
  promisetwo.then((data)=>{
    console.log(data);
    
  })
})

let promise = asyncfunction(); // lowercase p
promise
  .then((data) => {
    console.log(data);
    return asyncfunction2();
  })
  .then((data2) => {
    console.log(data2);
  })
  .catch((err) => console.error("Error:", err));

// async-await 
// async function always returns apromise  await pauses the exceution of its
//  surrounding async function until the promise is setteled

async function  api(){
    console.log("api"); 
   await asyncfunction2();
}
 api()

 //immediately invoked function xpression
 // called immediatley as sson as it is 
 // exexcute only once

 (function(){
 })();

 (()=>{

 })();
 (async()=>{
     await asyncfunction2();
 })();