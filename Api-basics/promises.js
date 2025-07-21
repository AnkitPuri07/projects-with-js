/*  PROMISES ARE OBJECT/METHOD THAT RETURNS A FUTURE VALUE

        IT TAKES TWO PARAMETERS:RESOLVE AND REJECT

            RESOLVE HANDLES SUCCES OF THE TASK AND RETURNS A VALUE WHEN THE TASK IS COMPLETED
             REJECT HANDLES FAILURE OF THE TASK AND RETURNS A VALUE WHEN THE TASK FAILS

                 IT IS USED TO MANAGE ASYNCHRONOUS CODE AND HELPS TO ACOID CALLBACK HELL
    
        WE USE METHOD CHAINING .THEN()/.CATCH()  ALTHOUGH IT WONT BE RELEVENT WHEN WE WILL START USING ASYNC AND AWAIT 

*/

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

function takeOutTrash(){

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

//method chaining
//since we want to clean the house first and take the trash out at last we will do the method chaining accordingly

cleanKitchen1().then(valueReturnedBycleanKitchen1=>{console.log(valueReturnedBycleanKitchen1); return walkDog2()})
.then(valueOf2ndFunction =>{console.log(valueOf2ndFunction); return takeOutTrash()})
.then(valueOf3rdFunction =>{console.log(valueOf3rdFunction); console.log("All the chores completed");})
.catch(error=>{console.error(error);})

