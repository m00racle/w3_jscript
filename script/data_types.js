/*script/data_types.js:
this scrpt file is created to solve the conflicting scripts in the script/output.js file

Before this I want to make all the Javascript option and data type courses in one file
sript but apparently that is not a good idea.

therefore I make a separate file just to contain the scripts used in the
Javascript data type course.

Please check if the html file is already connected to this script file !
*/

/* Javascript Data Types:============================================
Now we will starts to learn about data types:
basically there are three data types in basic formats:
1. number
2. String
3. Objects
*/

function data_types(x, y, z) {
  //this function will get output for different data types and see what data type is the result
  var res = x + y + z;
  document.getElementById("data_demo1").innerHTML = res;
}

//this trying to just add the innerHTML straight from the load:
var angka = 16, huruf = "Volvo"
document.getElementById("data_demo1").innerHTML = angka + huruf;
// TODO: this also failed to work! Only internal script was able to produce 16 + "Volvo"!
//asnwer the global command document.getElementById is alredy pre occupied above
//just comment out that syntax to make this works! this is proven after doing just that
