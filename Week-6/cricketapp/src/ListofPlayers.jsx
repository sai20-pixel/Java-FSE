import React from "react";

export function ListofPlayers({ players }) {
    return (
        <>
            <h1>List of Players</h1>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        Mr. {player.name} {player.score}
                    </li>
                ))}
            </ul>
        </>
    );
}

export function ScoreBelow70({ players }) {
    const players70 = players.filter((player) => player.score <= 70);

    return (
        <>
            <h1>List of Players having Scores Less than 70</h1>

            <ul>
                {players70.map((player, index) => (
                    <li key={index}>
                        Mr. {player.name} {player.score}
                    </li>
                ))}
            </ul>
        </>
    );
}