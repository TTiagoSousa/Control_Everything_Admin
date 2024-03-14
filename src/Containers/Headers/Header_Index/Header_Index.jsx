import React from 'react';
import './Header_Index.scss';
import Language_Selector from '../../../Components/Buttons/Selectors/Language_Selector/Language_Selector';

const Header_Index = () => {
  return (
    <header className='Header_Index'>
      <div className='Left_Side'>
        <h1>Control Everything</h1>
      </div>
      <div className='Rigth_Side'>
        <div className='Button_Field'>
          <Language_Selector />
        </div>
      </div>
    </header>
  )
};

export default Header_Index;
