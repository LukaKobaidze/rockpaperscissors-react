import { useContext } from 'react';
import { GameContext } from 'context';
import { Logo, Score } from 'components/UI';
import styles from 'styles/Header/Header.module.scss';

const Header = () => {
  const {
    state: { gamemode, score },
  } = useContext(GameContext);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles['logo-div']}>
          <Logo type={gamemode} />
        </div>
        <Score score={score} />
      </div>
    </header>
  );
};

export default Header;
