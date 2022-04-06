import { useContext, useState } from 'react';
import { GameContext } from 'context';
import { Backdrop, Button, Modal } from 'components/UI';
import { ReactComponent as IconClose } from 'assets/images/icon-close.svg';
import { ReactComponent as ImageRules1 } from 'assets/images/image-rules.svg';
import { ReactComponent as ImageRules2 } from 'assets/images/image-rules-lizardspock.svg';
import styles from 'styles/Game/GameRules.module.scss';

type Props = {
  className?: string;
};

const GameRules = ({ className }: Props) => {
  const {
    state: { gamemode },
  } = useContext(GameContext);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        className={`${styles.button} ${className}`}
        onClick={showModalHandler}
      >
        RULES
      </Button>

      {showModal && (
        <>
          <Backdrop onClick={hideModalHandler} />
          <Modal className={styles.modal}>
            <header className={styles['modal__header']}>
              <h2>RULES</h2>
              <button
                className={styles['modal__btn-close']}
                onClick={hideModalHandler}
              >
                <IconClose />
              </button>
            </header>
            <div
              className={`${styles['modal__image-div']} ${
                styles[`modal__image-div--${gamemode}`]
              }`}
            >
              {gamemode === 'RockPaperScissors' && <ImageRules1 />}
              {gamemode === 'RockPaperScissorsLizardSpock' && <ImageRules2 />}
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default GameRules;
