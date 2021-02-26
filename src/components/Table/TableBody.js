import React from 'react'

const TableBody = (props) => {
    return (
        <tbody>
            <tr>
            <td>{props.fName}</td>
            <td>{props.lName}</td>
            <td>{props.gender}</td>
            <td>{props.email}</td>
            </tr>
        </tbody>
    );
};

export default TableBody
