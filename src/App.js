import './App.css';
import { TemaProvider } from './components/TemaContext';
import Tema from './components/Tema';

function App() {
  return (
    <div className="App">
      <TemaProvider>
        <Tema/>
      </TemaProvider>
    </div>
  );
}

export default App;
