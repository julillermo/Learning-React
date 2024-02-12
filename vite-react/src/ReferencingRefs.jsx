import { useRef, useState } from 'react';

export default function ReferencingRefs(){
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const ref = useRef(0);
  
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
      //  interval to clear
  }

  let secondsPassed = 0;
  if (startTime != null && now != null){
    secondsPassed = (now - startTime) / 1000;
  }

  function handleStop(){
    clearInterval(intervalRef.current);
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


      <p><b>Tiem passed</b>: {secondsPassed.toFixed(3)}</p>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  )
}