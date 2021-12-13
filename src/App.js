
import './App.css';
import Header from './Header';
import Header2 from './Header2';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Header/>
          {/* <Header2/> */}
          <Home/>
      </div>
     
    </div>
  );
}

export default App;
