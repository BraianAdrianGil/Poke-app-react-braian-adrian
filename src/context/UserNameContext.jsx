import { createContext, useState } from "react";
//Creamos el contexto UserNameContext con valor null.
export const UserNameContext = createContext(null);
// Creamos un componente que actúa como proveedor(provider) del contexto "UserNameContext". Y recibe una prop children que representa los componentes hijos a los que se les proporciona el contexto.
export const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") ?? ""
  );

  const saveUserName = (newUserName) => {
    setUserName(newUserName);
    localStorage.setItem("userName", newUserName);
  };

  const removeUserName = () => {
    setUserName("");
    localStorage.removeItem("userName");
  };

  const value = { userName, saveUserName, removeUserName };
  return (
    //Utilizamos el componente UserNameContext.Provider para envolver los children y proporcionar el valor del contexto en este caso ese valor es value(un objeto con el estado,función para establecer y otra para limpiar)
    <UserNameContext.Provider value={value}>
      {children}
    </UserNameContext.Provider>
  );
};
