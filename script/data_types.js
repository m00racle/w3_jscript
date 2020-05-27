/*script/data_types.js:
this scrpt file is created to solve the conflicting scripts in the script/output.js file

Before this I want to make all the Javascript option and data type courses in one file
sript but apparently that is not a good idea.

therefore I make a separate file just to contain the scripts used in the
Javascript data type course.
NOTE: in the end I only add scripts that needed to run in page loading since the output.js
already handles the jscript_output.html file, thus this 16 + "Volvo" must be placed here

The function that handles the function when the result button is pressed it still located
in the output.js file 
*/

//this trying to just add the innerHTML straight from the load:
var angka = 16, huruf = "Volvo"
document.getElementById("data_demo1").innerHTML = angka + huruf;
// TODO: this also failed to work! Only internal script was able to produce 16 + "Volvo"!
//asnwer the global command document.getElementById is alredy pre occupied above
//just comment out that syntax to make this works! this is proven after doing just that
