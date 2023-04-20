import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./pages/Home";
import Privacity from "./pages/Privacity";
import Terms from "./pages/Terms";

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/promotion_game_alert/terms" element={<Terms />} />
        </Routes>

        <Routes>
          <Route path="/promotion_game_alert/privacity" element={<Privacity />} />
        </Routes>


        
      </BrowserRouter>
    </div>
  )
}

export default App
