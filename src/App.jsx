import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import CheckOut from "./Pages/CheckOut"
import ProductDetail from "./Pages/ProductDetail"


function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />}/>
          <Route path="product-detail/:id" element={<ProductDetail/>}/>
          <Route path="check-out" element={<CheckOut/>}/>
          
        <Route path="*" element={<NotFound/>}/>
       </Route>

      </Routes>
     
    </>
  );
}

export default App;
