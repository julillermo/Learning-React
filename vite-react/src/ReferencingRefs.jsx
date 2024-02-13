import { useRef, useState } from 'react';

export default function ReferencingRefs(){
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const ref = useRef(0);
  const inputRef = useRef(null);
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);
  
  function handleClick(){
    ref.current = ref.current + 1;
    alert(`You clicked ${ref.current} times!`)
  }

  function handleStart(){
    // Start counting.
    setStartTime(Date.now()); // Date.now() is a built-in JS functoin
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => { setNow(Date.now()); }, 10)
      // Update the curent time every 10ms
      // setInterval is a Browser API function. It calls the specified function every interval in ms
      // Aside from setting the date, setInterval returns a unique ID that can used to specify which
      //  interval to clear late
  }

  // The code below can realod the time because the entire component gets rerendered
  //  when triggered by the click the button connected to a state
  // BUUUT, why is this a regualr JS variable instead of a React State?
  //  It's probably because it can be computed within the componet, a trait isn't attributed
  //  to React states. Recreating secondsPassed as a state will cause the page to go blank

  let secondsPassed = 0;
  if (startTime != null && now != null){
    secondsPassed = (now - startTime) / 1000;
  }

  function handleStop(){
    clearInterval(intervalRef.current);
  }

  function handleFocus(){
    inputRef.current.focus();
  }

  const scrollSettings = {
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  }

  function handleScrollToFirstCat(){
    firstCatRef.current.scrollIntoView({...scrollSettings})
  }

  function handleScrollToSecondCat(){
    secondCatRef.current.scrollIntoView({...scrollSettings})    
  }

  function handleScrollToThirdCat(){
    thirdCatRef.current.scrollIntoView({...scrollSettings})
  }


  return(
    <>
      <h1>Referencing Values with Refs</h1>
      <p>
        The <b>ref</b> is an object that has the following structure:<br/>
        {JSON.stringify(ref)}
      </p>

      {/* Notice that the code below doesn't get rerendered */}
      <p>
        Current value: {ref.current}
      </p>
      <br/>

      <button onClick={handleClick}>
        Clicked {ref.current} times!
      </button>
      <br/><br/>

      <p><b>Time passed</b>: {secondsPassed.toFixed(3)}</p>
      <button onClick={handleStart}>
        Start
      </button>
      {' '}
      <button onClick={handleStop}>
        Stop
      </button>
      <br/><br/>

      <input ref={inputRef} />
      <br/>
      <button onClick={handleFocus}>
        Focus the input
      </button>
      <br/><br/>

      <nav>
        <button onClick={handleScrollToFirstCat}>
          Tom
        </button>
        <button onClick={handleScrollToSecondCat}>
          Maru
        </button>
        <button onClick={handleScrollToThirdCat}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  )
}