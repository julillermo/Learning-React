import { useRef } from 'react';

export default function ReferencingRefs(){
  const ref = useRef(0);
  
  return(
    <>
      <h1>Referencing Values with Refs</h1>
      <p>{JSON.stringify(ref)}</p>
    </>
  )
}