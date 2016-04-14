/**
 * Created by kalyani on 1/31/15.
 */
var str = "dhana how for how how";
var str1= "hai hai";
var pos = str.indexOf("how");
var ind = str.lastIndexOf("how");
var slice = str.slice(4,14);
var slice1= str.slice(-18,-6);
var substring = str.substring(4,14);
var ss_substring = str.substr(4,7);
var lower =str.toLowerCase();
var upper = str.toUpperCase();
var conn = str.concat(str1);
var rel = str.replace("how","When");
var char_pos =str.charAt(0);
var charCode = str.charCodeAt(0);
var find = str.search("for")

document.getElementById("demo").innerHTML = 'str.indexOf("how") is' + " " + pos;
document.getElementById("demo1").innerHTML = 'str.lastIndexOf("how") is ' + ind;
document.getElementById("demo2").innerHTML = 'str.slice(4,14)'+ slice;
document.getElementById("demo3").innerHTML = 'str.slice(-18,-6) '+slice1;
document.getElementById("demo4").innerHTML = 'str.substring(4,14)'+substring;
document.getElementById("demo5").innerHTML = 'str.substr(4,7) '+ ss_substring;
document.getElementById("demo6").innerHTML = lower;
document.getElementById("demo7").innerHTML = upper;
document.getElementById("demo8").innerHTML = conn;
document.getElementById("demo9").innerHTML = rel;
document.getElementById("demo10").innerHTML = char_pos;
document.getElementById("demo11").innerHTML = charCode;
document.getElementById("demo12").innerHTML = "for position in the string " + find;





