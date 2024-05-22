import { useState } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState('');
  const tiles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const ohandleClickTitle = (e) => {
    setOutput((prev) =>
      (prev + e.target.innerHTML).replace(/([A-Z])\1{2}/g, '_')
    );
  };

  return (
    <div className="App">
      <div id="outputString">{`'${output}'`}</div>
      <div className="tiles-container">
        {tiles.split('').map((t) => (
          <div key={t.toString()} className="tile" onClick={ohandleClickTitle}>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
