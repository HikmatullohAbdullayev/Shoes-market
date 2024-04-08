
import Footer from "./Footer";
import Header from "./Header";
import {Outlet} from "react-router-dom"


function MainLayout() {
    return (
        <div>
            <div className="wrapper">
        <div className="box">
          <header className="container">
          <Header />
          </header>
          <span className="line"></span>
          <Outlet/>
        </div>
        <Footer />
      </div>
            
        </div>
    );
}

export default MainLayout;
MainLayout