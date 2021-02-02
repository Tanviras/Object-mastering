//first view
// console.log(2222);
// console.log(3333);
// console.log(4444);

//Output:
// 2222
// 3333
// 4444





//second view
// function doSomething(){
//     console.log(3333);
// }
// console.log(2222);
// doSomething();
// console.log(4444);


//Output:
// 2222
// 3333
// 4444


// //third view
// function doSomething(){
//     console.log(3333);
// }
// console.log(2222);
// setTimeout(doSomething);//timeout hobar por seshe tomake boshabo doSomething
// console.log(4444);

// //Output:
// // 2222
// // 4444
// // 3333



// //fourth view
// function doSomething(){
//     console.log(3333);
// }
// console.log(2222);
// setTimeout(doSomething,10000);//10s =10000 milisecond timeout hobar por seshe tomake boshabo doSomething
// console.log(4444);

// //Output:
// // 2222
// // 4444
// // 3333//10 s por eta show korbe




// //fifth view
// console.log(2222);
// setTimeout(function(){
//                      console.log(3333);
//                      },10000);//10s =10000 milisecond timeout hobar por seshe tomake boshabo doSomething
// console.log(4444);

// //Output:
// // 2222
// // 4444
// // 3333//10 s por eta show korbe



//sixth view
console.log(2222);
setTimeout(()=>{
               console.log(3333);
               },10000);//10s =10000 milisecond timeout hobar por seshe tomake boshabo doSomething
console.log(4444);

//Output:
// 2222
// 4444
// 3333//10 s por eta show korbe




//ei je 10000 milisecond=10 second bole deya hocche, eta ek dhoroner assurance je minimum 10 second lagbei. But amra jani set time out dile onno kaj sesh korar jonno jje time lage,sei kaj ta sesh korar por setTimeout er nijer kaj ta kore dey. jodi onno kaj gulo korte 15 second lege jay,tahole oi 15 second porei doseomething er values ta dekhabe(10 s toh minimum,aro beshi lagse ekkehtre). Jodi onno  kaj 5 sec a hoye jay,taholeo minimum 10 sec wait korbe. 