import React from 'react';
import './CE_Work_Space.scss';
import * as Private_Page from '../../../Imports/private.pages';
import { Route, Routes } from 'react-router-dom';

const CE_Work_Space = () => {
  return (
    <>
      <div className='CE_Section'>
        <div className='Container'>
          <Routes>
            <Route index element={ <Private_Page.Home /> }/>
            <Route path='Home' element={ <Private_Page.Home /> }/>
          </Routes>
        </div>
      </div>
    </>
  )
};

export default CE_Work_Space;