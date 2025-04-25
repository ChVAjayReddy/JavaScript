let dob=document.getElementById("dob");
let agebutton=document.getElementById("age");

let res;
agebutton.addEventListener("click", function()
{ let dateof=dob.value;
    if( dateof==='')
    {
        document.getElementById("result").innerHTML= "Please enter date of birth";
    }
    else 
     { 

let birthDate = new Date(dateof);
            let today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();     

        document.getElementById("result").innerHTML= "Your age is "+ age + " years old";
    }


});
