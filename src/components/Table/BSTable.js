import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';


const BSTable = (props) => {
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
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default BSTable
