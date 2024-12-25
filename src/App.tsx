import { BrowserRouter, Route, Routes } from "react-router-dom";

import GameDetailPage from "@/pages/GameDetailPage";
import Homepage from "@/pages/homepage";
import Layout from "@/pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="games/:id" element={<GameDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
