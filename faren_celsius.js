/**
 * Created by kalyani on 1/31/15.
 */
/* celsius = (5/9)*(farenheit-32)*/

var farenheit = prompt("Enter the value of Farenheit:");
function farenToCelsius(){
    return (5/9)*(farenheit-32);
    }
document.getElementById("demo").innerHTML = farenToCelsius(farenheit);