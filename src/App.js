import "./App.css";
import NavBar from "./Components/NavBar";
import CreateCard from "./Components/CreateCard";
import Players from "./Components/Players";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <App />;
      break;
    case "/player":
      component = <Players />;
      break;
    case "/about":
      component = <CreateCard/>;
      break;
  }
  return (
    <div className="App">
      <NavBar />
      {component}
    </div>
  );
}

export default App;
