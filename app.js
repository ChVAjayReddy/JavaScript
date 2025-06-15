let questions = new Array();
let noofques;
  let nques;

function createquiz(){
    noofques=prompt("No of Question?","");
     document.getElementById("statement").remove();
        if(noofques==''|| noofques==0 || noofques==null){
      return;
    }
    nques=noofques-1;
    let i=0;
     let questionpaper=document.getElementById("questionpaper");
  let question=document.createElement("input"); question.type="text";question.placeholder="Question";question.id="qid";questionpaper.appendChild(question);  
  let option1=document.createElement("input");option1.type="text";option1.placeholder="option1";option1.id="op1"; questionpaper.appendChild(option1);
  // let check1=document.createElement("input");check1.type="checkbox";check1.id='ch1';questionpaper.appendChild(check1);
  let option2=document.createElement("input");option2.type="text";option2.placeholder="option2";option2.id="op2"; questionpaper.appendChild(option2);
  // let check2=document.createElement("input");check2.type="checkbox";check2.id='ch2';questionpaper.appendChild(check2);
  let option3=document.createElement("input");option3.type="text";option3.placeholder="option3";option3.id="op3";questionpaper.appendChild(option3);
  // let check3=document.createElement("input");check3.type="checkbox";check3.id='ch3'; questionpaper.appendChild(check3);
  let option4=document.createElement("input");option4.type="text";option4.placeholder="option4";option4.id="op4"; questionpaper.appendChild(option4);
// let check4=document.createElement("input");check4.type="checkbox";check4.id='ch4';questionpaper.appendChild(check4);
  let realanswer=document.createElement("input");realanswer.type="text";realanswer.placeholder="Enter Answer";realanswer.id="real"; questionpaper.appendChild(realanswer);
  realanswer.style.backgroundColor="yellow";realanswer.style.fontWeight = "bold";
  let questionsub=document.createElement("button"); questionsub.innerText="submit";        
   questionpaper.appendChild(questionsub);

     questionsub.addEventListener("click", function posting(){
                
       let qpaper = document.getElementById("qid").value;
         let ans1 = document.getElementById("op1").value;
           let ans2 = document.getElementById("op2").value;
             let ans3 = document.getElementById("op3").value;
               let ans4 = document.getElementById("op4").value;
                let realans=document.getElementById("real").value;
               let newquestion = {question: qpaper,answer1:ans1,answer2:ans2,answer3:ans3,answer4:ans4 ,answer:realans};
               questions.push(newquestion);
           
               document.getElementById("qid").value = "";
               document.getElementById("op1").value = "";
               document.getElementById("op2").value = "";
               document.getElementById("op3").value = "";
               document.getElementById("op4").value = "";  
               document.getElementById("real").value = ""; 
               i++;
               if(noofques==i){
          document.getElementById("questionpaper").innerHTML="";
          document.getElementById("noofquestions").innerHTML="you have successfully created quiz with "+noofques + " questions";
          
                        return;
              }
               
               }
              )}

  //Start Quiz

//  function startquiz(){
  
//  if(questions.length==0){
//     document.getElementById("statement").innerHTML="Please Create Quiz";
//      return;
//   }
//    let sq=document.createElement("h1");sq.id="squestion";
//  let sans1=document.createElement("button");sans1.id="sanswer1";sans1.className="option";sans1.addEventListener("click",result);
//    let sans2=document.createElement("button");sans2.id="sanswer2";sans2.className="option";sans2.addEventListener("click",result);
//    let sans3=document.createElement("button");sans3.id="sanswer3";sans3.className="option";sans3.addEventListener("click",result);
//    let sans4=document.createElement("button");sans4.id="sanswer4";sans4.className="option";sans4.addEventListener("click",result);
//    let ssub=document.createElement("button");ssub.id="sbutton";ssub.innerText="Submit";
//    let quiz=document.getElementById("startdiv");
    
// quiz.appendChild(sq);quiz.appendChild(sans1);quiz.appendChild(sans2);
// quiz.appendChild(sans3);quiz.appendChild(sans4);quiz.appendChild(ssub);
// let x=0;
//   if(x==0){
//    sq.innerHTML=questions[x].question;
//  sans1.innerText=questions[x].answer1;
//  sans2.innerText=questions[x].answer2;
//  sans3.innerText=questions[x].answer3;
//  sans4.innerText=questions[x].answer4;
 
//  x++;
//   }
 
// ssub.addEventListener("click",function startquiz2(){
//   if(x==questions.length){
//     document.getElementById("startdiv").innerHTML="";
//  document.getElementById("success").innerHTML=count;
// return;
    
//   }
//   sq.innerHTML=questions[x].question;
//  sans1.innerText=questions[x].answer1;
//  sans2.innerText=questions[x].answer2;
//  sans3.innerText=questions[x].answer3;
//  sans4.innerText=questions[x].answer4;
//  x++;

// })
// let count=0;
// function result(){
//   const buttonselect = document.querySelectorAll(".option");

// buttonselect.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const clickans = event.target.innerText;
//     console.log( "clicked ",clickans)
//     if (clickans === questions[x-1].answer) {
//       count++;
//     }console.log("correct",count)
//     console.log("Array",questions[x-1].answer)
//   })});
            


// }

let x = 0;
let count = 0;

function startquiz() {
  if (questions.length == 0) {
    document.getElementById("statement").innerHTML = "Please Create Quiz";
    return;
  }

  let sq = document.createElement("h1"); sq.id = "squestion";
  let sans1 = document.createElement("button"); sans1.className = "option";sans1.id="sop1";
  let sans2 = document.createElement("button"); sans2.className = "option";sans2.id="sop2";
  let sans3 = document.createElement("button"); sans3.className = "option";sans3.id="sop3";
  let sans4 = document.createElement("button"); sans4.className = "option";sans4.id="sop4";
  let ssub = document.createElement("button"); ssub.innerText = "Submit";

  let quiz = document.getElementById("startdiv");
  quiz.appendChild(sq);
  quiz.appendChild(sans1);
  quiz.appendChild(sans2);
  quiz.appendChild(sans3);
  quiz.appendChild(sans4);
  quiz.appendChild(ssub);

  const optionButtons = [sans1, sans2, sans3, sans4];

  optionButtons.forEach(btn => {
    btn.addEventListener("click", (event) => {
      const clickans = event.target.innerText;
     document.getElementById(event.target.id).style.backgroundColor="red";
      if (clickans === questions[x - 1].answer) {
        count++;
      }
    });
  });

  function loadQuestion() {
    if (x === questions.length) {
      document.getElementById("startdiv").innerHTML = "";
      document.getElementById("success").innerHTML = `Your Score: ${count}`;
      return;
    }sop1.style.backgroundColor="white";
    sop2.style.backgroundColor="white";
    sop3.style.backgroundColor="white";
    sop4.style.backgroundColor="white";


    sq.innerText = questions[x].question;
    sans1.innerText = questions[x].answer1;
    sans2.innerText = questions[x].answer2;
    sans3.innerText = questions[x].answer3;
    sans4.innerText = questions[x].answer4;
    x++;
  }

  loadQuestion();

  ssub.addEventListener("click", loadQuestion);
}


 
