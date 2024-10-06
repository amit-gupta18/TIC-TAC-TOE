let box = document.querySelectorAll(".button");
let turnO = true;
let finish = document.querySelector(".finish");
let reset = document.querySelector(".reset");
let finalresult = document.querySelector(".finalres");
let showres = document.querySelector(".showres");
let gameover = document.querySelector(".gameover");
let winner = document.querySelector(".winner");

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let plO = 0;
let plX = 0;

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1val = box[pattern[0]].innerText;
    let pos2val = box[pattern[1]].innerText;
    let pos3val = box[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        disabledBox();
        break;
      }
    }
  }
};

const showWinner = (pos1val) => {
  if (pos1val === "O") {
    plO++;
    console.log(plO);
    document.querySelector(".p1").innerHTML = plO;
    document.querySelector(".p1").style.color = "green";
  } else if (pos1val === "X") {
    plX++;
    document.querySelector(".p2").innerHTML = plX;
    document.querySelector(".p2").style.color = "green";
  }
  setTimeout(autofinish, 500);
};

const disabledBox = () => {
  box.forEach((box) => {
    box.disabled = true;
  });
};

finish.addEventListener("click", () => {
  box.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  });
  turnO = true;
});

const autofinish = () => {
  box.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  });
  turnO = true;
};

showres.addEventListener("click", () => {
  if (plO > plX) {
    finalresult.style.display = "none";
    gameover.style.display = "block";
    winner.style.color = "green";
    winner.innerHTML = "O";
  } else if (plX > plO) {
    finalresult.style.display = "none";
    gameover.style.display = "block";
    winner.innerHTML = "X";
    winner.stlye.color = "green";
  } else if (plX == plO) {
    finalresult.style.display = "none";
    gameover.style.display = "block";
    gameover.innerHTML = "Draw";
  }
});
reset.addEventListener("click", () => {
    alert("are you sure want to reset the game? All progress will be lost.")
  console.log("reset was clicked");
  box.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
    turnO = true;
  });
  
  plO = 0;
  plX = 0;
  console.log(plO);
  console.log(plX);
  document.querySelector(".p1").innerHTML = plO;
  document.querySelector(".p2").innerHTML = plX;
  document.querySelector(".p1").style.color = "black";
  document.querySelector(".p2").style.color = "black";
  finalresult.style.display = "flex";
  gameover.innerHTML = "";
});
