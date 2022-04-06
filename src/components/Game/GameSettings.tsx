import { useContext, useState } from 'react';
import { GameContext } from 'context';
import { ReactComponent as IconSettings } from 'assets/images/icon-settings.svg';
import { ReactComponent as IconClose } from 'assets/images/icon-close.svg';
import logoRockPaperScissors from 'assets/images/logo.svg';
import logoRockPaperScissorsLizardSpock from 'assets/images/logo-lizardspock.svg';
import imageRockPaperScissors from 'assets/images/image-rockpaperscissors.png';
import imageRockPaperScissorsLizardSpock from 'assets/images/image-rockpaperscissorslizardspock.png';
import { Backdrop, Modal, TextOnHover } from 'components/UI';
import styles from 'styles/Game/GameSettings.module.scss';

const GameSettings = () => {
  const {
    state: { gamemode },
    handlers: { onGamemodeChange },
  } = useContext(GameContext);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <TextOnHover
        text="Settings"
        position="top"
        classNameWrapper={styles['settings__button__wrapper']}
      >
        <button onClick={toggleModal} className={styles['settings__button']}>
          <IconSettings />
        </button>
      </TextOnHover>

      {showModal && (
        <>
          <Backdrop onClick={toggleModal} />
          <Modal className={styles['settings__modal']}>
            <header className={styles['settings__modal__header']}>
              <h2>SETTINGS</h2>
              <button
                className={styles['settings__modal__btn-close']}
                onClick={toggleModal}
              >
                <IconClose />
              </button>
            </header>
            <section className={styles['settings__gamemode']}>
              <h3>GAMEMODE</h3>
              <div>
                <div
                  className={`${styles['button__wrapper']} ${
                    gamemode === 'RockPaperScissors' ? styles.active : ''
                  }`}
                >
                  <div className={styles['button__logo']}>
                    <img src={logoRockPaperScissors} alt="RockPaperScissors" />
                  </div>
                  <div className={styles['button__image']}>
                    <img src={imageRockPaperScissors} alt="RockPaperScissors" />
                  </div>
                  <button
                    className={styles.button}
                    onClick={() => onGamemodeChange('RockPaperScissors')}
                  />
                </div>
                <div
                  className={`${styles['button__wrapper']} ${
                    gamemode === 'RockPaperScissorsLizardSpock'
                      ? styles.active
                      : ''
                  }`}
                >
                  <div className={styles['button__logo']}>
                    <img
                      src={logoRockPaperScissorsLizardSpock}
                      alt="RockPaperScissorsLizardSpock"
                    />
                  </div>
                  <div className={styles['button__image']}>
                    <img
                      src={imageRockPaperScissorsLizardSpock}
                      alt="RockPaperScissorsLizardSpock"
                    />
                  </div>
                  <button
                    className={styles.button}
                    onClick={() =>
                      onGamemodeChange('RockPaperScissorsLizardSpock')
                    }
                  />
                </div>
              </div>
            </section>
          </Modal>
        </>
      )}
    </>
  );
};

export default GameSettings;
