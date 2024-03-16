import React, { useState, createContext, useContext, useEffect } from 'react';

const Navs = createContext({});

const NavsContext = ({ children }) => {

  // Alert  
    const [ alert, setAlert ] = useState({
      open: false, // Alert Close
      message: "", // Alert message
      type: "", // type of alert
    })
  // Alert

  // Open SideBarHome
    const [ mobile_Sidebar_Home, set_Mobile_Sidebar_Home ] = useState(false);
    const show_Mobile_Sidebar_Home = () => set_Mobile_Sidebar_Home(!mobile_Sidebar_Home);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 800) {
          set_Mobile_Sidebar_Home(false);
        }
      };

      // Adiciona um event listener para monitorar as alterações de tamanho da janela
      window.addEventListener('resize', handleResize);

      // Remove o event listener quando o componente é desmontado
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  // Open SideBarHome

  return (
    <Navs.Provider 
      value={{ 
        alert, setAlert,
        mobile_Sidebar_Home, set_Mobile_Sidebar_Home, show_Mobile_Sidebar_Home
      }}
    >
      {children}
    </Navs.Provider>
  )

};

export default NavsContext;

export const NavsState = () => {
  return useContext(Navs);
};