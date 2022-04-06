import { useContext } from 'react';
import { GameContext } from 'context';
import {
  rockPaperScissorsButtons,
  rockPaperScissorsLizardSpockButtons,
} from 'shared/types';
import { ReactComponent as BgTriangle } from 'assets/images/bg-triangle.svg';
import { ReactComponent as BgPentagon } from 'assets/images/bg-pentagon.svg';
import GameButton from './GameButton';
import styles from 'styles/Game/GamePick.module.scss';

const GamePick = () => {
  const {
    state: { gamemode },
    handlers: { onPick },
  } = useContext(GameContext);

  const buttons =
    gamemode === 'RockPaperScissors'
      ? rockPaperScissorsButtons
      : rockPaperScissorsLizardSpockButtons;

  return (
    <div className={`${styles.container} ${styles[`container--${gamemode}`]}`}>
      {buttons.map((button) => (
        <GameButton
          key={button}
          type={button}
          boxShadowSize={
            gamemode === 'RockPaperScissorsLizardSpock' ? '8px' : undefined
          }
          className={styles[`container--${gamemode}__${button}`]}
          onClick={() => onPick(button)}
        />
      ))}
      <div className={styles['container__background']}>
        {gamemode === 'RockPaperScissors' && <BgTriangle />}
        {gamemode === 'RockPaperScissorsLizardSpock' && <BgPentagon />}
      </div>
    </div>
  );
};

export default GamePick;
