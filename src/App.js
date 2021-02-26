import './App.css';
import Form from './components/Form/Form';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css';
import TableBody from './components/Table/TableBody';
import TableHead from './components/Table/TableHead';

function App() {

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
