import Header from "./Components/Header";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
