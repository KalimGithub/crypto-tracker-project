import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import ComparePage from "./pages/Compare";
import CoinPage from "./pages/Coin";
import WatchListComponent from "./components/WatchList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/compare" element={<ComparePage />} /> */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
          {/* <Route path="/watchlist" element={<WatchListComponent />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
