import "./App.css";
import HomePage from "./home/HomePage";
import HomeProvider from "./home/HomeProvider";

function App() {
  return (
    <div className="App">
      <HomeProvider>
        <HomePage />
      </HomeProvider>
    </div>
  );
}

export default App;
