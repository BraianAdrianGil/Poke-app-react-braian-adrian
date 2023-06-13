import { Outlet } from "react-router-dom";
import HeaderCommon from "../common/HeaderCommon/HeaderCommon";

const Layout = () => {
  return (
    <div>
      <header>
        <HeaderCommon />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
