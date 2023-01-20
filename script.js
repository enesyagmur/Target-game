var a;
var repeat = 1000;
var finish=1000;

let time = setInterval(function(){
    var rnd = Math.floor(Math.random()*3);
     a = rnd;
     
    if(rnd==1){
      document.querySelector(".taskafa1").style.backgroundColor="red";
     setTimeout(function(){
      document.querySelector(".taskafa1").style.backgroundColor="black";
     },finish);
    
    }
    else if(rnd==2){
       
     document.querySelector(".taskafa2").style.backgroundColor="red";
     setTimeout(function(){
      document.querySelector(".taskafa2").style.backgroundColor="black";
     },finish);
    
    }
    else if(rnd==3){
       
      document.querySelector(".taskafa3").style.backgroundColor="red";
      setTimeout(function(){
        document.querySelector(".taskafa3").style.backgroundColor="black";
       },finish);
    
     }
     else if(rnd==4){
      setTimeout(function(){
        document.querySelector(".taskafa4").style.backgroundColor="black";
       },finish);
      document.querySelector(".taskafa4").style.backgroundColor="red";
      
      
     }
     else if(rnd==5){
       
     
      setTimeout(function(){
        document.querySelector(".taskafa5").style.backgroundColor="black";
       },finish);
       document.querySelector(".taskafa5").style.backgroundColor="red";
     }
     else if(rnd==6){
     
        setTimeout(function(){
          document.querySelector(".taskafa6").style.backgroundColor="black";
         },finish);
         document.querySelector(".taskafa6").style.backgroundColor="red";
    
     
     }
    
},repeat);

document.querySelector(".taskafa1").addEventListener("click",function(){
  if(a==1){
 
   console.log("vurdun");
    clearInterval(time);

  }
 
 
 
 })

 