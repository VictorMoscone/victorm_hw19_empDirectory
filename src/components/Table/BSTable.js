import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';


const BSTable = (props) => {

    let tableRows = [];

    for (let i = 0; i < props.trNum; i++) {
        tableRows.push(
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td> 
        </tr>);
    };

    return (
        <>
            <Table striped="true" bordered="true" hover="true" responsive="md">
                {/* This probably needs to be dynamically mapped with a # that increases. */}
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Male</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{props.fName}</td>
                    <td>{props.lName}</td>
                    <td>{props.gender}</td>
                    <td>{props.email}</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    {tableRows}
                </tbody>
            </Table>
        </>
    );
};

export default BSTable
