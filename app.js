let questions = new Array();
let answerarray=[];
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
  let check1=document.createElement("input");check1.type="radio";check1.id='ch1';questionpaper.appendChild(check1);check1.name="radiobtn";check1.className="classradiobtn";
  let option2=document.createElement("input");option2.type="text";option2.placeholder="option2";option2.id="op2"; questionpaper.appendChild(option2);
  let check2=document.createElement("input");check2.type="radio";check2.id='ch2';questionpaper.appendChild(check2);check2.name="radiobtn";check2.className="classradiobtn";
  let option3=document.createElement("input");option3.type="text";option3.placeholder="option3";option3.id="op3";questionpaper.appendChild(option3);
  let check3=document.createElement("input");check3.type="radio";check3.id='ch3'; questionpaper.appendChild(check3);check3.name="radiobtn";check3.className="classradiobtn";
  let option4=document.createElement("input");option4.type="text";option4.placeholder="option4";option4.id="op4"; questionpaper.appendChild(option4);
let check4=document.createElement("input");check4.type="radio";check4.id='ch4';questionpaper.appendChild(check4);check4.name="radiobtn";check4.className="classradiobtn";
  // let realanswer=document.createElement("input");realanswer.type="text";realanswer.placeholder="Enter Answer";realanswer.id="real"; questionpaper.appendChild(realanswer);
  // realanswer.style.backgroundColor="yellow";realanswer.style.fontWeight = "bold";
  // option1.value="option1";option2.value="option2";option3.value="option3";option4.value="option4";
  check1.value="option1";check2.value="option2";check3.value="option3";check4.value="option4";
  let questionsub=document.createElement("button"); questionsub.innerText="submit";        
   questionpaper.appendChild(questionsub);
   const radioButtons = [check1, check2, check3, check4];

 radioButtons.forEach(radiobutton => {
    radiobutton.addEventListener("change", (event) => {
      let clickansradio = event.target.value;
      answerarray.push(clickansradio);
      console.log(answerarray)
      
    });
  });

     questionsub.addEventListener("click", function posting(){
     
                
       let qpaper = document.getElementById("qid").value;
         let ans1 = document.getElementById("op1").value;
           let ans2 = document.getElementById("op2").value;
             let ans3 = document.getElementById("op3").value;
               let ans4 = document.getElementById("op4").value;
                
               let newquestion = {question: qpaper,answer1:ans1,answer2:ans2,answer3:ans3,answer4:ans4 };
               questions.push(newquestion);
           
               document.getElementById("qid").value = "";
               document.getElementById("op1").value = "";
               document.getElementById("op2").value = "";
               document.getElementById("op3").value = "";
               document.getElementById("op4").value = "";  
              

                           i++;
                           console.log(questions)
               if(noofques==i){
          document.getElementById("questionpaper").innerHTML="";
          document.getElementById("noofquestions").innerHTML="you have successfully created quiz with "+noofques + " questions";
          
                        return;
              }
               
               }
              )}

  

let x = 0;
let count = 0;

function startquiz() {
  document.getElementById("noofquestions").innerHTML="";
  if (questions.length == 0) {
    document.getElementById("statement").innerHTML = "Please Create Quiz";
    return;
  }

  let sq = document.createElement("h1"); sq.id = "squestion";
  let sans1 = document.createElement("button"); sans1.className = "option";sans1.id="sop1";sans1.value="option1";
  let sans2 = document.createElement("button"); sans2.className = "option";sans2.id="sop2";sans2.value="option2";
  let sans3 = document.createElement("button"); sans3.className = "option";sans3.id="sop3";sans3.value="option3";
  let sans4 = document.createElement("button"); sans4.className = "option";sans4.id="sop4";sans4.value="option4";
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
      const clickans = event.target.id;
      const clicked=event.target.value;
     document.getElementById(event.target.id).style.backgroundColor="red";
      if (clicked === answerarray[x - 1]) {
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


 
