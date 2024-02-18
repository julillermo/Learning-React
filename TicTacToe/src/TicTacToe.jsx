import { useState, useEffect, useRef } from 'react';

function Square({ gridId, gridRefAccess, isGameFinished, playerPiece, changePlayer }) {
  const [occupyingPiece, setOccupyingPiece] = useState('_');
  const playerPieceLocal = playerPiece;

  function handleClick(){
    if (occupyingPiece === '_' && isGameFinished === false){
      gridRefAccess[gridId[0]][gridId[1]] = playerPieceLocal; // the piece placed in the calculation grid
      setOccupyingPiece(gridRefAccess[gridId[0]][gridId[1]]); // the piece rendered by React
      console.log(gridRefAccess);
    }
    changePlayer( (playerPieceLocal === 'X') ? 'O' : 'X'  )
  }

  return (
    <button className="square" onClick={handleClick}>
      {occupyingPiece} <br/>
      {/* {gridId[0]}{gridId[1]} */}
    </button>
  )
}

function WinnerAnnoucement({ winnerPiece }){
  return (
    <h2>
      {winnerPiece} is the winner!
    </h2>
  )
}

export default function TicTacToe() {
  const [currentPlayerPiece, setCurrentPlayerPiece] = useState('X')
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [winner, setWinner] = useState('');
  const gridRef = useRef(
    [
      ['_','_','_'],
      ['_','_','_'],
      ['_','_','_'],
    ]
  )

  // Checking if a player has won
  useEffect(() => {
    let xPieceSuccessiveCount = 0;
    let oPieceSuccessiveCount = 0;

    function endGame(winnerPiece){
      console.log(`${winnerPiece} player won!`)
      setWinner(winnerPiece);
    }

    if (isGameFinished === false){
      /* Checking for the rows for 3 consecutive pieces */
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
          setIsGameFinished(true);
        } 
        if (oPieceSuccessiveCount >= 3) {
          endGame('O');
          setIsGameFinished(true);
        }
  
        xPieceSuccessiveCount = 0;
        oPieceSuccessiveCount = 0;
      }

      /* Checking for the columns for 3 consecutive pieces */
      for (let x=0; x < gridRef.current.length; x++){
        for (let y=0; y < gridRef.current[0].length; y++){
          if ( gridRef.current[y][x] === 'X' ){
            xPieceSuccessiveCount += 1;
          } else if ( gridRef.current[y][x] === 'O' ){
            oPieceSuccessiveCount += 1;
          }
        }
  
        if (xPieceSuccessiveCount >= 3){
          endGame('X');
          setIsGameFinished(true);
        } 
        if (oPieceSuccessiveCount >= 3) {
          endGame('O');
          setIsGameFinished(true);
        }
  
        xPieceSuccessiveCount = 0;
        oPieceSuccessiveCount = 0;
      }

      /* Checking for the one of the diagonals for 3 consecutive pieces */
      for (let y=0, x=0; y < gridRef.current[0].length; x++, y++){
        if ( gridRef.current[y][x] === 'X' ){
          xPieceSuccessiveCount += 1;
        } else if ( gridRef.current[y][x] === 'O' ){
          oPieceSuccessiveCount += 1;
        }

        if (xPieceSuccessiveCount >= 3){
          endGame('X');
          setIsGameFinished(true);
        } 
        if (oPieceSuccessiveCount >= 3) {
          endGame('O');
          setIsGameFinished(true);
        }
      }

      xPieceSuccessiveCount = 0;
      oPieceSuccessiveCount = 0;

      /* Checking for the one of the diagonals for 3 consecutive pieces */
      for (let y=0, x=2; y < gridRef.current[0].length; x--, y++){
        if ( gridRef.current[y][x] === 'X' ){
          xPieceSuccessiveCount += 1;
        } else if ( gridRef.current[y][x] === 'O' ){
          oPieceSuccessiveCount += 1;
        }

        // console.log(`[${y}] [${x}] = ${gridRef.current[y][x]}`);
        // console.log(`xPeice Count: ${xPieceSuccessiveCount}`);
        // console.log(`oPeice Count: ${oPieceSuccessiveCount}`);

        if (xPieceSuccessiveCount >= 3){
          endGame('X');
          setIsGameFinished(true);
        } 
        if (oPieceSuccessiveCount >= 3) {
          endGame('O');
          setIsGameFinished(true);
        }
      }

      xPieceSuccessiveCount = 0;
      oPieceSuccessiveCount = 0;

    }
  })

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <br /><hr /><br />

      {winner !== '' && <WinnerAnnoucement winnerPiece={winner} />}
      <br />

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

      <form>
        <button type="submit">
          Restart
        </button>
      </form>
    </>
  )
}