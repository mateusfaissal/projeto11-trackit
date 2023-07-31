import { createContext, useState } from "react";

export const Usuario = createContext();

export const UsuarioProvider = ({ children }) => {
 
  const [usuario, setUsuario] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTkyOSwiaWF0IjoxNjkwODIzNzIxfQ._SvCCJS5YOHKR7onN86e_jNe7vaTNrOgmvjR4co--S4"
  );

  
  return (
    <Usuario.Provider value={{usuario, setUsuario }}>
      {children}
    </Usuario.Provider>
  );
};

