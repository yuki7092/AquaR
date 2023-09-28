import Mix from "./components/Mix";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HeaderForPages from "./components/HeaderForPages";
import MouseLight from "./components/MouseLight";

import "./assets/all.scss";

function App() {
  return (
    <div>
      <HeaderForPages />

      <Mix />
      <Sidebar
        link1="首頁"
        link2="館內資訊"
        link3="參觀資訊"
        link4="購票資訊"
        link5="常見問答"
      />
      <Footer
        link1="首頁"
        link2="購票資訊"
        link3="最新消息"
        link4="參觀資訊"
        link5="明星動物"
      />
      <MouseLight />
    </div>
  );
}

export default App;
