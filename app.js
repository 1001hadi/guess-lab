window.alert(`Let's play the guessing game!`);

const actualAnswer = Math.floor(Math.random() * 100);
let playerAnswer;

for (let i = 0; i < 5; i++) {
  playerAnswer = Number(window.prompt("guess from 1 to 100"));
  // make sure player only enter number
  if (isNaN(playerAnswer)) window.alert("Please enter numbers between 1 - 100");

  // if (actualAnswer === playerAnswer) {
  //   window.alert(`Good job ${actualAnswer} is the correct answer`);
  //   break;
  // } else if (playerAnswer > actualAnswer) {
  //   window.alert("too high");
  //   // continue;
  // } else if (playerAnswer < actualAnswer) {
  //   window.alert("too low");
  // }

  ////////
  /////// With switch statement ---------------->

  switch (true) {
    case actualAnswer === playerAnswer:
      window.alert(`Good job ${actualAnswer} is the correct answer`);
      i = 5;
      break;
    case playerAnswer > actualAnswer:
      window.alert("too high");
      break;
    case playerAnswer < actualAnswer:
      window.alert("too low");
      break;
  }

  //  if loop over let the user know the answer
  if (i === 4) {
    window.alert(`you missed, ${actualAnswer} was the answer!`);
  }
}
