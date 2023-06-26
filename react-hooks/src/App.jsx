import { useRef, useState, useEffect } from 'react';
import Layout from './components/Layout';
const App = () => {
  const [info, setInfo] = useState('');
  const count = useRef(0); // {current: 0}

  const inputEle = useRef();
  console.log(inputEle.current);
  console.log(count);
  useEffect(() => {
    count.current = count.current + 1;
  });

  function handleClick() {
    inputEle.current.style.width = '300px';
  }
  return (
    <div>
      <h2>{info}</h2>
      <h3>count: {count.current}</h3>
      <input
        type="text"
        placeholder="enter value"
        onChange={(e) => setInfo(e.target.value)}
        ref={inputEle}
      />
      <button onClick={handleClick}>click here</button>

      <p>useLayoutEffect</p>

      <Layout />
    </div>
  );
};

export default App;
