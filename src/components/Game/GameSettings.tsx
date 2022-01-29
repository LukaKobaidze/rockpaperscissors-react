import { useState } from 'react';
import { gameModes } from 'App';
import { ReactComponent as IconSettings } from 'assets/images/icon-settings.svg';
import { ReactComponent as IconClose } from 'assets/images/icon-close.svg';
import logoRockPaperScissors from 'assets/images/logo.svg';
import logoRockPaperScissorsLizardSpock from 'assets/images/logo-bonus.svg';
import imageRockPaperScissors from 'assets/images/image-rockpaperscissors.png';
import imageRockPaperScissorsLizardSpock from 'assets/images/image-rockpaperscissorslizardspock.png';
import Backdrop from 'components/UI/Backdrop';
import Modal from 'components/UI/Modal';
import 'styles/Game/GameSettings.scss';

type Props = {
  gameMode: typeof gameModes[number];
  changeGameModeHandler: (mode: typeof gameModes[number]) => void;
};

const GameSettings = ({ gameMode, changeGameModeHandler }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={showModalHandler} className="game-settings__button">
        <IconSettings />
      </button>

      {showModal && (
        <>
          <Backdrop onClick={hideModalHandler} />
          <Modal className="game-settings__modal">
            <header className="game-settings__modal__header">
              <h2>SETTINGS</h2>
              <button
                className="game-settings__modal__btn-close"
                onClick={hideModalHandler}
              >
                <IconClose />
              </button>
            </header>
            <section className="game-settings__gamemode">
              <h3>GAMEMODE</h3>
              <div>
                {gameModes.map(mode => (
                  <div
                    key={mode}
                    className={`game-settings__modal__gamemode-div ${
                      mode === gameMode
                        ? 'game-settings__modal__gamemode-div--active'
                        : ''
                    }`}
                  >
                    <div className="game-settings__modal__gamemode__logo">
                      {mode === 'RockPaperScissors' && (
                        <img
                          src={logoRockPaperScissors}
                          alt="RockPaperScissors"
                        />
                      )}
                      {mode === 'RockPaperScissorsLizardSpock' && (
                        <img
                          src={logoRockPaperScissorsLizardSpock}
                          alt="RockPaperScissorsLizardSpock"
                        />
                      )}
                    </div>
                    <div className="game-settings__modal__gamemode__image">
                      {mode === 'RockPaperScissors' && (
                        <img
                          src={imageRockPaperScissors}
                          alt="RockPaperScissors"
                        />
                      )}
                      {mode === 'RockPaperScissorsLizardSpock' && (
                        <img
                          src={imageRockPaperScissorsLizardSpock}
                          alt="RockPaperScissorsLizardSpock"
                        />
                      )}
                    </div>
                    <button
                      className="game-settings__modal__gamemode__button"
                      onClick={() => changeGameModeHandler(mode)}
                    ></button>
                  </div>
                ))}
              </div>
            </section>
          </Modal>
        </>
      )}
    </>
  );
};

export default GameSettings;
