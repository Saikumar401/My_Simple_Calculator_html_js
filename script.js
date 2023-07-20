function add(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("button1").innerHTML="Addition is "+c; 
}
function sub(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a-b;
    document.getElementById("button2").innerHTML="Subtraction is "+c;
}
function mul(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("button3").innerHTML="Multiplication is "+c;
}
function div(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a/b;
    document.getElementById("button4").innerHTML="Division is "+c;
}
function mod(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a%b;
    document.getElementById("button5").innerHTML="Modulus is "+c;
}