import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PageMain } from "./components/PageMain";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="p-8">
        <Header />
        <Routes>
          <Route path="/" element={<PageMain />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
