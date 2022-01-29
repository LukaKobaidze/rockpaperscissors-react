import { gameModes } from 'App';
import HeaderLogo from './HeaderLogo';
import HeaderScore from './HeaderScore';
import 'styles/Header/Header.scss';

type Props = {
  score: number;
  gameMode: typeof gameModes[number];
};

const Header = ({ score, gameMode }: Props) => {
  return (
    <header className="header">
      <div className="header__content">
        <HeaderLogo gameMode={gameMode} />
        <HeaderScore score={score} />
      </div>
    </header>
  );
};

export default Header;
