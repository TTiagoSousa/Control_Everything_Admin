import React from 'react';
import './Login.scss';
import GLobal_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
 
const Login = () => {
  return (
    <div className='Login'>
      <form action="">
        <div className='Field'>
          <GLobal_Input 
            Text="Number"
          />
        </div>
        <div className='Field'>
          <GLobal_Input 
            Text="Email"
          />
        </div>
        <div className='Field'>
          <GLobal_Input 
            Text="Password"
          />
        </div>
        <div className='Field'>
          <Global_Button 
            Text="Login"
          />
        </div>
      </form>
    </div>
  )
};

export default Login;