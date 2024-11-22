let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgCont = document.querySelector('.msgContainer');
let msg = document.querySelector('.msg');

let turnO = true; //playerO, playerX
let count = 0;
const winPatterns = [
  [0, 1 ,2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const resetGame = () =>{
    turnO = true;
    boxEnabled();
    msgCont.classList.add("hide");
    count = 0;
  }


boxes.forEach((box) => {
    box.addEventListener("click", () => {
    count++;
      if(turnO){
        box.innerText = "O";
        box.style.color = "#805896";
        turnO = false;
      }
      else{
        box.innerText = "X";
        box.style.color = "#FF7373";
        turnO = true;
      }
      box.disabled = true;

      checkWinner();
    })
})



const boxDisabled = () =>{
  for(box of boxes){
    box.disabled = true;
  }
}

const boxEnabled = () =>{
  for(box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgCont.classList.remove("hide");
    boxDisabled();
}

const drawGame = () => {
        msgCont.classList.remove("hide");
        msg.innerText = "Game Over, Draw!"
 }


const checkWinner = () =>{
    for(pattern of winPatterns) {
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;
        
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
              showWinner(pos1Val);
            }
            else if(count === 9){
              drawGame();
            }  
        }
      }
  }


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);