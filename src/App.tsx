import { Route, Routes } from "react-router-dom"
import './App.css'
import ShiftCipher from "./pages/shift"
import VigenerCipher from "./pages/vigener"
import MonoAlpha from "./pages/monoalphabetic"
import PlayfairCipher from "./pages/playfair"
import Home from "./pages/Home"
import RailFenceCipher from "./pages/railfence"
import ColumnarCipher from "./pages/columnar"
import AffineCipher from "./pages/affine"
import FeistelCipher from "./pages/feistel"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shift" element={<ShiftCipher />} />
      <Route path="/vigener" element={<VigenerCipher />} />
      <Route path="/mono" element={<MonoAlpha />} />
      <Route path="/play" element={<PlayfairCipher />} />
      <Route path="/railFence" element={<RailFenceCipher />} />
      <Route path="/column" element={<ColumnarCipher />} />
      <Route path="/affine" element={<AffineCipher />} />
      <Route path="/feistel" element={<FeistelCipher />} />
    </Routes>
  )
}

export default App
