import './App.css';
import Nav from "./components/Navbar"
import Textinput from "./components/textinput"

function App() {
  return (
    <>
      <Nav title="Get My Text" />
      <div className="container">
      <Textinput heading = "Get Your Text The Way You Want"/>
      </div>
    </>

  );
}

export default App;
