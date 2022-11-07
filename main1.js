function b() {
    p=localStorage.getItem("z1");
l=localStorage.getItem("z2");
console.log(p);
console.log(l);
s1=0;
s2=0;
document.getElementById('p1n').innerHTML=p+" - ";
document.getElementById('p2n').innerHTML=l+" - ";
document.getElementById('p1s').innerHTML=s1;
document.getElementById('p2s').innerHTML=s2;
document.getElementById('q').innerHTML="Question Turn = "+p;
document.getElementById('ans').innerHTML="Answer Turn = "+l;

}
function send() {
    x1=document.getElementById('n1').value;
    x2=document.getElementById('n2').value;
    actual_answer = parseInt(x1) * parseInt(x2);
    question_number ="<h4>" + x1 + " X "+ x2 +"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML=row;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}

question_trun="player1";
answer_trun="player2";
function check() {
    e=document.getElementById('input_check_box').value;
    
    if (e==actual_answer) {
        if(answer_trun=="player1"){
            s1=s1+1;
            document.getElementById('p1s').innerHTML=s1;
        } 
        else{
            s2=s2+1;
            document.getElementById('p2s').innerHTML=s2;
        }
    }

    if (question_trun=="player1") {
        question_trun="player2";
        document.getElementById('q').innerHTML="Question Turn = "+l;
    }
    else{
        question_trun="player1";
        document.getElementById('q').innerHTML="Question Turn = "+p;
    }

    if (answer_trun=="player1") {
        answer_trun="player2";
        document.getElementById('ans').innerHTML="Answer Turn = "+l;
    }
    else{
        answer_trun="player1";
        document.getElementById('ans').innerHTML="Answer Turn = "+p;
    }
    document.getElementById('output').innerHTML="";

}