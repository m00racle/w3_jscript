//this part consist of script loaded automatically withtin page loading
//first let's put some number into debugger:
console.log(2+2)

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
