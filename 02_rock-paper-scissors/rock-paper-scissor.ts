const rock: string = 'rock';
const paper: string = 'paper';
const scissors: string = 'scissors';
const draw: string = 'draw';

// Return the wining argument
// If argumnents are the same, return 'draw'
const play = (arg1: string, arg2: string) => {
  const validChoices = [rock, paper, scissors];

  // Return undefined if arguments are invalid
  if (!validChoices.includes(arg1) || !validChoices.includes(arg2)) {
    return undefined;
  }

  // Check for arguments equality and return draw
  if (arg1 === arg2) return draw;

  // Paper covers rock
  if ((arg1 === paper && arg2 === rock) || (arg2 === paper && arg1 === rock))
    return paper;

  // Rock breaks scissors
  if (
    (arg1 === rock && arg2 === scissors) ||
    (arg2 === rock && arg1 === scissors)
  )
    return rock;

  // Scissors cuts paper
  if (
    (arg1 === scissors && arg2 === paper) ||
    (arg2 === scissors && arg1 === paper)
  )
    return scissors;
};
