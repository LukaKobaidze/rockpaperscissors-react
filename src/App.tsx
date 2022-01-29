import { useCallback, useEffect, useState } from 'react';
import Header from 'components/Header/Header';
import Game from 'components/Game/Game';

export const gameModes = [
  'RockPaperScissors',
  'RockPaperScissorsLizardSpock',
] as const;

export const rockPaperScissorsButtons = ['rock', 'paper', 'scissors'] as const;

export const rockPaperScissorsLizardSpockButtons = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock',
] as const;

export type gameButtonsType =
  | typeof rockPaperScissorsButtons
  | typeof rockPaperScissorsLizardSpockButtons;

const App = () => {
  // Get score from local storage
  const initialScore = () => Number(window.localStorage.getItem('score')) || 3;

  const [score, setScore] = useState(initialScore);

  // Get game mode from local storage
  const initialGameMode = () =>
    (window.localStorage.getItem('gameMode') as typeof gameModes[number]) ||
    'RockPaperScissors';

  const [gameMode, setGameMode] =
    useState<typeof gameModes[number]>(initialGameMode);

  useEffect(() => {
    // Save current score in local storage
    window.localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    // Change title of the document based on current game mode
    const title = document.title;
    const author = title.slice(title.indexOf('|'));
    document.title = gameMode + ' ' + author;

    // Save current game mode in local storage
    window.localStorage.setItem('gameMode', gameMode);
  }, [gameMode]);

  const scoreIncrementHandler = useCallback(() => {
    setScore(prevState => prevState + 1);
  }, []);

  const scoreDecrementHandler = useCallback(() => {
    setScore(prevState => prevState - 1);
  }, []);

  const changeGameModeHandler = (mode: typeof gameModes[number]) => {
    setGameMode(mode);
  };

  return (
    <>
      <Header score={score} gameMode={gameMode} />
      <main className="main">
        <Game
          gameMode={gameMode}
          changeGameModeHandler={changeGameModeHandler}
          scoreIncrementHandler={scoreIncrementHandler}
          scoreDecrementHandler={scoreDecrementHandler}
        />
      </main>
    </>
  );
};

export default App;
