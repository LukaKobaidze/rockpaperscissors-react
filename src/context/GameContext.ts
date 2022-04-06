import { createContext } from 'react';
import { GameButtons, Gamemode, Result } from 'shared/types';

type Context = {
  state: {
    score: number;
    gamemode: Gamemode;
    youPicked: GameButtons | undefined;
    housePicked: GameButtons | undefined;
    result: Result | undefined;
  };
  handlers: {
    onPick: (picked: GameButtons) => void;
    onScoreIncrement: () => void;
    onScoreDecrement: () => void;
    onPlayAgain: () => void;
    onGamemodeChange: (gamemode: Gamemode) => void;
  };
};

const GameContext = createContext<Context>({
  state: {
    score: 0,
    gamemode: 'RockPaperScissors',
    youPicked: undefined,
    housePicked: undefined,
    result: undefined,
  },
  handlers: {
    onPick: () => {},
    onScoreIncrement: () => {},
    onScoreDecrement: () => {},
    onPlayAgain: () => {},
    onGamemodeChange: () => {},
  },
});

export default GameContext;
