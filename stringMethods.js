

var greeting = "hello"
           // the replace method , actually just makes a copy 
var nextGreeting = greeting.replace( /HeLlo/i , " Hello ,I was replaced , using the .replace(method) ") 



console.log(nextGreeting);
console.log("\n")
var concatedVar= " This had been concatenated  , as a string , using the concat(method)" 
console.log(greeting.concat( " there ","World " , concatedVar ))



console.log( " this was used to call a function , wihtin a object. -  datObj2[0].key4(20 , 30)  " )

 


 var str = " This is an important message  " 

 var ans = str.search(  "message")  // -- ITS case sensitive , for non 
                      // case sensitive - do like  ( /message/i). 


 console.log( " Hello , str.search() method , found an indexex number at line --  " + ans)




 console.log ("\n  " )



const foxy = "The quick brown fox jumps over the lazy dog."


 console.log(foxy)

var slicedFoxy = foxy.slice(10 , 20); 
console.log("sliced foxy " +  slicedFoxy) 

console.log( " now the substring of foxy = " + foxy.substring(26)  )