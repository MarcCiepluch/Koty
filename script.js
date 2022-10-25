function asd(){
var animal = document.forms.pets.elements["pets"].value;
if (animal == "cat")
{
var answer=document.getElementById("answer").innerHTML="Znasz się na rzeczy!";
}
else
{
var answer=document.getElementById("answer").innerHTML="Koty są najlepszymi zwierzętami, popraw swoją odpowiedź!";
}
}