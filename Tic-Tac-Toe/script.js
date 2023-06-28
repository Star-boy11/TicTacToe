console.log("Tic Tac Toe")
let turn = "X";
let popaudio = new Audio("notification.mp3")
let isgameover = false;

// Function to change the turn
let changeTurn = () => {
  return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.img-class').getElementsByTagName('img')[0].style.width = "50%";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}
// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext')
  element.addEventListener('click', () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      popaudio.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;

      }
    }
  })
})

// Adding functionality to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.img-class').getElementsByTagName('img')[0].style.width = "0px"
})


// custom modal
// Open the modal
function openModal() {
  document.getElementById('modal').style.display = 'block';
}

// Close the modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}








