import { gameButtonsType, gameModes } from 'App';
import { ReactComponent as BgTriangle } from 'assets/images/bg-triangle.svg';
import { ReactComponent as BgPentagon } from 'assets/images/bg-pentagon.svg';
import GameButton from './GameButton';
import 'styles/Game/GamePick.scss';

type Props = {
  gameMode: typeof gameModes[number];
  gameButtons: gameButtonsType;
  pickHandler: (pick: gameButtonsType[number]) => void;
};

const GamePick = ({ gameMode, gameButtons, pickHandler }: Props) => {
  return (
    <div className={`game-pick game-pick--${gameMode}`}>
      {gameButtons.map(button => (
        <GameButton
          key={button}
          type={button}
          boxShadowSize={
            gameMode === 'RockPaperScissorsLizardSpock' ? '8px' : undefined
          }
          className={`game-pick--${gameMode}__${button}`}
          onClick={() => pickHandler(button)}
        />
      ))}
      <div className={`game-pick__background`}>
        {gameMode === 'RockPaperScissors' && <BgTriangle />}
        {gameMode === 'RockPaperScissorsLizardSpock' && <BgPentagon />}
      </div>
    </div>
  );
};

export default GamePick;
