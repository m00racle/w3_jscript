//this part consist of script loaded automatically withtin page loading
//first let's put some number into debugger:
//console.log(2+2)

//let's train to create variables
var a = 5, b = 9;
document.getElementById("demo_1").innerHTML = a + b + 6;
//this can be also use :
//document.write(5+6);

//creates alert as the page is loading
//window.alert(7+7);
//alternatively you can ommit the window keyword and just use:
function create_alert(x, y) {
  /*this will create alert if called
  //we normally use window.alert() syntax but now I will ommit the window*/
  alert(x + y);
}

function write_late(x, y) {
  /*this function if run by pressing the button overwrite will overwrite
  //the whole web page since it was called after the page is done loading*/
    document.write(x+y);
}

/* Javascript Data Types:============================================
Now we will starts to learn about data types:
basically there are three data types in basic formats:
1. number
2. String
3. Objects
*/

function data_types(xFeed, yFeed, zFeed) {
  //this function will get output for different data types and see what data type is the result
  var x = xFeed, y = yFeed, z = zFeed;
  var res = x + y + z; // TODO: still failed to work, uinable to process number plus string
  document.getElementById("data_demo1").innerHTML = res;
}

//this trying to just add the innerHTML straight from the load:
document.getElementById("data_demo1").innerHTML = 16 + "Volvo";
// TODO: this also failed to work! Only internal script was able to produce 16 + "Volvo"!
//asnwer the global command document.getElementById is alredy pre occupied above
//just comment out that syntax to make this works !
