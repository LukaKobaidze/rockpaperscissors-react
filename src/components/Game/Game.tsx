import { useContext } from 'react';
import { GameContext } from 'context';
import GameResult from './GameResult';
import GamePick from './GamePick';
import GameRules from './GameRules';
import GameSettings from './GameSettings';
import styles from 'styles/Game/Game.module.scss';

const Game = () => {
  const {
    state: { result },
  } = useContext(GameContext);

  return (
    <>
      {result ? <GameResult /> : <GamePick />}
      <GameRules className={styles['button-rules']} />
      <GameSettings />
    </>
  );
};

export default Game;
