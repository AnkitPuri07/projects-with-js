//Async makes a function to return a promise
//Await is always used inside async function and it makes that function wait for promise
//we dont need method chaining here instead we use try{} and catch{}
//Async and Await helps to execute asynchronous code in a synchronous manner

//we will use the same example
function walkDog2(){
        return new Promise((resolve,reject)=>{
setTimeout(()=>{
   let walkDogResult = true;
   if(walkDogResult){
    resolve("yes we walked the dog");
   }
   else{
    reject("we failed to walk dog");
   }
},1500);
 })
}

function cleanKitchen1(){
 return new Promise((resolve,reject)=>{
setTimeout(()=>{
   let cleanKitchenResult= true;
   if(cleanKitchenResult){
    resolve("yes we cleaned kitchen");
   }
   else{
    reject("we failed to clean kitchen");
   }
},2500);
 })


}

function takeOutTrash3(){

 return new Promise((resolve,reject)=>{
setTimeout(()=>{
   let takeOutTrashResult = false;
   if(takeOutTrashResult){
    resolve("yes we took the trash out");
   }
   else{
    reject("we failed to take the trash out");
   }
},1000);
 })

}

//the below code does same as method chaining but in a clear way
async function doChores(){
    try{
         let outComeOFtask1= await cleanKitchen1();
 console.log(outComeOFtask1);

        let outComeOFtask2= await walkDog2();
 console.log(outComeOFtask2);

        let outComeOFtask3= await takeOutTrash3();
 console.log(outComeOFtask3);

    }


catch(error){ 
     console.error(error);
}

}
doChores();