
import { BrowserRouter as Router, Routes,
    Route } from "react-router-dom";

import './styles/App.css';
import MenuPage from "./pages/MenuPage.js"
import UserPage from "./pages/UserPage.js"
import CustomButton from "./components/CustomButton.js"


function Home() {
    return <div>Homepage</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          CPHMTOGO
      </header>


      <button id="sel-button">Click me!</button>
        <Router>
            <CustomButton id={"homePage"} to="" />
            <CustomButton id={"menuPage"} to="menu" />
            <CustomButton id={"userPage"} to="user" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu"
                       element={<MenuPage />} />
                <Route path="/user"
                       element={<UserPage />} />
            </Routes>
        </Router>


    </div>
  );
}

export default App;
