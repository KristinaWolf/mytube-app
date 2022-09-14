import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";
import Main from "../components/Pages/Main";
import Music from "../components/Pages/Music";
import Films from "../components/Pages/Films";
import Sport from "../components/Pages/Sport";
import VideoGames from "../components/Pages/VideoGames";
import Layout from "../containers/Layout";
import SearchPage from "../components/Pages/SearchPage";
import NotFound from "../components/Pages/NotFound";

import "./index.scss";

const App = () => {
  moment.locale("ru");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/music" element={<Music />} />
          <Route path="/films" element={<Films />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/videogames" element={<VideoGames />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;