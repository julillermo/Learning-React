import { useState } from "react";

function AddingInteractivity(){
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default AddingInteractivity;