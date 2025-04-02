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
import PrivacityW2estacionamento from "./pages/w2estacionamento/Privacity";
import TermsW2estacionamento from "./pages/w2estacionamento/Terms";
import GamePromoAlert from "./pages/GamePromoAlert";
import GoalBuilder from "./pages/GoalBuilder";
import Solar from "./pages/AD/Solar";

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
          <Route path="/targets" element={<GoalBuilder />} />
        </Routes>

        <Routes>
          <Route path="/goalbuilder/terms" element={<TermsGoalBuilder />} />
        </Routes>

        <Routes>
          <Route path="/goalbuilder/privacity" element={<PrivacityGoalBuilder />} />
        </Routes>

        <Routes>
          <Route path="/w2estacionamento/terms" element={<TermsW2estacionamento />} />
        </Routes>

        <Routes>
          <Route path="/w2estacionamento/privacity" element={<PrivacityW2estacionamento />} />
        </Routes>

        <Routes>
          <Route path="/game_promo_alert/" element={<GamePromoAlert />} />
        </Routes>

        <Routes>
          <Route path="/ad" element={<Solar />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
