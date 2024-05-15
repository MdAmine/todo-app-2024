import {Outlet} from "react-router-dom";
import FloatingButton from "../UI/FloatingButton.tsx";
import {useContext} from "react";
import {AuthContext} from "../../routes/RouterOutlet.tsx";

function Layout() {
  const {isLoggedIn} = useContext(AuthContext)!;

  return (<>
    <Outlet/>
    {isLoggedIn && <FloatingButton/>}
  </>)
}

export default Layout