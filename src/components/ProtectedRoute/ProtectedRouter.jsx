import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserNameContext } from "../../context/UserNameContext";

const ProtectedRouter = ({ children }) => {
  //Para leer el valor de un contexto se necesitan el contexto y el hook useContext.
  const { userName } = useContext(UserNameContext);

  if (userName) return <>{children}</>;
  else
    return (
      <Navigate to="/" state={{ from: location.pathname + location.search }} />
    );
};

export default ProtectedRouter;
