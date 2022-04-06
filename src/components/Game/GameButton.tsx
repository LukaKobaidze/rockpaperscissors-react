import { GameButtons } from 'shared/types';
import iconRock from 'assets/images/icon-rock.svg';
import iconPaper from 'assets/images/icon-paper.svg';
import iconScissors from 'assets/images/icon-scissors.svg';
import iconLizard from 'assets/images/icon-lizard.svg';
import iconSpock from 'assets/images/icon-spock.svg';
import styles from 'styles/Game/GameButton.module.scss';

type Props = {
  type: GameButtons;
  className?: string;
  boxShadowSize?: string;
  onClick?: () => void;
};

const GameButton = (props: Props) => {
  const { type, className, boxShadowSize, onClick } = props;

  const styleBoxShadow = boxShadowSize
    ? ({ '--box-shadow': boxShadowSize } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={`${styles['button__wrapper']} ${className}`}
      style={styleBoxShadow}
    >
      <button
        className={`${styles.button} ${styles[`button--${type}`]}`}
        onClick={onClick}
      >
        {type}
      </button>
      <div className={styles['button__icon-div']}>
        {type === 'rock' && <img src={iconRock} alt="rock" />}
        {type === 'paper' && <img src={iconPaper} alt="paper" />}
        {type === 'scissors' && <img src={iconScissors} alt="scissors" />}
        {type === 'lizard' && <img src={iconLizard} alt="lizard" />}
        {type === 'spock' && <img src={iconSpock} alt="spock" />}
      </div>
    </div>
  );
};

export default GameButton;
