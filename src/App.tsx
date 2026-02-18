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
import KlokeVideoSincronizacao from "./pages/klokeVideo/Sincronizacao";
import KlokeVideoAcessibilidade from "./pages/klokeVideo/Acessibilidade";
import KlokeVideoUsoEspecial from "./pages/klokeVideo/UsoEspecial";
import PDVPrivacity from "./pages/PDV/Privacity";
import PDVOffline from "./pages/PDV";
import { Helmet } from "react-helmet-async";
import { SITE_BASE_URL } from "./config/constants";
import IlstPrivacity from "./pages/Ilst/Privacity";
import IlstApp from "./pages/Ilst";

function App() {

  return (
    <div className="App">
      <Helmet>
        <link rel="canonical" href={SITE_BASE_URL} />
      </Helmet>
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

        <Routes>
          <Route path="/kloke-video" element={<KlokeVideoAcessibilidade />} />
        </Routes>

        <Routes>
          <Route path="/kloke-video-acessibilidade" element={<KlokeVideoAcessibilidade />} />
        </Routes>

        <Routes>
          <Route path="/kloke-video-sincronizacao" element={<KlokeVideoSincronizacao />} />
        </Routes>

        <Routes>
          <Route path="/kloke-video-uso-especial" element={<KlokeVideoUsoEspecial />} />
        </Routes>

        <Routes>
          <Route path="/pdv" element={<PDVOffline />} />
        </Routes>

        <Routes>
          <Route path="/pdv/privacity" element={<PDVPrivacity />} />
        </Routes>

        <Routes>
          <Route path="/ilst" element={<IlstApp />} />
        </Routes>

        <Routes>
          <Route path="/ilst/privacity" element={<IlstPrivacity />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
