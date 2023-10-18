import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generateRandomPassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "~!@#$%^&*()_+-/*?/[]{}";
    }

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [numberAllowed, charAllowed, length, setPassword]);

  const copyToClipbourd = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 6);
    let selectedText = window.getSelection().toString();
    window.navigator.clipboard.writeText(selectedText);
  }, [password]);

  useEffect(() => {
    generateRandomPassword();
  }, [numberAllowed, charAllowed, length, generateRandomPassword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-800">
        <div className="w-full flex shadow rounded-lg mb-4 overflow-hidden">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 text-white px-2"
            onClick={copyToClipbourd}
          >
            Copy
          </button>
        </div>

        <div className="flex gap-x-2 text-sm">
          <div className="flex gap-x-1 items-center">
            <input
              type="range"
              id="lenght"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLenght(e.target.value)}
              className="cursor-pointer"
            />
            <label htmlFor="lenght">length {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charactorInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charactorInput">Charactor</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
