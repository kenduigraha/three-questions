import logo from './logo.svg';
import './App.css';
import NumberCount from './component/NumberCount';
import DataTable from './component/DataTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NumberCount />
       <div className="App">
        <h1>User Management Table</h1>
        <DataTable />
      </div>
      </header>
    </div>
  );
}

export default App;
