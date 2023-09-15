



// JavaScript Arrays and array methods. 

var fruits = [ "apples" , "bananna " , " Oranges"]; 

var cities = new Array(" Madrid" , " Berlin" , " Tokyo " )




console.log(cities) 

document.querySelector(".classy").innerHTML = cities 


 /*  Methods for adding to the front , the end , 
 and removing the front or the end . pop , push , shift , unshift methods. 
 // methods for arrays 

*/
// Adding to - the end of -  an array using the 
// .push() method 

cities.push(" Louisville ")
console.log(cities)
console.log(cities[3])

console.log(cities)
//console.log(JSON.stringify(cities))  // making as a JSON string 




// Adding to - the font of the array  
cities.unshift(" Nashvi ")
console.log(cities)

//Removing the last element in an array -   pop method
 cities.pop()

XMLSerializer
 console.log(cities)

 // Removing the first element in an array using the  
 // shift method 
 cities.shift() 
 
console.log("----------------------")
 console.log(cities)

/////////////

// - Get the length of the array  
console.log(cities.length) 


// VERY IMPORTANT ! 

// SELECTING THE LAST ITEM
// OF ANY ARRAY !  -  USING LENGTH METHODS 
var lastitem = cities[cities.length -1 ]
console.log(lastitem)


cities.unshift("Rio" , "Denver")
console.log(cities)



 // Most used and IMPORTAND methods in arrays / / 


 /*  LOOPING OVER AN ARRAY 
 , USING A FOR LOOP , AND THE .length method
*/ 

document.getElementById("id2").innerHTML +=  " <br> "
for (i = 0; i < cities.length; i++) { 
    document.getElementById("id2").innerHTML += cities[i] + " <br> "
}







// ARRAY METHODS VERY  IMPORTANT! !  



let FUCKINGARRAYLOOP = [ "uno" , "DOS", " Tres" , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 ,  { key: " Valued pair" }  , true , NaN , null , undefined , 22 , 23 ,24  ] 






 /*     // Looping over all of the indexes in an array , and listing them each individually on a line , 
 // then adding a "<br>" as a break to indent a line each loop iteration. 



for ( i=0; i < FUCKINGARRAYLOOP.length  - 1; i++){
    document.getElementById("id3").innerHTML += FUCKINGARRAYLOOP[i] + "<br> "
}

*/


// Array Methods  


var theCities = [ " Bearlean" , "Toke-Key-Yo " ]


theCities.forEach(function(val, i, arr) { 
     document.getElementById("id4").innerHTML =  ( i + ": " + val + "<br>" );
} )






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
