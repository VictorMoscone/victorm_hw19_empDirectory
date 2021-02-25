import './App.css';
import Form from './components/Form/Form';
import BSTable from './components/Table/BSTable';
import Users from './components/Users/Users';


function App() {
  return (
    <div className="App">
      <Form formName="Filter" />
      {/* <BSTable /> */}
      <Users />
    </div>
  );
}

export default App;
