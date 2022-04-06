import { GameContextProvider } from 'context';
import Header from './Header';
import Game from './Game';

const App = () => {
  return (
    <GameContextProvider>
      <Header />
      <main>
        <Game />
      </main>
    </GameContextProvider>
  );
};

export default App;
