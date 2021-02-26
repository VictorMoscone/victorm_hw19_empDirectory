import './App.css';
import Form from './components/Form/Form';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';
import TableBody from './components/Table/TableBody';
import TableHead from './components/Table/TableHead';
import axios from "axios";
import { useEffect } from 'react';

function App() {

  // Our API get request. Will return 20 U.S. users.
  const getRequest =  async () => {
    const URL = "https://randomuser.me/api/?results=20&nat=us";

    try{
        const response = await axios.get(URL)
        return {
            result: response.data.results
        };
    } catch (err) {
        console.log(err);
    };
  };

    //  To store all of our API generated users.
    let userArray = [];

  // On app load, I wanted to fill our userArray with the API users.
  useEffect(() => {
      getRequest().then((res) => userArray.push(res));
      // I've spent two hours trying to understand why the array won't load
      // the indexed values of the API array, but can't figure it out in time.
      console.log(userArray)
  }, []);

  return (
    <div className="App">
      <Form formName="Filter" />
      <Table striped="true" bordered="true" hover="true" responsive="md">
        <TableHead />
        {/* I planned to create 20 table bodies and fill the info from the array. This was a workaround. */}
        <TableBody fName={"Hi"} lName={"Moscone"} gender="Male" email="test@test.com"/>
      </Table>
    </div>
  );
};

export default App;
