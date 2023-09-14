/*
var x = 10  , y = 10 

var booleanComparisonVariable = (x === y) 

document.getElementById("demo").innerHTML = booleanComparisonVariable; 
*/ 


/*
var undefinedd; 

document.getElementById("demo").innerHTML = undefinedd 

var nullVariable = null 

document.write(nullVariable)

*/ 




var x = 10 
var y = 20 

var boolOf = true && true
console.log(boolOf)


/*
var x = 10, y = 10 

var truely = x == y 

console.log(truely + "  True result , equality operator.  ")
 
var falsey = x != y  

console.log(falsey + " False result ,  inequality operator ")

console.log(  )


document.getElementById("id").innerHTML = truely 
document.getElementById("id2").innerHTML = falsey



var food = {  
    canned : "meat", 
    fruit: " Bananna", 
    frozenFood: "meals "
} 


var cannedFood = [ {  
    canned : "meat", 
    fruits: " Bananna", 
    frozenFood: "meals ",
    fruit: " Strawberry ", 
    


    cannedPantryFood:  { 
        beans: "canned", 
        fish : " canned  ",
        grits: "bagged " , 
        pancakes: "Open inside a box !  " , 
        secretPancakeContents: { 
            firstThing: " just Dust ", 
            secondhing: "more pancake mix ", 
            thirdThing: " a Jack in the box surprise  !  "
         }
    }
    
}  ]    
//document.getElementById("id").innerHTML = cannedFood[0].cannedPantryFood.beans 

var objValues = Object.values(cannedFood)
document.write(JSON.stringify(objValues))

/*  


document.getElementById("demo").innerHTML = (food.canned  + " <br>        " + " " +  food.fruit + "<br>       " + "       "  + food.frozenFood )

var arraie = [ "first" , "second" , "third" , "fourth" , "fifth" ] 
console.log(typeof([]))

document.write(arraie[0] +  " " + arraie[1] + " " +  arraie[2]) 

console.log(cannedFood[0].fruits)   
console.log(cannedFood[0].canned)  


console.log(cannedFood[0].cannedPantryFood.secretPancakeContents.thirdThing)  




/*
var food = {  
    canned : "meat", 
    fruit: " Bananna", 
    frozenFood: "meals "
} 

var values = Object.values(food) 

document.getElementById("id").innerHTML = values
  
/*

/*
alert(JSON.stringify(food))



alert(...food) 
*/


