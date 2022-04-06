import { GameButtons, Gamemode, Result } from 'shared/types';

const getResult = (
  you: GameButtons,
  opponent: GameButtons,
  gamemode: Gamemode
): Result => {
  // let result: Result;
  if (gamemode === 'RockPaperScissors') {
    /* Rules of RockPaperScissors */
    switch (true) {
      /* ROCK */
      case you === 'rock' && opponent === 'rock':
        return 'tie';
      case you === 'rock' && opponent === 'paper':
        return 'lose';
      case you === 'rock' && opponent === 'scissors':
        return 'win';

      /* PAPER */
      case you === 'paper' && opponent === 'rock':
        return 'win';
      case you === 'paper' && opponent === 'paper':
        return 'tie';
      case you === 'paper' && opponent === 'scissors':
        return 'lose';

      /* SCISSORS */
      case you === 'scissors' && opponent === 'rock':
        return 'lose';
      case you === 'scissors' && opponent === 'paper':
        return 'win';
      case you === 'scissors' && opponent === 'scissors':
        return 'tie';
    }
  } else if (gamemode === 'RockPaperScissorsLizardSpock') {
    /* Rules of RockPaperScissorsLizardSpock */
    switch (true) {
      /* ROCK */
      case you === 'rock' && opponent === 'rock':
        return 'tie';
      case you === 'rock' && opponent === 'paper':
        return 'lose';
      case you === 'rock' && opponent === 'scissors':
        return 'win';
      case you === 'rock' && opponent === 'lizard':
        return 'win';
      case you === 'rock' && opponent === 'spock':
        return 'lose';

      /* PAPER */
      case you === 'paper' && opponent === 'rock':
        return 'win';
      case you === 'paper' && opponent === 'paper':
        return 'tie';
      case you === 'paper' && opponent === 'scissors':
        return 'lose';
      case you === 'paper' && opponent === 'lizard':
        return 'lose';
      case you === 'paper' && opponent === 'spock':
        return 'win';

      /* SCISSORS */
      case you === 'scissors' && opponent === 'rock':
        return 'lose';
      case you === 'scissors' && opponent === 'paper':
        return 'win';
      case you === 'scissors' && opponent === 'scissors':
        return 'tie';
      case you === 'scissors' && opponent === 'lizard':
        return 'win';
      case you === 'scissors' && opponent === 'spock':
        return 'lose';

      /* LIZARD */
      case you === 'lizard' && opponent === 'rock':
        return 'lose';
      case you === 'lizard' && opponent === 'paper':
        return 'win';
      case you === 'lizard' && opponent === 'scissors':
        return 'lose';
      case you === 'lizard' && opponent === 'lizard':
        return 'tie';
      case you === 'lizard' && opponent === 'spock':
        return 'win';

      /* SPOCK */
      case you === 'spock' && opponent === 'rock':
        return 'win';
      case you === 'spock' && opponent === 'paper':
        return 'lose';
      case you === 'spock' && opponent === 'scissors':
        return 'win';
      case you === 'spock' && opponent === 'lizard':
        return 'lose';
      case you === 'spock' && opponent === 'spock':
        return 'tie';
    }
  }

  return 'tie';
};

export default getResult;
