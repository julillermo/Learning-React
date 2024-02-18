import { useState, useEffect, useRef } from 'react';

function RestartButton(){
  return(
    <button >
      Restart Game
    </button>
  )
}

function Square({ gridId, gridRefAccess, isGameFinished, playerPiece, changePlayer }) {
  const [isOccupied, setIsOccupied] = useState('');
  const playerPieceLocal = playerPiece;
// ENDED HERE
  function handleClick(){
    if (isOccupied === ''){
      setIsOccupied(playerPieceLocal);
      gridRefAccess[gridId[0]][gridId[1]] = playerPieceLocal;
      // console.log(gridId[0]);
      // console.log(gridId[1]);
      console.log(gridRefAccess);
    }
    changePlayer( (playerPieceLocal === 'X') ? 'O' : 'X'  )
  }

  return (
    <button className="square" onClick={
      (!gameStatus) ? handleClick}>
      {isOccupied}
    </button>
  )
}

export default function TicTacToe() {
  const [currentPlayerPiece, setCurrentPlayerPiece] = useState('X')
  const [isGameFinished, setIsGameStatus] = useState(false);
  const gridRef = useRef(
    [
      ['','',''],
      ['','',''],
      ['','','',]
    ]
  )

  useEffect(() => {
    let xPieceSuccessiveCount = 0;
    let oPieceSuccessiveCount = 0;

    function endGame(winnerPiece){
      console.log(`${winnerPiece} player won!`)
    }

    /* Check for row completion */
    for (let y=0; y < gridRef.current[0].length; y++){
      for (let x=0; x < gridRef.current.length; x++){
        if ( gridRef.current[y][x] === 'X' ){
          xPieceSuccessiveCount += 1;
        } else if ( gridRef.current[y][x] === 'O' ){
          oPieceSuccessiveCount += 1;
        }

      }
      if (xPieceSuccessiveCount >= 3){
        endGame('X');
      } 
      if (oPieceSuccessiveCount >= 3) {
        endGame('O');
      }

      xPieceSuccessiveCount = 0;
      oPieceSuccessiveCount = 0;
    }


  })

  return (
    <>
      <h1>Tic-Tac-Toe here</h1>
      <br /><hr /><br />

      <Square gridId={[0,0]} gridRefAccess={gridRef.current} isGameFinished={isGameFinished} playerPiece={currentPlayerPiece} changePlayer={setCurrentPlayerPiece} />
      <Square gridId={[0,1]} gridRefAccess={gridRef.current} isGameFinished={isGameFinished} playerPiece={currentPlayerPiece} changePlayer={setCurrentPlayerPiece} />
      <Square gridId={[0,2]} gridRefAccess={gridRef.current} isGameFinished={isGameFinished} playerPiece={currentPlayerPiece} changePlayer={setCurrentPlayerPiece} />
      <br />
      <Square gridId={[1,0]} gridRefAccess={gridRef.current} isGameFinished={isGameFinished} playerPiece={currentPlayerPiece} changePlayer={setCurrentPlayerPiece} />
      <Square gridId={[1,1]} gridRefAccess={gridRef.current} isGameFinished={isGameFinished} playerPiece={currentPlayerPiece} changePlayer={setCurrentPlayerPiece} />
      <Square gridId={[1,2]} gridRefAccess={gridRef.current} isGameFinished={isGameFinished} playerPiece={currentPlayerPiece} changePlayer={setCurrentPlayerPiece} />
      <br />
      <Square gridId={[2,0]} gridRefAccess={gridRef.current} isGameFinished={isGameFinished} playerPiece={currentPlayerPiece} changePlayer={setCurrentPlayerPiece} />
      <Square gridId={[2,1]} gridRefAccess={gridRef.current} isGameFinished={isGameFinished} playerPiece={currentPlayerPiece} changePlayer={setCurrentPlayerPiece} />
      <Square gridId={[2,2]} gridRefAccess={gridRef.current} isGameFinished={isGameFinished} playerPiece={currentPlayerPiece} changePlayer={setCurrentPlayerPiece} />
      <br />
      <br />
      <RestartButton />
    </>
  )
}