let id;
let counter;

function timer(){
    let inputEl=document.getElementById("value");
    inputEl.value="";
    let key=Math.floor(Math.random() * (100000 - 0) ) + 0;
    let targetValue12=document.getElementById("targetvalue");
    targetValue12.textContent=key;
    let para=document.getElementById("timer");
    clearInterval(id);
    counter=0;
    para.textContent=counter;
    id=setInterval(function(){
        counter+=1;
        para.textContent=counter;
    },1000) ;

}
function reset(){
    clearInterval(id);
    let para=document.getElementById("timer");
    let targetValue12=document.getElementById("targetvalue");
    let inputEl=document.getElementById("value");
 
    inputEl.value="";
    para.textContent="";
    targetValue12.textContent="";
}
function calculate(num){
    let inputEl=document.getElementById("value");
    if (num==="+"||
    num==="-"||
    num==="*"||
    num==="/"){
        inputEl.value+=" ";
    }
    inputEl.value+= num;
    if (num==="+"||num==="-"||num==="*"||
    num==="/"){
        inputEl.value+=" ";
    }
    
}
function solve(){
    let inputEl=document.getElementById("value");
    let targetValue12=document.getElementById("targetvalue");
    let result1=document.getElementById("result");
    let x=inputEl.value;
    let y =eval(x);
    inputEl.value=y;
    if (y==targetValue12.textContent){
        clearInterval(id);
        result1.style.color="green";
        result1.style.margin="10px";
        result1.textContent="Bazzinga !!!";
    }
    else{
        result1.style.color="red";
        result1.style.margin="10px";
        result1.textContent="EEEEE wrong answer";
        inputEl.value="";
    }
    
}
function clearinput(){
    let x=0;
    document.getElementById("value").value="";
}