var nameOfStudent=[];
function submit(){
var name1=document.getElementById("studentName1").value;
var name2=document.getElementById("studentName2").value;
var name3=document.getElementById("studentName3").value;
var name4=document.getElementById("studentName4").value;
nameOfStudent.push(name1);
nameOfStudent.push(name2);
nameOfStudent.push(name3);
nameOfStudent.push(name4);
console.log(nameOfStudent);
document.getElementById("displayName").innerHTML=nameOfStudent;
document.getElementById("submitBtn").style.display="none";
document.getElementById("sortBtn").style.display="inline-block";
}

function sortingBtn(){
    nameOfStudent.sort();
    console.log(nameOfStudent);
    document.getElementById("displayName").innerHTML=nameOfStudent;
}