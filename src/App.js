import './App.css';
import Form from './components/Form/Form';
import Users from './components/Users/Users';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';
import TableBody from './components/Table/TableBody';
import TableHead from './components/Table/TableHead';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {

  let [apiData, setApiData] = useState("");

  const getRequest =  async (e) => {
    const URL = "https://randomuser.me/api/";

    try{
        const response = await axios.get(URL)
        console.log(response.data.results[0])
        setApiData({ 
            fName: response.data.results[0].name.first, 
            lName: response.data.results[0].name.last,
            gender: response.data.results[0].gender,
            email: response.data.results[0].email,
        });
    } catch (err) {
        console.log(err);
    };
  };

  useEffect(() => {
    for (let i = 0; i < 14; i++) {
      getRequest();
      console.log(apiData);
    };
  }, [])


  return (
    <div className="App">
      <Form formName="Filter" />
      <Table striped="true" bordered="true" hover="true" responsive="md">
        <TableHead />
        <TableBody fName="Victor" lName="Moscone" gender="Male" email="test@test.com"/>
      </Table>
      {/* <Users /> */}
    </div>
  );
}

export default App;
