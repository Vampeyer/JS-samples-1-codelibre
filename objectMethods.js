

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

//console.log( " this was used to call a function , wihtin a object. -   using this object method datObj2[0].key4(20 , 30)  " )





var sampObj = { 
    key: { 
        level1val: { 
            step2: { 
                step3: [ { 
                    value:" Key Value " 
                }]
            }
        }}}
     
document.querySelector(".classier").innerHTML = " Yup"


console.log(sampObj.key.level1val.step2.step3[0].value)
        
    





 
console.log( " \n \n \n  ")



















/*

var message = " the message "
message = document.getElementById("inputForm")


var person = { 
    name : " josh" , 
    age: 99, 
    hobbies: [ " coding" , " making money " , " high quality sex "  , " good metal music and other music" ],
    isMarried:false,
    alerted: (message) => { 
        alert(message)
    }
}

function sampFunk (){ 
    var message = " the message "
    message = document.getElementById("inputForm").innerHTML
}

sampFunk();

person.alerted()  
 */
// person.alerted(" a message for you  ")
//   && person[0].alerted(" merr ") 