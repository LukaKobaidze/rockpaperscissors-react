import { useState } from 'react';
import { useStorageState } from 'hooks';
import { GameButtons, Gamemode, Result } from 'shared/types';
import { getResult, pickRandom } from './utils';
import GameContext from './GameContext';

interface Props {
  children: React.ReactNode;
}

const GameContextProvider = ({ children }: Props) => {
  const [score, setScore] = useStorageState<number>('score', 0);
  const [gamemode, setGamemode] = useStorageState<Gamemode>(
    'gamemode',
    'RockPaperScissors'
  );
  const [youPicked, setYouPicked] = useState<GameButtons>();
  const [housePicked, setHousePicked] = useState<GameButtons>();
  const [result, setResult] = useState<Result>();

  const onPick = (picked: GameButtons) => {
    const house = pickRandom(gamemode);

    setYouPicked(picked);
    setHousePicked(house);

    setResult(getResult(picked, house, gamemode));
  };

  const onScoreIncrement = () => {
    setScore((prevState) => prevState + 1);
  };

  const onScoreDecrement = () => {
    return setScore((prevState) => Math.max(prevState - 1, 0));
  };

  const onPlayAgain = () => {
    setYouPicked(undefined);
    setHousePicked(undefined);
    setResult(undefined);
  };

  const onGamemodeChange = (gamemode: Gamemode) => {
    setGamemode(gamemode);
  };

  const state = { score, gamemode, youPicked, housePicked, result };
  const handlers = {
    onPick,
    onScoreIncrement,
    onScoreDecrement,
    onPlayAgain,
    onGamemodeChange,
  };
  return (
    <GameContext.Provider value={{ state, handlers }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
