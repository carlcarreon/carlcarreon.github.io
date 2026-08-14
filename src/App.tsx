import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/layout/Layout"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import TechStack from "./pages/TechStack"
import Experience from "./pages/Experience"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
