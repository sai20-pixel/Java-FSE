import React from "react";

export const IndianTeam = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Rohit",
    "Yuvraj",
    "Raina",
];

export function OddPlayers([first, , third, , fifth]) {
    return (
        <>
            <p>First : {first}</p>
            <p>Third : {third}</p>
            <p>Fifth : {fifth}</p>
        </>
    );
}

export function EvenPlayers([, second, , fourth, , sixth]) {
    return (
        <>
            <p>Second : {second}</p>
            <p>Fourth : {fourth}</p>
            <p>Sixth : {sixth}</p>
        </>
    );
}

const T20Players = [
    "First Player",
    "Second Player",
    "Third Player",
];

const RanjiPlayers = [
    "Fourth Player",
    "Fifth Player",
    "Sixth Player",
];

export const IndianPlayers = [...T20Players, ...RanjiPlayers];

export function ListofIndianPlayers({ IndianPlayers }) {
    return (
        <>
            <h1>List of Indian Players Merged</h1>

            <ul>
                {IndianPlayers.map((player, index) => (
                    <li key={index}>Mr. {player}</li>
                ))}
            </ul>
        </>
    );
}