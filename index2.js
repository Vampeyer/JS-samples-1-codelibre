/*

function funcName( p1, p2 , p3 , p4  ) { 
     sum = p1 + p2 + p3 + p4; 
     return sum 
}
funcName()

console.log(sum);


function writeText(stuff) { 
    document.getElementById("id").innerHTML = stuff
}

writeText( " Well Yellow there ! ")


function addNumbers (num1, num2 ) {
    var sum = num1+=num2 

    return sum
}



document.getElementById("id").innerHTML =  (addNumbers(11,2))

var favoriteP = "blondes"

function myFunc() { 
document.getElementById("demo").innerHTML = " I like " + favoriteP;

}
*/



var menu =  { 
    breakfast: " Bacon and eggs" , 
    lunch: " burger and veggies" , 
    dinner: " spagetti  "
}


    document.getElementById("id2").innerHTML = ( " TOdays menu will be   "  + Object.values(menu))



 var person = { 
    fullName: "bill williams ", 
    age: 30 , 
    showName: function() {
         alert(this.fullName)
     }, 
     logName: () => { 
        console.log(person.fullName)
     }
    
    
    }
    
    // person.logName();
    console.log(person.age)


    






var datObj =  { 
    key1 : " val 1  ",
    key2: " val 2  ", 
    key3 : " val 3 ",
    key4 : function funk (a , b){
         result = a + b; 
         return result 
    }

}

console.log(datObj.key4(5 , 10  ))

var datObj2 =  [{ 
    key1 : " val 1  ",
    key2: " val 2  ", 
    key3 : " val 3 ",
    key4 : function funk (a , b){
         result = a + b; 
         
         return document.querySelector("p").innerHTML = result
    }

}]

console.log(datObj2[0].key4(20 , 30))

console.log(datObj.key1 + " Key one is value1 ")

console.log( " this was used to call a function , wihtin a object. -   using this object method datObj2[0].key4(20 , 30)  " )

 


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


var greeting = "hello"
           // the replace method , actually just makes a copy 
var nextGreeting = greeting.replace( /HeLlo/i , " Hello ,I was replaced , using the .replace(method) ") 



console.log(nextGreeting);
console.log("\n")



var concatedVar= " This had been concatenated  , as a string , using the concat(method)" 
console.log(greeting.concat( " there ","World " , concatedVar ))


console.log ("\n \n  \n  " )








function getValue () { 
    var val = document.getElementById("myInput").value;
    alert(val)
}
//getValue();









