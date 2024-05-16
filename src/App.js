import MainRoutes from "./components/MainRoutes";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StickySidebar from "./components/StickySidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <MainRoutes />
        <StickySidebar/>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
