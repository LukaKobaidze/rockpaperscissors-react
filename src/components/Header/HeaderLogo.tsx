import { gameModes } from 'App';
import { ReactComponent as LogoRockPaperScissors } from 'assets/images/logo.svg';
import { ReactComponent as LogoRockPaperScissorsLizardSpock } from 'assets/images/logo-bonus.svg';
import 'styles/Header/HeaderLogo.scss';

type Props = {
  gameMode: typeof gameModes[number];
};

const HeaderLogo = ({ gameMode }: Props) => {
  return (
    <div className="header-logo">
      {gameMode === 'RockPaperScissors' && <LogoRockPaperScissors />}
      {gameMode === 'RockPaperScissorsLizardSpock' && (
        <LogoRockPaperScissorsLizardSpock />
      )}
    </div>
  );
};

export default HeaderLogo;
