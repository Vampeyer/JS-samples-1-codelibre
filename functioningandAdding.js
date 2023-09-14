/*
document.getElementById("id").innerText = " innerText"

document.getElementById("id").innerHTML = "InnerHTML"

 console.log(" console.log ");

// alert("dialog box");

 document.write("write to the content of the document ")



function funky (){ 

    var label = " The functional label  "
    document.getElementById("demo").innerHTML = label;  


    var textString = " String of more text , document.write()";
    document.write(textString);

}

*/ 



/* Multiple var*/





var first = 1 , second = 2 , third = 3.3 

console.log( typeof(first) + " " +  typeof(second) )

console.log(first + " " +  second + " "  + third )
document.write(first + " " +  second + "<br> "  + " "  + third  + "<br> " + "<br> ")


function addTogether() { 
     var one = 1.2  , two = 2
     document.write(one + two)
}
addTogether();