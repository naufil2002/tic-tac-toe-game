import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [playerName, setPlayerName] = useState(initialName)

    const [isEditing, setisEditing] = useState(false);

    function handleEditClick () {
        setisEditing((editing) => !editing);

        if (isEditing) {
        onChangeName(symbol, playerName);
    }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablrPlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablrPlayerName = <input type="text" required Value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablrPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}