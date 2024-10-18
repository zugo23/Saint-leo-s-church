import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./topNav";
import Prayer from "./Rosary";
import Litany from "./Prayers/litany"
import Body from "./body";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/how-to-pray-the-rosary" element={<Prayer />} />
          <Route path="/daily-prayer" element={<Litany />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;