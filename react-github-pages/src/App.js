import Header from './components/Header';
import HomePage from './components/HomePage';
import { Provider } from './context/TaskDatacontext';

function App() {
  return (
    <div>
      <Provider>
      <Header />
      <HomePage />
      </Provider>
    </div>
  );
}

export default App;
