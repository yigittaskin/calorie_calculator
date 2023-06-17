import Board from "./components/Board";
import './styles/app.scss';

function App() {
  return (
    <div className="container d-flex justif-content-center align-items-center" style={{height:'100vh'}}>
      <Board />
    </div>
  );
}

export default App;
