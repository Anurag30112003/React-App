import './App.css';
import Nav from "./components/Navbar"
import Textinput from "./components/textinput"
import "../src/App.css"

function App() {
  return (
    <>
      <Nav title="Get My Text" />
      <div className="container">
      <Textinput heading = "GET YOUR TEXT THE WAY YOU WANT"/>
      </div>
    </>

  );
}

export default App;
