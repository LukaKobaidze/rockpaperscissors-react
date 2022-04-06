import { Gamemode } from 'shared/types';
import { ReactComponent as LogoRockPaperScissors } from 'assets/images/logo.svg';
import { ReactComponent as LogoRockPaperScissorsLizardSpock } from 'assets/images/logo-lizardspock.svg';

interface Props {
  type?: Gamemode;
}

const Logo = ({ type = 'RockPaperScissors' }: Props) => {
  return (
    <>
      {type === 'RockPaperScissors' && <LogoRockPaperScissors />}
      {type === 'RockPaperScissorsLizardSpock' && (
        <LogoRockPaperScissorsLizardSpock />
      )}
    </>
  );
};

export default Logo;
