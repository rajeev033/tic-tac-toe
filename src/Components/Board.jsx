function Board({onSelectBlock, board})
{
    
    return(
        <ul id="game-board">
            {board.map((row, rowIndex)=><li key={rowIndex} className='out'>
                <ul>
                    {row.map((playerSymbol, colIndex)=><li key={colIndex} className='row'>
                        <button onClick={()=>onSelectBlock(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                        </li>)}
                </ul>
            </li>)}
        </ul>
    )
}
export default Board;