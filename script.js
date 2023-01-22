
alert("Oyunu Başlat")

var a;
var heart=3;
var repeat=1000;
var finish=1000;


let time = setInterval(function(){
    var rnd = Math.floor(Math.random()*7);
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




function check(x,y){
  document.querySelector(x).addEventListener("click",function(){
    if(a==y){
      clearInterval(time);
     document.querySelector("body").style.backgroundColor="green";
     document.querySelector("h1").innerHTML="Oyun Bitti:Uzaylıyı Vurdun";

     
    }
    else{
     heart--;
     if(heart==2){
      document.querySelector("#heart3").style.color="white";
     }
     else if(heart==1){
      document.querySelector("#heart2").style.color="white";
     }
     else if(heart==0){
      document.querySelector("#heart1").style.color="white";
      clearInterval(time);
     document.querySelector("h1").innerHTML="Oyun Bitti:Uzaylıyı Vuramadın";
     document.querySelector("body").style.backgroundColor="red";
     document.querySelector("#heart3").style.color="red";
     document.querySelector("#heart2").style.color="red";
     document.querySelector("#heart1").style.color="red";


     
     }
       
    }
  })
}

check(".taskafa1",1);
check(".taskafa2",2);
check(".taskafa3",3);
check(".taskafa4",5);
check(".taskafa5",5);
check(".taskafa6",6);



