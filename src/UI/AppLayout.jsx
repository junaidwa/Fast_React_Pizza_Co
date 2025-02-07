import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router";
import loader from "./loader";




const AppLayout = () => {
    const navigation = useNavigation();
    const isloading = navigation.state==="loading";
    return (
        <div className="layout">
            {isloading && <div className="loader"></div>}
            {/* {isloading && <loader} */}
        
        <Header />


        <h1>App Layout</h1>
        <main>
            <Outlet />
        </main>
        <CartOverview />


        </div>


       
  
      
    );
};

export default AppLayout;