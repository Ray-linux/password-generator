import './App.css';

import {RxCopy} from 'react-icons/rx'

function App() {
  return (
    <>
    <div className="container">
      <form>
        <h2>Strong password generator</h2>
        <div id="password">
        <input type="text" />
        <button><RxCopy/></button>
        </div>
        <h2>Customize your password</h2>
        <div id="customize">
              <label htmlFor="number">Number</label>
              <input type="checkbox" name="number" id='number'/>
              <label htmlFor="upperCase">UpperCase</label>
              <input type="checkbox" name="uppercase" id='uppercase'/>
              <label htmlFor="lowerCase">LowerCase</label>
              <input type="checkbox" name="lowerCase" id='lowerCase'/>
              <label htmlFor="symbols">Symbols</label>
              <input type="checkbox" name="symbols" id='symbols'/>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
