import React, { useState } from 'react';

const Results = props => {
    const heroBG = {
        backgroundColor: "#61dafb"
    }
    const villainBG = {
        backgroundColor: "rgb(179, 54, 79)"
    }
    const otherBG = {
        backgroundColor: "rgb(245, 198, 81)"
    }

    const isDead = {
        textDecoration: "line-through"
    }

    const alive = {
        textDecoration: "none"
    }

    const checkIsAlive = e => {
        props.updateIsAlive(e.target.value)
    }

    return(
        <div className="col">
            <h2>List of Characters</h2>
            <table className="table">
                <tr>
                    <th>Name</th>
                    <th>Skill(s)</th>
                    <th>Leaning</th>
                    <th>Is Alive?</th>
                </tr>
                {
                    props.myList.map((character, i) => {
                        return <tr key={i} style={character.Leaning == "Hero" ? heroBG : character.Leaning == "Villain" ? villainBG : otherBG}>
                            <td style={ character.isAlive ? alive : isDead }>{character.Name}</td>
                            <td>{character.Skill}</td>
                            <td>{character.Leaning}</td>
                            <td>{character.isAlive ? "Yes" : "No"} <input type="checkbox" name="isAlive" className="form-control" checked={character.isAlive} value={i} onChange={ checkIsAlive } /></td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
}

export default Results;