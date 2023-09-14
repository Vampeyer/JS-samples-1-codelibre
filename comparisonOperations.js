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


var z = '10' 
var y = 60 


/* the ternary operator  */ 

console.log(Boolean(z))

if ( z == true  )   { 
     console.log('ternary operation complete ')
}

 
console.log(z === 10 && y === 60)  

var boolOf = ( true && false)

var x = 100; 

if (3===3 && 4 === 4 )  { 
    document.write( " The condition is true  ,,, --- " )
}

if ( 3 === 3 && x === 100 ) { 
    document.write( "  this is also true ")
}






console.log(boolOf)


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