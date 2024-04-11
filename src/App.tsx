import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./pages/Home";
import Privacity from "./pages/Privacity";
import Terms from "./pages/Terms";
import PrivacityGoalBuilder from "./pages/GoalBuilder/Privacity";
import TermsGoalBuilder from "./pages/GoalBuilder/Terms";
import GamePromoAlert from "./pages/GamePromoAlert";
import GoalBuilder from "./pages/GoalBuilder";

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

        <Routes>
          <Route path="/goalbuilder" element={<GoalBuilder />} />
        </Routes>

        <Routes>
          <Route path="/goalbuilder/terms" element={<TermsGoalBuilder />} />
        </Routes>

        <Routes>
          <Route path="/goalbuilder/privacity" element={<PrivacityGoalBuilder />} />
        </Routes>

        <Routes>
          <Route path="/game_promo_alert/" element={<GamePromoAlert />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
