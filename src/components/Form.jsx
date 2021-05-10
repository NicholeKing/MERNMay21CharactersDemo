import React, { useState } from 'react';

const Form = props => {
    // const [Name, setName] = useState("");
    // const [Skill, setSkill] = useState("");
    // const [Leaning, setLeaning] = useState("Hero");
    const [myForm, setMyForm] = useState({
        Name: "",
        Skill: "",
        Leaning: "Hero",
        isAlive: true
    })

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value});
    }

    const checkedHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.checked});
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        props.newChar(myForm);
    }

    return(
        <form className="col" onSubmit={ onSubmitHandler }>
            <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" className="form-control" onChange={ onChangeHandler }/>
            </div>
            <div className="form-group">
                <label htmlFor="Skill">Skill(s)</label>
                <input type="text" name="Skill" className="form-control" onChange={ onChangeHandler }/>
            </div>
            <div className="form-group">
                <label htmlFor="Leaning">Leaning</label>
                <select name="Leaning" className="form-control" onChange={ onChangeHandler }>
                    <option value="Hero">Hero</option>
                    <option value="Villain">Villain</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <input type="checkbox" name="isAlive" className="form-control" checked={myForm.isAlive} onChange={ checkedHandler }/>
                <label htmlFor="isAlive">Is alive?</label>
            </div>
            <div className="form-group">
                <input type="submit" value="+ Add" className="btn btn-primary"/>
            </div>
        </form>
    );
}

export default Form;