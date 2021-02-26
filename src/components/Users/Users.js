import React, { Component } from 'react'
import axios from "axios";
import TableBody from '../Table/TableBody';

export default class Users extends Component {
    state = { data: [] };

    getRequest =  async function (e) {
        e.preventDefault();
        const URL = "https://randomuser.me/api/";

        try{
            const response = await axios.get(URL)
            console.log(response.data.results[0])
            this.setState({ 
                fName: response.data.results[0].name.first, 
                lName: response.data.results[0].name.last,
                gender: response.data.results[0].gender,
                email: response.data.results[0].email,
             });
        } catch (err) {
            console.log(err);
        };
    };

    

    render() {
        return (
            <>
                <button onClick={(e) => this.getRequest(e)}>
                    Query
                </button>
                <p>{this.state.data}</p>

                <TableBody fName={this.state.fName} lName={this.state.lName} gender={this.state.gender} email={this.state.email}/>
            </>
        );
    };
};
