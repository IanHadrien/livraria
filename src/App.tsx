import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PageMain } from "./components/PageMain";
import "./styles/global.css";

function App() {
  return (
    <div className="p-8">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PageMain />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App
