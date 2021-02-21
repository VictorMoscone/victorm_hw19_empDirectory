import './App.css';
import Form from './components/Form/Form';
import BSTable from './components/Table/BSTable';

function App() {
  return (
    <div className="App">
      <Form name="filter"/>
      <BSTable />
    </div>
  );
}

export default App;
