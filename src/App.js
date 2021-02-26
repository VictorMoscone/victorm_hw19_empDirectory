import './App.css';
import Form from './components/Form/Form';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';
import TableBody from './components/Table/TableBody';
import TableHead from './components/Table/TableHead';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  
  const getRequest =  async () => {
    const URL = "https://randomuser.me/api/";

    try{
        const response = await axios.get(URL)
        // console.log(response.data.results[0])
        return {
            fName: response.data.results[0].name.first, 
            lName: response.data.results[0].name.last,
            gender: response.data.results[0].gender,
            email: response.data.results[0].email,
        };
        // console.log(fName)
    } catch (err) {
        console.log(err);
    };
  };

  useEffect(() => {
    // getRequest().then((res) => console.log(res.fName))
    for (let i = 0; i < 4; i++) {
      getRequest().then((res) => userArray.push(res));
      console.log(userArray)
    };
  }, []);

  return (
    <div className="App">
      <Form formName="Filter" />
      <Table striped="true" bordered="true" hover="true" responsive="md">
        <TableHead />
        <TableBody fName={"Hi"} lName={"Moscone"} gender="Male" email="test@test.com"/>
      </Table>
    </div>
  );
};

export default App;
