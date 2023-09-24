let yourscore = document.querySelector('.container .your-score');
let computerscore = document.querySelector('.container .computer-score');
let choicesBox = document.querySelector('.container .choices');
let userChoiceText = document.querySelector('.container .choices .your-choice');
let computerChoiceText = document.querySelector('.container .choices .computer-choice');
let resultBox = document.querySelector('.container .result');
let result = document.querySelector('.container .result span');

let your_score = 0;
let computer_score = 0;

let getUserChoice =(userchoice)=>{
 choicesBox.style.display = 'block';
 resultBox.style.display = 'block';
 
 //computer random choice
 let choices = ['snake','water','gun'];
 let randomChoice = choices[Math.floor(Math.random() * choices.length)];
 
 userChoiceText.innerHTML = `You choose <span style="font-weight:600">${userchoice}</span>`;
 computerChoiceText.innerHTML = `Computer choose <span style="font-weight:600">${randomChoice}</span>`;
 
 let outcomes = {
  snakesnake:'Draw', 
  snakewater:'You', 
  snakegun:'Cpu', 
  watersnake:'You', 
  waterwater:'Draw', 
  watergun:'You', 
  gunsnake:'You', 
  gunwater:'Cpu', 
  gungun:'Draw'
 }
 
 let outcomesValue = outcomes[userchoice + randomChoice];
 if(outcomesValue == 'You'){
    your_score++;  
    yourscore.innerHTML = `You: <span style="font-weight:600">${your_score}</span>`;
 }else if(outcomesValue == 'Cpu'){
   computer_score++;      
   computerscore.innerHTML = `Computer: <span style="font-weight:600">${computer_score}</span>`;
 }
 console.log(computer_score)
 result.innerHTML = userchoice == randomChoice ? 'Draw' : `${outcomesValue} Win`;
}
