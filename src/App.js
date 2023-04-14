import Homecomponent from "./components/HomeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Homecomponent />} />
        <Route path="/search" element={<SearchComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
