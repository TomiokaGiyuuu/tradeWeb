import Home from "./pages/home/Home";
import AboutProduct from "./pages/aboutProduct/AboutProduct";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home/>
          }/>
          <Route path="/trade" element={
            <AboutProduct/>
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
