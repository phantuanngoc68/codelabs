var opentutorials = document.getElementById("w3-open-tutorials");
var openreferences = document.getElementById("w3-open-references");
var openexamples = document.getElementById("w3-open-examples");
var openexercises = document.getElementById("w3-open-exercises");
opentutorials.onclick = function(){
    document.getElementById("open-exercises").style.display="none";
    document.getElementById("open-references").style.display="none";
    document.getElementById("open-examples").style.display="none";
    document.getElementById("open-tutorials").style.display="block";
}
openreferences.onclick = function(){
    document.getElementById("open-exercises").style.display="none";
    document.getElementById("open-tutorials").style.display="none";
    document.getElementById("open-examples").style.display="none";
    document.getElementById("open-references").style.display="block";
}
openexamples.onclick = function(){
    document.getElementById("open-exercises").style.display="none";
    document.getElementById("open-tutorials").style.display="none";
    document.getElementById("open-references").style.display="none";
    document.getElementById("open-examples").style.display="block";
}
openexercises.onclick = function(){
    document.getElementById("open-exercises").style.display="block";
    document.getElementById("open-tutorials").style.display="none";
    document.getElementById("open-references").style.display="none";
    document.getElementById("open-examples").style.display="none";
}
document.getElementById("close-tutorials").onclick = function(){
    document.getElementById("open-tutorials").style.display="none";
}
document.getElementById("close-references").onclick = function(){
    document.getElementById("open-references").style.display="none";
}
document.getElementById("close-examples").onclick = function(){
    document.getElementById("open-examples").style.display="none";
}
document.getElementById("close-exercises").onclick = function(){
    document.getElementById("open-exercises").style.display="none";
}