import React from 'react';
import './Header_Home.scss';
import Change_Theme from '../../../Components/Selectors/Change_Theme/Change_Theme';
import { NavsState } from '../../../Contexts/Navs_Context';
import Language_Selector from '../../../Components/Selectors/Language_Selector/Language_Selector';
const Header_Home = () => {

  const { show_Mobile_Sidebar_Home } = NavsState();

  return (
    <header className='Header_Home'>
      <div className='Left_Side'>
        <h1>Control Everything</h1>
      </div>
      <div className='Rigth_Side'>
        <div className='Button_Field'>
          <Change_Theme />
        </div>
        <div className='Button_Field'>
          <Language_Selector />
        </div>
      </div>
    </header>
  )
};

export default Header_Home;
