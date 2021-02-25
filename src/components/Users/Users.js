import React, { Component } from 'react'
import axios from "axios";
import BSTable from '../Table/BSTable';

export default class Users extends Component {
    state = { data: [], userSearch: "" };

    onChange = function (e) {
        this.setState({ [e.target.name]: e.target.value })
    };

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
        }
        
    };

    render() {
        return (
            <>
                <button onClick={(e) => this.getRequest(e)}>
                    Query
                </button>
                <p>{this.state.data}</p>

                <BSTable  fName={this.state.fName} lName={this.state.lName} gender={this.state.gender} email={this.state.email}/>
            </>
        );
    };
};
