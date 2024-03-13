import {useState} from 'react';
function Player(props)
{
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName]=useState(props.name);
    function handleClick()
    {
        setIsEditing((edit)=>!edit);
    }  
    function handleChange(event)
    {
        setPlayerName(event.target.value);
    }
    function handleKeyDown(event) {
        // Check if the Enter key is pressed
        if (event.key === 'Enter') {
          // Prevent the default behavior of the Enter key (e.g., form submission)
          event.preventDefault();
          handleClick();
        
        }
      }
    
    return(
        <li>
            <div className="player">
            {isEditing?<input type="text" value={playerName} onChange={handleChange} onKeyDown={handleKeyDown}/>:<span className={props.isActive?'active':'player-name'}>{playerName}</span>}
            <div>

            
            <span className="player-symbol">{props.symbol}</span>
            <button onClick={handleClick}>{isEditing?'save':'Edit'}</button>
            </div>
            </div>
        </li>
        
    )
}
export default Player;
