import {
  Gamemode,
  rockPaperScissorsButtons,
  rockPaperScissorsLizardSpockButtons,
} from 'shared/types';

const pickRandom = (gamemode: Gamemode) => {
  let buttons =
    gamemode === 'RockPaperScissors'
      ? rockPaperScissorsButtons
      : rockPaperScissorsLizardSpockButtons;

  return buttons[Math.floor(Math.random() * buttons.length)];
};

export default pickRandom;
