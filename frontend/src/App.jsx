import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/index";
import Decoration from "./pages/decoration/index";
import StickerSelect from "./pages/stickerSelect/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decoration" element={<Decoration />} />
      <Route path="/sticker-select" element={<StickerSelect />} />
    </Routes>
  );
}

export default App;
