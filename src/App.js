import './App.css';
import { useState } from 'react';

const randomColor = require('randomcolor');
const colorR = randomColor();

function RandomColor() {
  const [hasColor, setHasColor] = useState({ color: colorR });
  const [hasHue, setHasHue] = useState('');
  const [hasLight, setHasLight] = useState('');
  const [hasSize, setHasSize] = useState('');
  const [useSize, setUseSize] = useState('100');
  return (
    <div>
      <br />
      <button
        style={hasColor}
        onClick={() => setHasColor({ color: randomColor() })}
      >
        Random Color
      </button>
      <br />
      <br />
      <label>
        Enter hue:
        <input
          id="inp"
          onChange={(event) => setHasHue(event.currentTarget.value)}
        />
      </label>
      <label>
        Enter lightness:
        <input
          id="inp1"
          onChange={(event) => setHasLight(event.currentTarget.value)}
        />
      </label>
      <button
        onClick={() => {
          setHasColor({
            color: randomColor({
              luminosity: hasLight,
              hue: hasHue,
            }),
          });
          document.getElementById('inp').value = '';
          document.getElementById('inp1').value = '';
        }}
      >
        Submit
      </button>
      <br />
      <br />
      <label>
        Set Size:
        <input onChange={(event) => setHasSize(event.currentTarget.value)} />
      </label>
      <button onClick={() => setUseSize(hasSize)}>Submit</button>
      <br />
      <br />
      <div
        style={{
          width: '300px',
          border: useSize + 'px solid' + hasColor.color,
          padding: '10px 0',
          margin: 'auto',
          textAlign: 'center',
          transition: 'all 2.5s ease',
          WebkitTransition: 'all 2.5s ease',
          MozTransition: 'all 2.5s ease',
        }}
      >
        <div style={hasColor}>{hasColor.color}</div>
      </div>
      <h1 style={hasColor}>Some text</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <RandomColor />
    </div>
  );
}

export default App;
