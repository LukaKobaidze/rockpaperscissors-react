import { useState } from 'react';
import { gameModes } from 'App';
import { ReactComponent as IconClose } from 'assets/images/icon-close.svg';
import { ReactComponent as ImageRules1 } from 'assets/images/image-rules.svg';
import { ReactComponent as ImageRules2 } from 'assets/images/image-rules-bonus.svg';
import Backdrop from 'components/UI/Backdrop';
import Modal from 'components/UI/Modal';
import Button from 'components/UI/Button';
import 'styles/Game/GameRules.scss';

type Props = {
  gameMode: typeof gameModes[number];
};

const GameRules = ({ gameMode }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button className="game-rules__button" onClick={showModalHandler}>
        RULES
      </Button>

      {showModal && (
        <>
          <Backdrop onClick={hideModalHandler} />
          <Modal className="game-rules__modal">
            <header className="game-rules__modal__header">
              <h2>RULES</h2>
              <button
                className="game-rules__modal__btn-close"
                onClick={hideModalHandler}
              >
                <IconClose />
              </button>
            </header>
            <div
              className={`game-rules__modal__image-div game-rules__modal__image-div--${gameMode}`}
            >
              {gameMode === 'RockPaperScissors' && <ImageRules1 />}
              {gameMode === 'RockPaperScissorsLizardSpock' && <ImageRules2 />}
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default GameRules;
