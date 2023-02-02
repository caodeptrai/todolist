
import './App.css';
import ListJobs from './components/ListJobs/ListJobs';
import Todo from './components/Todo/Todo';



function App() {

  return (
    <div className="App">
        <div className="content">
            <h2 className='heading'>TO DO APP</h2>
            <ListJobs/>
            <Todo/>
        </div>
    </div>
  );
}

export default App;
