import styles from 'styles/UI/Score.module.scss';

type Props = {
  score: number;
};

const Score = ({ score }: Props) => {
  return (
    <div className={styles.score}>
      <p className={styles['score__text']}>SCORE</p>
      <span className={styles['score__score']}>{score}</span>
    </div>
  );
};

export default Score;
