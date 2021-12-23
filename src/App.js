import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
      </ul>
      <h1>Mobile Manufacterers</h1>
      <ul>
      {["Samsung","HTC","Micromax","Apple"].map(el=>
         <li>{el}</li>
      )}
      </ul>
    </div>
  );
}

export default App;
