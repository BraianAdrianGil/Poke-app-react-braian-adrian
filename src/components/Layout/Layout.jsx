import { Outlet } from "react-router-dom";
import HeaderCommon from "../common/HeaderCommon/HeaderCommon";

const Layout = () => {
  return (
    <div>
      <HeaderCommon />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
