import "./App.css";

import { RxCopy } from "react-icons/rx";
import { RiRestartLine } from "react-icons/ri";
import { useState } from "react";

function App() {
  const [passSize, setPassSize] = useState("10");
  const [password, setPassword] = useState("");
  const [characterList, setCharacterList] = useState("")

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()~";

  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i <= length; i++) {
      result += characters.charAt((Math.random() * charactersLength));
    }

    return result;
  }
  const handleSize = (e) => {
    setPassSize(e.target.value);
    const x = generateString(passSize);
    setPassword(x)
  };

  return (
    <>
      <div className="container">
        <form>
          <h2>Strong password generator</h2>
          <div id="password">
            <input type="text" value={password}/>
            <button>
              <RxCopy />
            </button>
            <button>
              <RiRestartLine />
            </button>
          </div>
          <h2>Customize your password</h2>
          <div id="customize">
            <input type="checkbox" name="number" id="number" className="big" />
            <label htmlFor="number">Number</label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              className="big"
            />
            <label htmlFor="upperCase">UpperCase</label>
            <input
              type="checkbox"
              name="lowerCase"
              id="lowerCase"
              className="big"
            />
            <label htmlFor="lowerCase">LowerCase</label>
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              className="big"
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
          <div id="passSize">
            <input type="number" id="size" value={passSize} readOnly />
            <input
              type="range"
              name="size"
              min="0"
              max="100"
              value={passSize}
              onChange={(e) => handleSize(e)}
            />
          </div>
          <button className="btn">Copy Password</button>
        </form>
      </div>
    </>
  );
}

export default App;
