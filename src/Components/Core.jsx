import Player from './Player';
import Board from './Board';
import GameOver from './GameOver';
import {useState} from 'react'; 
import { WINNING_COMBINATIONS } from './winning_combinations';
function getActivePlayer(gameTurns)
{
    let activePlayer='X';
    if(gameTurns.length>0 && gameTurns[0].player==='X')
    {
        activePlayer='O';
    }
    return activePlayer;
}

function Core(props)
{
    const [gameTurns, setGameTurns]=useState([]);
    const initialGameBoard=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];
    let gameBoard=initialGameBoard;
    let winner=null;
    const activePlayer=getActivePlayer(gameTurns);
        
        for(const turn of gameTurns)
        {
            const {square, player}=turn;
            const {row, col}=square;
            
            gameBoard[row][col]=player;
        }
    
        for(const combination of WINNING_COMBINATIONS)
        {
            const firstSymbol=gameBoard[combination[0].row][combination[0].column];
            const secondSymbol=gameBoard[combination[1].row][combination[1].column];
            const thirdSymbol=gameBoard[combination[2].row][combination[2].column];
            if(firstSymbol && firstSymbol===secondSymbol && secondSymbol===thirdSymbol)
            {
                winner=firstSymbol;
                break;
            }
        }
        if(!winner && gameTurns.length===9)
        {
            winner='Draw'; 
        }
     
    function handleSelectBlock(rowIndex, colIndex)
    {
        setGameTurns(prevTurns=>{

            const currentPlayer=getActivePlayer(prevTurns);
            const updatedTurns=[{square :{row:rowIndex, col:colIndex}, player:currentPlayer},...prevTurns,];
            return updatedTurns;
        });
    }
    function handleRematch()
    {
        setGameTurns([]);
    }
    return(
        <div id={props.id}>
            <ul id='players' className="highlight-player">
                
                <Player name="Player 1" symbol="X" isActive={activePlayer==='X'}/>
                <Player name="Player 2" symbol="O" isActive={activePlayer==='O'}/>
               
            </ul>
            {winner?<GameOver winner={winner} handleClick={handleRematch}></GameOver>:null}
            
            <Board onSelectBlock={(rowIndex, colIndex)=>handleSelectBlock(rowIndex,colIndex) } activePlayer={activePlayer} board={gameBoard}/>
        </div>
    )
}
export default Core;