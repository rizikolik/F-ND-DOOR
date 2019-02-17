let door1=document.getElementById("door1");
let door2=document.getElementById("door2");
let door3=document.getElementById("door3");
let startButton=document.getElementById("start");
let currentlyPlaying=true;
let closedDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let botDoorPath  ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors=3;
let openDoor1;
let openDoor2;
let openDoor3;
let score1=document.getElementById("zero");
let round1=document.getElementById("zero2");
round=1;
score=0;
door1.onclick =()=>{ //doors onclicks
   if(currentlyPlaying &&!isclicked(door1)) { door1.src=openDoor1;
    playDoor(door1);
   }
}
door2.onclick =()=>{
   if(currentlyPlaying &&!isclicked(door2)){ door2.src=openDoor2;
    playDoor(door2);
   }
}
    door3.onclick =()=>{
        if(currentlyPlaying &&!isclicked(door3)){
    door3.src=openDoor3;
    playDoor(door3);
        }
}
startButton.onclick =()=>{
    
    if(!currentlyPlaying){
    startRound();
    roundcounter();
    if(round===1){
        score=0;
        score1.innerHTML=score;
       
    }
   
    }
    
    
    }
let startRound=()=>{
    
    door1.src=closedDoorPath;
    door2.src=closedDoorPath;
    door3.src=closedDoorPath;
    numClosedDoors=3;
    startButton.innerHTML="Good luck!";
    currentlyPlaying= true;
   
    
    randomChoreDoorGenerator();
    
}
let isclicked=(door)=>{
    if(door.src===closedDoorPath){
       return false;
    }
    else{
       return true;
    }
}
let isBot=(door)=>
{
if(door.src===botDoorPath){
   return true;
   
}
else{
     return false;
}
}
const playDoor= (door)=>{ 
    numClosedDoors--;
   if(numClosedDoors===0){
        gameOver('win');
    }
   else if(isBot(door)){ 
         gameOver('loose');
   }
}
const randomChoreDoorGenerator =()=>{//door generator
    let   choreDoor=Math.floor(Math.random()*numClosedDoors);
    if(choreDoor===0){
        openDoor1=botDoorPath;
        openDoor2=beachDoorPath;
        openDoor3=spaceDoorPath;
    }
    else if(choreDoor===1){
        openDoor2=botDoorPath;
        openDoor1=beachDoorPath;
        openDoor3=spaceDoorPath;
    }
    else if(choreDoor===2){
        openDoor3=botDoorPath;
        openDoor1=beachDoorPath;
        openDoor2=spaceDoorPath;
    }
 
}
const gameOver=(status)=>{ //game status
    if(status==="win"){
        startButton.innerHTML="You Win!!!Want to play Again??"
        getYourScore();
    
       

    }
    else if(status==='loose')  {
        startButton.innerHTML="You lost!!!want to play Again??"
        
        
    }
    
    currentlyPlaying=false;
    if(round===10&&score>4){
        alert("YOU WON THE GAME!");
        }
    
    
}
let getYourScore=()=>{
    if(score<10&&round<10){
        score++;
        score1.innerHTML=score;

    }


    }

let roundcounter=()=>{
    if(round<10){
        round++;
        round1.innerHTML=round;
    }else{
        round=1;
        round1.innerHTML=round;
    }
}


startRound();













