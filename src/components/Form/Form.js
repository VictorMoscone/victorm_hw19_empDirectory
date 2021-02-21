import React, { useState } from 'react'

const Form = (Props) => {
    const Name = Props.name;

    // setFormData will store a state within formData.
    const [formData, setFormData] = useState();

    // A prebuilt function that triggers when forms are changed.
    const handFormChange = (e) => {
        // The spread allows multiple States; otherwise each state will overwrite the previous.
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    return (
        <>
            <form>
                <input onChange={(e) => handFormChange(e)} type="text" name={Name}></input>
            </form>
        </>
    )
}

export default Form
