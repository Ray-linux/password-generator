import './App.css';

import {RxCopy} from 'react-icons/rx'
import {RiRestartLine} from 'react-icons/ri'

function App() {
  return (
    <>
    <div className="container">
      <form>
        <h2>Strong password generator</h2>
        <div id="password">
        <input type="text" />
        <button><RxCopy/></button>
        <button><RiRestartLine/></button>
        </div>
        <h2>Customize your password</h2>
        <div id="customize">
              <input type="checkbox" name="number" id='number' className="big"/>
              <label htmlFor="number">Number</label>
              <input type="checkbox" name="uppercase" id='uppercase' className="big"/>
              <label htmlFor="upperCase">UpperCase</label>
              <input type="checkbox" name="lowerCase" id='lowerCase' className="big"/>
              <label htmlFor="lowerCase">LowerCase</label>
              <input type="checkbox" name="symbols" id='symbols' className="big"/>
              <label htmlFor="symbols">Symbols</label>
        </div>
        <div id="passSize">
          <input type="number"/>
          <input type="range" name='size' min="0" max = "100"/>
        </div>
        <button>Copy Password</button>
      </form>
    </div>
    </>
  );
}

export default App;
