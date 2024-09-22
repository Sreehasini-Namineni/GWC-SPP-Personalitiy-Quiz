var score =0;
var count =0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

q1a1.addEventListener("click", one);
q1a2.addEventListener("click", zero);
q2a1.addEventListener("click", one);
q2a2.addEventListener("click", zero);
q3a1.addEventListener("click", one);
q3a2.addEventListener("click", zero);
q4a1.addEventListener("click", one);
q4a2.addEventListener("click", zero);

function one (){
  score++;
  count++;
  console.log("score =" + score + " question count =" + count);

  if (count==4){
    console.log("print");
    result();
  }
}

function zero (){
  count++;
  console.log("score =" + score + " question count =" + count);

  if(count==4){
    result();
  }
}

function result(){
  var outcome = (score/4)*100;
  var result = document.getElementById("result").innerHTML = "You are " + outcome + "% Hermione Granger.";
}

var restart = document.getElementById("restart");

restart.addEventListener("click", reset);

function reset(){
  score=0;
  count=0;
  var result = document.getElementById("result").innerHTML = "Your result is...";
  var para = document.getElementById("para").innerHTML = "_";
}


function changeBG1(){
  var q1a1 = document.getElementById("q1a1").style.backgroundColor = "#b75c80";
}

function changeBG2(){
  var q1a2 = document.getElementById("q1a2").style.backgroundColor = "#b75c80";
}

function changeBG3(){
  var q2a1 = document.getElementById("q2a1").style.backgroundColor = "#b75c80";
}

function changeBG4(){
  var q2a2 = document.getElementById("q2a2").style.backgroundColor = "#b75c80";
}

function changeBG5(){
  var q3a1 = document.getElementById("q3a1").style.backgroundColor = "#b75c80";
}

function changeBG6(){
  var q3a2 = document.getElementById("q3a2").style.backgroundColor = "#b75c80";
}

function changeBG7(){
  var q4a1 = document.getElementById("q4a1").style.backgroundColor = "#b75c80";
}

function changeBG8(){
  var q4a2 = document.getElementById("q4a2").style.backgroundColor = "#b75c80";
}

function back(){
  var q1a1 = document.getElementById("q1a1").style.backgroundColor = "";
  var q1a2 = document.getElementById("q1a2").style.backgroundColor = "";
  var q2a1 = document.getElementById("q2a1").style.backgroundColor = "";
  var q2a2 = document.getElementById("q2a2").style.backgroundColor = "";
  var q3a1 = document.getElementById("q3a1").style.backgroundColor = "";
  var q3a2 = document.getElementById("q3a2").style.backgroundColor = "";
  var q4a1 = document.getElementById("q4a1").style.backgroundColor = "";
  var q4a2 = document.getElementById("q4a2").style.backgroundColor = "";
}

