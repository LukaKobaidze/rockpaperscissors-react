import { gameButtonsType, gameModes } from 'App';
import { resultType } from './GameResults';

export const getResult = (
  you: gameButtonsType[number],
  opponent: gameButtonsType[number],
  gameMode: typeof gameModes[number]
): resultType => {
  let result: resultType;
  if (gameMode === 'RockPaperScissors') {
    /* Rules of RockPaperScissors */
    switch (true) {
      /* ROCK */
      case you === 'rock' && opponent === 'rock':
        result = 'draw';
        break;
      case you === 'rock' && opponent === 'paper':
        result = 'lose';
        break;
      case you === 'rock' && opponent === 'scissors':
        result = 'win';
        break;

      /* PAPER */
      case you === 'paper' && opponent === 'rock':
        result = 'win';
        break;
      case you === 'paper' && opponent === 'paper':
        result = 'draw';
        break;
      case you === 'paper' && opponent === 'scissors':
        result = 'lose';
        break;

      /* SCISSORS */
      case you === 'scissors' && opponent === 'rock':
        result = 'lose';
        break;
      case you === 'scissors' && opponent === 'paper':
        result = 'win';
        break;
      case you === 'scissors' && opponent === 'scissors':
        result = 'draw';
        break;
    }
  }

  if (gameMode === 'RockPaperScissorsLizardSpock') {
    /* Rules of RockPaperScissorsLizardSpock */
    switch (true) {
      /* ROCK */
      case you === 'rock' && opponent === 'rock':
        result = 'draw';
        break;
      case you === 'rock' && opponent === 'paper':
        result = 'lose';
        break;
      case you === 'rock' && opponent === 'scissors':
        result = 'win';
        break;
      case you === 'rock' && opponent === 'lizard':
        result = 'win';
        break;
      case you === 'rock' && opponent === 'spock':
        result = 'lose';
        break;

      /* PAPER */
      case you === 'paper' && opponent === 'rock':
        result = 'win';
        break;
      case you === 'paper' && opponent === 'paper':
        result = 'draw';
        break;
      case you === 'paper' && opponent === 'scissors':
        result = 'lose';
        break;
      case you === 'paper' && opponent === 'lizard':
        result = 'lose';
        break;
      case you === 'paper' && opponent === 'spock':
        result = 'win';
        break;

      /* SCISSORS */
      case you === 'scissors' && opponent === 'rock':
        result = 'lose';
        break;
      case you === 'scissors' && opponent === 'paper':
        result = 'win';
        break;
      case you === 'scissors' && opponent === 'scissors':
        result = 'draw';
        break;
      case you === 'scissors' && opponent === 'lizard':
        result = 'win';
        break;
      case you === 'scissors' && opponent === 'spock':
        result = 'lose';
        break;

      /* LIZARD */
      case you === 'lizard' && opponent === 'rock':
        result = 'lose';
        break;
      case you === 'lizard' && opponent === 'paper':
        result = 'win';
        break;
      case you === 'lizard' && opponent === 'scissors':
        result = 'lose';
        break;
      case you === 'lizard' && opponent === 'lizard':
        result = 'draw';
        break;
      case you === 'lizard' && opponent === 'spock':
        result = 'win';
        break;

      /* SPOCK */
      case you === 'spock' && opponent === 'rock':
        result = 'win';
        break;
      case you === 'spock' && opponent === 'paper':
        result = 'lose';
        break;
      case you === 'spock' && opponent === 'scissors':
        result = 'win';
        break;
      case you === 'spock' && opponent === 'lizard':
        result = 'lose';
        break;
      case you === 'spock' && opponent === 'spock':
        result = 'draw';
        break;
    }
  }
  return result!;
};
