


/*

for (i = 0; i < FUCKINGARRAYLOOP.length ; i++  ){
    document.getElementById('id3').innerHTML += FUCKINGARRAYLOOP[i] + "<br>" 
 }
*/

var VAR = [" Newburg " , " Jeffersontown " , " Downtown " , " West end " ,  " Old louisville "  ]

text = "The next text";
text + "<br>"


document.getElementById("id").innerHTML += "<br>"

for( i=0; i< VAR.length; i++){ 
  document.getElementById("id").innerHTML += VAR[i] + "<br>"; 
}





///////////

// the forEach() method can also be used to loop through elements in an array. 




/*
var newArray = [ "laptop" , "bed" , " calendar " , " mom watching me type "  ,1,2,3,4,5,6,7,8,9,       {  key : undefined }   ,  ]


document.querySelector("#seeIt").innerHTML = newArray
document.getElementById("seeIt").innerHTML += "<br>"
for (i=0; i < newArray.length; i++ ) { 
   document.getElementById("seeIt").innerHTML += newArray[i] + "<br>"
}

*/




////////////////////////////////
// Array Methods  

// forEach() method is another way that we can loop through arrays


var theCities = [ " Bearlean" , "Toke-Key-Yo " , " here" , " there  " , " everywhere " ]


theCities.forEach(function(arr , i ) { 
   document.write(i + ": " + arr + "<br>" )
} )
// this displays 
/* 
0: Bearlean
1: Toke-Key-Yo
2: here
3: there
4: everywhere
*/
//////////////////////////////////////////


// Arrays to string methods 
/*
the join() method , creates and returns a new steing by combining all the
elements.  



*/

document.write(theCities.join())


// This adds text in between each and every selected element in an array , 
// using the join method. 

document.write(theCities.join(" Is where i smoke weed  " + "<br>"))

document.write("<br>" + "<br>" )


// STRINGS TO ARRAY       mehthod , - 

var sampText = " Ipsum lorem lorem ipsum"  
document.write(sampText.split(" "))

console.log(sampText.split(" ")) // THIS MAKES A STRING TO ARRAY METHOD  

///////



// merging arrays   together  , - using the 
// CONCAT method 

const veggiesArr = [ " carrots" ,  "Broccli" , "Celery "  ]

console.log(theCities.concat(veggiesArr))


// concatenating multiple using merge method

let arr1 = [ 1,2,3, ]
let arr3 = [3,4,5, "billy"  ]
let arr4 = [6,7,8   ]

console.log(arr1.concat(arr3, arr4)) // concats , into a single array S

console.log

/// Array , checking if a value exists or not . using the 
//includes() method     --- returns a Boolean   

console.log(arr3.includes("billy"))

//// Searching through arrays using 
// indexOf()  method   --- returns a number   
console.log(arr3.indexOf("billy"))  

///////////////////////////////////////


/*  

Array splitting and spliicing
*/
//SLicing an array , - returns a new copy , with a 
// new seciton of an array using the .slice() method 

// the slice() method takes two arguments  , in numbers 
// the start , and the end , of the copy array
// slice (start , end  )

let arrai3 = [1,2,3,4,5,]

let slicedArr = arrai3.slice(2,4)
console.log(slicedArr)    // -- [ 3, 4 ]
// successfully sliced off and copied a piece of an array . 




/*

SPLICING , - the splicing method , 
- changes the contents of an array by removing or replacing existing elements and / or 
adding new elements in its place. 

it deletes , and / or , adds elements in an array  - from left to right. 

// the last element can be entered 

I will make an array out of arrai3 that says , [ 1,5 ] 



*/ 

let otherArr =  arrai3.splice(0 ,1)

let otherArr1 = arrai3.splice(-1 ,3 )
console.log(otherArr1) 
// mo splicing 
const arrai33 = [ 1,2,3,4,5,6,7,] 
arrai33.splice(0,5, " 6 , 7 , 8" , " 9 , 10 , 11" ) 
console.log(arrai33)

delete(arrai33[5])
console.log(arrai33)

// Using splice to delete from an array 

let deletingAnArray = [ 1,2,3,4,5] 
deletingAnArray.splice(0 , 4)
console.log(deletingAnArray)




// Adding to an array - 

deletingAnArray[6] = "6, 7, 8"
console.log(deletingAnArray)

 


//////////////////

//////////////

// Array sorting 

let anArray = [ 52,52,45,54,48,65,59,65,35,26,32,15,45,78,95,566,655,622,665,62,6125,5,15,151,5,25,26526526,2,2,55,5 ]

anArray.sort(function(a,b) { 
   return a - b 
} )
console.log(  "in ascending order , using sort() " + anArray )  


anArray.sort(function(a,b) { 
   return b - a 
})
console.log(" in descending order"+ anArray )



//// using the .sort() method on an object 

/* THIS IS SORT FUNCTION , THAT LOOPS OVER THE ARRAY  , 
AND SORTS IT , ACORDING TO NUMBERICAL  , OBJECTIVE , ORDER.     */

var students =  [ { name:" John", age:7 }, { name: "Monica" , age: 5 } ,{ name: " Paul" , age:6 }]

students.sort(function(a,b){ 
   return a.age - b.age 
})
console.log(students)
