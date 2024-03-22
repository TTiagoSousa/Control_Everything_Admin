import React, { useEffect, useState } from 'react';
import './CE_Work_Space.scss';
import * as Private_Page from '../../../Imports/private.pages';
import { Route, Routes } from 'react-router-dom';
import Header_Home from '../../../Containers/Headers/Header_Home/Header_Home';
import Sidebar_Home from '../../../Containers/Sidebars/Sidebar_Home/Sidebar_Home'
import Mobile_Sidebar from '../../../Containers/Sidebars/Mobile_Sidebar/Mobile_Sidebar';
import Private_Routes from '../../../Routes/Private_Routes';

const CE_Work_Space = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Chama a função de redimensionamento ao carregar a página
    handleResize();

    // Remove o ouvinte de evento ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>

      <Header_Home />
      {isMobile ? <Mobile_Sidebar /> : <Sidebar_Home />}

      <div className='CE_Section'>
        <div className='Container'>
          <Private_Routes />
        </div>
      </div>
    </>
  )
};

export default CE_Work_Space;