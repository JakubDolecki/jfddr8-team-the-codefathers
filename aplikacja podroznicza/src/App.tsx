import "./App.css";
import { Login } from "./components/login-page";
import { LandingPage } from "./components/LandingPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { CreateTrip } from "./components/create-trip";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/create-new-trip" element={<CreateTrip />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
