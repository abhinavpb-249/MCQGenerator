function show(input, Wbox, Cbox, exp) 
{   var answer = document.getElementById(input);
    var exp = document.getElementById(exp); 
    if (answer.checked == true) {
         document.getElementById(Wbox).style.backgroundColor = "#FAA0A0";
         document.getElementById(Cbox).style.backgroundColor = "#b0f8b0"; 
        }
         
    exp.style.display = "block"; 
}