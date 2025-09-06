// const promises = [p1,p2,p3]

function promiseAllCreation(promises) {

  return new Promise((resolve, reject)=>{
    if(!Array.isArray(promises)){
      return reject(new TypeError ("argument must be Array"));
    }

  let completed = 0;
  result = [];
  promises.forEach((element,index) => {
    Promise.resolve(element)
    .then((value)=>{
      result[index] = value;
      completed++;



      if(completed === promises.length){
        resolve(result);
      }
    }).catch((err) =>reject(err));
  
  });

  

  if(promises.length ===0){
    resolve([]);
  }
  })


}
const pr1 = Promise.resolve(10);
const pr2 = new Promise((res) =>setTimeout(()=>res(20),10000))
const pr3 = Promise.resolve(30);



promiseAllCreation([pr1,pr2,pr3]).
then((values) =>console.log(values));
