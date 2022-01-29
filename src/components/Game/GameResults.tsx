import { useEffect, useState } from 'react';
import { gameButtonsType, gameModes } from 'App';
import { getResult } from './gameresults-functions';
import Button from 'components/UI/Button';
import GameButton from './GameButton';
import 'styles/Game/GameResults.scss';
import useViewportDimensions from 'hooks/useViewportDimensions';

export type resultType = 'win' | 'lose' | 'draw';

type Props = {
  gameMode: typeof gameModes[number];
  youPicked: gameButtonsType[number];
  housePicked: gameButtonsType[number] | undefined;
  scoreIncrementHandler: () => void;
  scoreDecrementHandler: () => void;
  playAgainHandler: () => void;
};

const GameResults = (props: Props) => {
  const {
    gameMode,
    youPicked,
    housePicked,
    scoreIncrementHandler,
    scoreDecrementHandler,
    playAgainHandler,
  } = props;

  const [result, setResult] = useState<resultType>();
  const [renderHousePicked, setRenderHousePicked] = useState(false);
  const [renderResult, setRenderResult] = useState(false);
  const { width: viewportWidth } = useViewportDimensions();

  useEffect(() => {
    if (renderResult) {
      if (result === 'win') {
        scoreIncrementHandler();
      }
      if (result === 'lose') {
        scoreDecrementHandler();
      }
    }
  }, [renderResult]);

  useEffect(() => {
    setResult(getResult(youPicked, housePicked!, gameMode));
  }, [youPicked, housePicked, gameMode]);

  useEffect(() => {
    const timeoutHouse = setTimeout(() => {
      setRenderHousePicked(true);
    }, 1000);

    const timeoutResult = setTimeout(() => {
      setRenderResult(true);
    }, 1250);

    return () => {
      clearTimeout(timeoutHouse);
      clearTimeout(timeoutResult);
    };
  }, []);

  return (
    <div
      className={`game-results ${
        renderResult && viewportWidth > 600 ? 'game-results--active' : ''
      }`}
    >
      <div className="game-results__you">
        <p className="game-results__text">YOU PICKED</p>
        <div
          className={`game-results__button-div ${
            renderResult && result === 'win'
              ? 'game-results__button-div--active'
              : ''
          }`}
        >
          <GameButton type={youPicked} />
        </div>
      </div>
      {renderResult && (
        <div className="game-results__result">
          <p className="game-results__result__text">
            {result === 'win' && 'YOU WIN'}
            {result === 'lose' && 'YOU LOSE'}
            {result === 'draw' && 'DRAW'}
          </p>
          <Button
            className="game-results__result__button"
            onClick={playAgainHandler}
          >
            PLAY AGAIN
          </Button>
        </div>
      )}
      <div className="game-results__house">
        <p className="game-results__text">THE HOUSE PICKED</p>
        <div
          className={`game-results__button-div ${
            renderResult && result === 'lose'
              ? 'game-results__button-div--active'
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

export default GameResults;
