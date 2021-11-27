// import logo from './logo.svg';
import { useState } from 'react';
import './App.scss';

const MAX_DIGITS = 10;
const NUM_OF_FORMAT_CHARS = 4;
const MAX_CHARS = MAX_DIGITS + NUM_OF_FORMAT_CHARS;

const charIsDigit = (char) => {
  return /[0-9]+/.test(char);
}

function App() {
  const [number, setNumber] = useState('');

  /**
   * 
   * @TODO
   * - could update by not using arrays and reading through each char using chatAt
   * - results could be a string instead of an array
   */
  const handleOnChange = (e) => {
    const currentInput = e.target.value && e.target.value.split('');

    const result = [];

    while(result.length < MAX_CHARS && currentInput.length > 0) {
      const char = currentInput.shift();

      if (!charIsDigit(char)) { continue; }

      if (result.length === 0) {
        result.push('(');
        result.push(char);
        continue;
      }
      if (result.length === 4) {
        result.push(')');
        result.push(' ');
        result.push(char);
        continue;
      }
      if (result.length === 9) {
        result.push('-');
        result.push(char);
        continue;
      }

      result.push(char);
    }

    setNumber(result.join(''));
  };

  return (
    <div className="App">
      <form>
        <label>
          Number:
          <input type="text" name="phone-number" value={number} onChange={(e) => handleOnChange(e) }/>
        </label>
      </form>
    </div>
  );
}

export default App;
