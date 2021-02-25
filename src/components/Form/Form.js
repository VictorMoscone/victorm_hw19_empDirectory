import React, { useState } from 'react'

const Form = (props) => {
    // setFormData will store a state within formData.
    const [formData, setFormData] = useState();

    // A prebuilt function that triggers when forms are changed.
    const handleFormChange = (e) => {
        // The spread allows multiple States; otherwise each state will overwrite the previous.
        setFormData({ ...formData, [e.target.formName]: e.target.value });
    };

    return (
        <>
            <h1>{props.formName}</h1>
            <form>
                <input onChange={(e) => handleFormChange(e)} type="text" formName={props.formName}></input>
            </form>
        </>
    );
};

export default Form
