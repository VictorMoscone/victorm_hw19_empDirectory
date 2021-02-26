import React, { useState, useEffect } from 'react'

// This component was originally intended to serve as a search filter. But I haven't had time to work with it.

const Form = (props) => {
    // setFormData will store a state within formData.
    const [formData, setFormData] = useState("");

    // A prebuilt function that triggers when forms are changed.
    const handleFormChange = (e) => {
        // The spread allows multiple States; otherwise each state will overwrite the previous.
        setFormData({ ...formData, [props.formName]: e.target.value });
    };

    useEffect(() => {
        console.log(formData.Filter)
    }, [formData.Filter])

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
