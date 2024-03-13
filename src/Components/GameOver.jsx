function GameOver({winner, handleClick}){
    return (
        <div id='game-over'>
            <h2>GAME OVER!</h2>
            {winner==='Draw'?<p>Game Draw</p>: <p>{winner} Won!</p>}
            <p>
                <button onClick={handleClick}>Play Again</button>
            </p>
        </div>
    )
}
export default GameOver;