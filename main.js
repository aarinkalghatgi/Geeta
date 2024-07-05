var inputbox=document.getElementById("input");
var submit=document.getElementById("submit");
var clear1=document.getElementById("clear");
var h1=document.getElementById("h1");
var i=document.getElementById("i");
let width=window.innerWidth;
let width2=window.innerWidth;
let width3=window.innerWidth;
var htmlt=document.getElementById("htmlt");
var gp0=document.getElementById("gp0");
var faxs=document.getElementById("faxs");
var html=document.getElementById("html");
var counter=1;  


function center(){
 width=width/2;
 width=width-120;
 inputbox.style.marginLeft=width+"px";
 width2=(width2/2)-400;
 i.style.marginLeft=width2+"px";
 width3=(width3/2)-110;
 faxs.style.marginLeft=width3+"px";
}

inputbox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submit").click();
  }
});
inputbox.addEventListener("keyup", function(event) {
  if (event.keyCode === 46) {
   event.preventDefault();
   document.getElementById("clear").click();
  }
});
submit.onclick=input;

function input(){
  if(inputbox.value==1){  window.open("|a1.html",'popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  }
  
 else if(inputbox.value==2){
    window.open('|a2.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  }
  else if(inputbox.value==3){
      window.open('|a3.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==4){
      window.open('|a4.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==5){
      window.open('|a5.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==6){
      window.open('|a6.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==7){
      window.open('|a7.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==8){
    window.open('|a8.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==9){
    window.open('|a9.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==10){
window.open('|a10.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==11){
    window.open('|a11.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==12){

      window.open('|a12.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==13){
      
      window.open('|a13.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==14){
      window.open('|a14.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==15){
    window.open('|a15.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==16){
      window.open('|a16.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==17){
      window.open('|a17.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==18){
      window.open('|a18.html','popUpWindow','height=1000,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
  } 
  else if(inputbox.value==""){
    alert("You didn't enter anything");
  }
  else{
    alert("Please enter a number between 1-18");
  }

}
clear1.onclick=clear;
function clear(){
  inputbox.value="";
}
faxs.onclick=facts;
function facts(){
  var what=Math.floor(Math.random()*5)+1;
  if (what==1){
    alert("Did you know that gita is not only followed by indians? Famous German scienctist Albert Einstein also followed gita.");
  }
  
  else if(what==2){
    alert("Did you know that Bhagavad Gita is an Indian sacred text or a collection of verses in the Mahabharata. They are the oldest scripture of the world and guides the lives of people.");
  }
  else if(what==3){
    alert("Did you know that gita is an epic dialogue that took place between Pandava prince Arjuna and his charioteer Lord Shri Krishna. Arjuna was dithering from his duties as a warrior and Lord Krishna explained to him the meaning of life, the self, universe, and God.");
  
  }
  else if(what==4){
    alert("Did you know that Bhagavad Gita is a series of sermons given by Lord Krishna to Arjuna to explain him the meaning of war and life. Gita not only focuses on doing your duties but it is the way to live life.");
  }
  else if(what==5){
    alert("Did you know that it wasn't only Arjuna who acquired the knowledge of Bhagavad Gita from Krishna. Lord Hanuman, Sanjaya and Barbarik also listened to the entire narration.Hanuman was with Arjuna's Chariot, Sanjaya who was blessed with divine vision by Veda Vyasa to narrated the occurrences at the battle in Kurukshetra and son of Ghatotkach, Barbarik watched it all from a hilltop.");
  }
}
