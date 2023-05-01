
  
var n = 1;  
  
function change() {
 
 n++;
var items = document.getElementsByClassName("one");   for (var i=0; i < items.length; i++)    {items[i].innerHTML = n ;}    

  var code=document.getElementById("html");
 if (code.style.display === "block") {
code.style.display = "none";
 }

var next=document.getElementById("nextbutton");  
  
if (next.style.display === "block") {
next.style.display = "none";
 }
  

}  
  
  function showhtml() 
  {
   var code=document.getElementById("html");
 if (code.style.display === "none") {
code.style.display = "block";
 }
    
var next=document.getElementById("nextbutton");
 if (next.style.display === "none") {
next.style.display = "block";
 }
    
   var ques=document.getElementById("question").value;
    document.getElementById("questioncode").innerHTML = ques;
    
    
    var opa=document.getElementById("firstoption").value;
    document.getElementById("optionAcode").innerHTML = opa;
    
    
    var opb=document.getElementById("secondoption").value;
    document.getElementById("optionBcode").innerHTML = opb;
     
    
    var opc=document.getElementById("thirdoption").value;
    document.getElementById("optionCcode").innerHTML = opc;
    
    var opd=document.getElementById("fourthoption").value;
    document.getElementById("optionDcode").innerHTML = opd;
    
     var opA = document.getElementById("Aiscorrect");   
        if(opA.checked==true)
        {document.getElementById("1Acorrectbox").innerHTML = n+"Abox";
        document.getElementById("1Bcorrectbox").innerHTML =n+"Abox";
        document.getElementById("1Ccorrectbox").innerHTML = n+"Abox";
        document.getElementById("1Dcorrectbox").innerHTML =n+"Abox";}
       
     var opB = document.getElementById("Biscorrect");   
        if(opB.checked==true)
        { document.getElementById("1Acorrectbox").innerHTML = n+"Bbox";
        document.getElementById("1Bcorrectbox").innerHTML = n+"Bbox";
        document.getElementById("1Ccorrectbox").innerHTML = n+"Bbox";
        document.getElementById("1Dcorrectbox").innerHTML = n+"Bbox"; }
       
    
     var opC = document.getElementById("Ciscorrect");   
        if(opC.checked==true)
        {document.getElementById("1Acorrectbox").innerHTML =  n+"Cbox";
        document.getElementById("1Bcorrectbox").innerHTML = n+"Cbox";
        document.getElementById("1Ccorrectbox").innerHTML = n+"Cbox";
        document.getElementById("1Dcorrectbox").innerHTML = n+"Cbox";}
       
     var opD = document.getElementById("Discorrect");   
        if(opD.checked==true)
        {document.getElementById("1Acorrectbox").innerHTML =n+"Dbox";
        document.getElementById("1Bcorrectbox").innerHTML  =n+"Dbox";
        document.getElementById("1Ccorrectbox").innerHTML  =n+"Dbox";
        document.getElementById("1Dcorrectbox").innerHTML  =n+"Dbox";}

var correctexpinput=document.getElementById("1correctexp").value;
  
document.getElementById("1correctexpcode").innerHTML = correctexpinput;

var wrongexpinput=document.getElementById("1wrongexp").value;
  
document.getElementById("1wrongexpcode").innerHTML = wrongexpinput;  


 
    
    
    
if(opA.checked==true)         {document.getElementById("1Aexp").innerHTML = n+"correctexp";         document.getElementById("1Bexp").innerHTML = n+"wrongexp";         document.getElementById("1Cexp").innerHTML = n+"wrongexp";         document.getElementById("1Dexp").innerHTML = n+"wrongexp";}    
    
    
        if(opB.checked==true)        {document.getElementById("1Aexp").innerHTML = n+"wrongexp";         document.getElementById("1Bexp").innerHTML = n+"correctexp";         document.getElementById("1Cexp").innerHTML = n+"wrongexp";         document.getElementById("1Dexp").innerHTML = n+"wrongexp";}          
          
          
if(opC.checked==true)   
  
{document.getElementById("1Aexp").innerHTML = n+"wrongexp";       document.getElementById("1Bexp").innerHTML =  n+"wrongexp";       document.getElementById("1Cexp").innerHTML = n+"correctexp";         document.getElementById("1Dexp").innerHTML =  n+"wrongexp";}                     
  
if(opD.checked==true) 
{document.getElementById("1Aexp").innerHTML = n+"wrongexp";      document.getElementById("1Bexp").innerHTML = n+"wrongexp";        document.getElementById("1Cexp").innerHTML =  n+"wrongexp";        document.getElementById("1Dexp").innerHTML = n+"correctexp";}                  
             
return false;  
    
  }
  
  


