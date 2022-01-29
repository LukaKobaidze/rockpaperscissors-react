import { useEffect, useState } from 'react';
import {
  gameModes,
  rockPaperScissorsButtons,
  rockPaperScissorsLizardSpockButtons,
} from 'App';
import GameRules from './GameRules';
import GameSettings from './GameSettings';
import GamePick from './GamePick';
import GameResults from './GameResults';

type Props = {
  gameMode: typeof gameModes[number];
  changeGameModeHandler: (mode: typeof gameModes[number]) => void;
  scoreIncrementHandler: () => void;
  scoreDecrementHandler: () => void;
};

const Game = (props: Props) => {
  const gameButtons =
    props.gameMode === 'RockPaperScissors'
      ? rockPaperScissorsButtons
      : rockPaperScissorsLizardSpockButtons;

  const [youPicked, setYouPicked] = useState<
    typeof gameButtons[number] | undefined
  >();

  const [housePicked, setHousePicked] = useState<
    typeof gameButtons[number] | undefined
  >();

  useEffect(() => {
    if (youPicked && !housePicked) {
      const randomPick =
        gameButtons[Math.floor(Math.random() * gameButtons.length)];

      setHousePicked(randomPick);
    }
  }, [youPicked, housePicked, gameButtons]);

  const pickHandler = (pick: typeof gameButtons[number]) => {
    setYouPicked(pick);
  };

  const playAgainHandler = () => {
    setYouPicked(undefined);
    setHousePicked(undefined);
  };

  return (
    <>
      {!youPicked && (
        <GamePick
          gameMode={props.gameMode}
          gameButtons={gameButtons}
          pickHandler={pickHandler}
        />
      )}
      {youPicked && (
        <GameResults
          gameMode={props.gameMode}
          youPicked={youPicked}
          housePicked={housePicked}
          scoreIncrementHandler={props.scoreIncrementHandler}
          scoreDecrementHandler={props.scoreDecrementHandler}
          playAgainHandler={playAgainHandler}
        />
      )}
      <GameRules gameMode={props.gameMode} />
      <GameSettings
        gameMode={props.gameMode}
        changeGameModeHandler={props.changeGameModeHandler}
      />
    </>
  );
};

export default Game;
