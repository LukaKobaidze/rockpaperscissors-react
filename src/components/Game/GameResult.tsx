import { useContext, useEffect, useState } from 'react';
import { GameContext } from 'context';
import { useViewportDimensions } from 'hooks';
import { Button } from 'components/UI';
import GameButton from './GameButton';
import styles from 'styles/Game/GameResult.module.scss';

const GameResult = () => {
  const {
    state: { youPicked, housePicked, result },
    handlers: { onScoreIncrement, onScoreDecrement, onPlayAgain },
  } = useContext(GameContext);

  const [renderHousePicked, setRenderHousePicked] = useState(false);
  const [renderResult, setRenderResult] = useState(false);
  const { width: viewportWidth } = useViewportDimensions();

  useEffect(() => {
    const timeoutHouse = setTimeout(() => {
      setRenderHousePicked(true);
    }, 750);

    const timeoutResult = setTimeout(() => {
      if (result === 'win') onScoreIncrement();
      if (result === 'lose') onScoreDecrement();

      setRenderResult(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutHouse);
      clearTimeout(timeoutResult);
    };
  }, []);

  return (
    <div
      className={`${styles.results} ${
        renderResult && viewportWidth > 600 ? styles['results--active'] : ''
      }`}
    >
      <div className={styles['results__you']}>
        <p className={styles['results__text']}>YOU PICKED</p>
        <div
          className={`${styles['results__button-div']} ${
            renderResult && result === 'win'
              ? styles['results__button-div--active']
              : ''
          }`}
        >
          <GameButton type={youPicked!} />
        </div>
      </div>
      {renderResult && (
        <div className={styles['results__result']}>
          <p className={styles['results__result__text']}>
            {result === 'win' && 'YOU WIN'}
            {result === 'lose' && 'YOU LOSE'}
            {result === 'tie' && 'TIE'}
          </p>
          <Button
            className={styles['results__result__button']}
            onClick={onPlayAgain}
          >
            PLAY AGAIN
          </Button>
        </div>
      )}
      <div className={styles['results__house']}>
        <p className={styles['results__text']}>THE HOUSE PICKED</p>
        <div
          className={`${styles['results__button-div']} ${
            renderResult && result === 'lose'
              ? styles['results__button-div--active']
              : ''
          }`}
        >
          {housePicked && renderHousePicked && (
            <GameButton type={housePicked} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GameResult;
