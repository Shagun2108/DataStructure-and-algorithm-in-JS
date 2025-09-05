
let arr= [ 7,1,5,3,6,4,8];

const maxProfit = (arr)=>{
 let maxProfit = 0;
 let minPrice = arr[0]
 let maxIndex =0;
 let minIndex =0;
 let minindexcheck =0;

 for(let i =1;i<arr.length;i++) {

    if(arr[i]-minPrice > maxProfit){
        maxProfit =arr[i]-minPrice;
        maxIndex = i;
        minIndex = minindexcheck;
    }
    if(minPrice > arr[i]){
        minPrice = arr[i];
        minindexcheck = i;

    }

 }
 return [maxProfit,minIndex,maxIndex];
}


const chunkSplit = (arr,size)=>{
    let array = [];

    for(let i =0 ;i<arr.length;i+=size){
     array.push(arr.slice(i,i+size))
    }
    return array;

}
console.log(chunkSplit(arr,2));

const chunkSplitReduce=(arr,size)=>{
   return arr.reduce(( acc ,_,i)=>{
        if(i%size ==0){
            acc.push(arr.slice(i,i+size))
        }
        return acc;
    },[])
}

console.log(chunkSplitReduce(arr,3));


// two sum

const twoSum =(arr ,target)=>{

    let start =0;
    let end = arr.length -1;

    while(start <=end){

      let  sum = arr[start] +arr[end];

        if(sum == target){
        return [start,end];
        }
        else if(sum > target){
            end--;

        }
        else{
            start ++;
        }
    }
    return [];

}

console.log(twoSum([0,2,3,4,5,6],7));