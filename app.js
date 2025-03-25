window.alert(`Let's play the guessing game!`);

const actualAnswer = 15;
let playerAnswer;

for (let i = 0; i < 3; i++) {
  playerAnswer = Number(window.prompt("guess from 1 to 20"));

  // if (actualAnswer === playerAnswer) {
  //   window.alert(`Good job ${actualAnswer} is the correct answer`);
  //   break;
  // } else if (playerAnswer > actualAnswer) {
  //   window.alert("too high");
  //   // continue;
  // } else if (playerAnswer < actualAnswer) {
  //   window.alert("too low");
  // }
  // if (i === 2) {
  //   window.alert(`you missed, ${actualAnswer} was the answer!`);
  // }

  switch (true) {
    case actualAnswer === playerAnswer:
      window.alert(`Good job ${actualAnswer} is the correct answer`);
      i = 3;
      break;
    case playerAnswer > actualAnswer:
      window.alert("too high");
      break;
    case playerAnswer < actualAnswer:
      window.alert("too low");
      break;
  }
  if (i === 2) {
    window.alert(`you missed, ${actualAnswer} was the answer!`);
  }
}
