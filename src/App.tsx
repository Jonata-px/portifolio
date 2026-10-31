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
import PDVMultiPage from "./pages/PDVMulti";
import PDVMultiPrivacity from "./pages/PDVMulti/Privacity";
import PDVMultiVideos from "./pages/PDVMulti/Videos";
import IlstPrivacity from "./pages/Ilst/Privacity";
import IlstApp from "./pages/Ilst";
import RodouPrivacity from "./pages/Rodou/Privacity";
import RodouPage from "./pages/Rodou";
import DiarioCaminhoneiroPage from "./pages/DiarioCaminhoneiro";
import DiarioCaminhoneiroPrivacity from "./pages/DiarioCaminhoneiro/Privacity";
import AppUpdatePage from "./pages/AppUpdate";
import AppPublishPage from "./pages/AppPublish";
import Seo from "./components/Seo";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Seo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotion_game_alert/terms" element={<Terms />} />
          <Route path="/promotion_game_alert/privacity" element={<Privacity />} />
          <Route path="/goalbuilder" element={<GoalBuilder />} />
          <Route path="/targets" element={<GoalBuilder />} />
          <Route path="/goalbuilder/terms" element={<TermsGoalBuilder />} />
          <Route path="/goalbuilder/privacity" element={<PrivacityGoalBuilder />} />
          <Route path="/w2estacionamento/terms" element={<TermsW2estacionamento />} />
          <Route path="/w2estacionamento/privacity" element={<PrivacityW2estacionamento />} />
          <Route path="/game_promo_alert/" element={<GamePromoAlert />} />
          <Route path="/ad" element={<Solar />} />
          <Route path="/kloke-video" element={<KlokeVideoAcessibilidade />} />
          <Route path="/kloke-video-acessibilidade" element={<KlokeVideoAcessibilidade />} />
          <Route path="/kloke-video-sincronizacao" element={<KlokeVideoSincronizacao />} />
          <Route path="/kloke-video-uso-especial" element={<KlokeVideoUsoEspecial />} />
          <Route path="/pdv" element={<PDVOffline />} />
          <Route path="/pdv/privacity" element={<PDVPrivacity />} />
          <Route path="/pdv-multi" element={<PDVMultiPage />} />
          <Route path="/pdv-multi/videos" element={<PDVMultiVideos />} />
          <Route path="/pdv-multi/privacity" element={<PDVMultiPrivacity />} />
          <Route path="/ilst" element={<IlstApp />} />
          <Route path="/ilst/privacity" element={<IlstPrivacity />} />
          <Route path="/rodou" element={<RodouPage />} />
          <Route path="/rodou/privacity" element={<RodouPrivacity />} />
          <Route path="/rodou/:lang" element={<RodouPage />} />
          <Route path="/diario-caminhoneiro" element={<DiarioCaminhoneiroPage />} />
          <Route path="/diario-caminhoneiro/privacity" element={<DiarioCaminhoneiroPrivacity />} />
          <Route path="/atualizar-app-android" element={<AppUpdatePage />} />
          <Route path="/publicar-app-android-ios" element={<AppPublishPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
