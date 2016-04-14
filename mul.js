/**
 * Created by kalyani on 1/31/15.
 */
var x = prompt("enter the first value:");
var y =prompt("enter the second value");
function myFunction(x,y){
    return x * y;
}
document.getElementById("demo").innerHTML = myFunction(x,y);
