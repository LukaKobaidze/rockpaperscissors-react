import 'styles/Header/HeaderScore.scss';

type Props = {
  score: number;
};

const HeaderScore = ({ score }: Props) => {
  return (
    <div className="header-score">
      <p className="header-score__text">SCORE</p>
      <span className="header-score__score">{score}</span>
    </div>
  );
};

export default HeaderScore;
