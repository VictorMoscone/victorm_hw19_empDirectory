import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';


const BSTable = (Props) => {
    return (
        <>
            <Table striped="true" bordered="true" hover="true" responsive="md">
                {/* This probably needs to be dynamically mapped with a # that increases. */}
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{Props.person1.fName}</td>
                    <td>Otto</td>
                    <td>@mdo</td>
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
