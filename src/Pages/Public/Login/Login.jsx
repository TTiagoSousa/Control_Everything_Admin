import React from 'react';
import './Login.scss';
import GLobal_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import { useSignin } from '../../../Hooks/Auth/Signin';
import Mui_Alert from '../../../Components/Alerts/Mui_Alert/Mui_Alerts';
 
const Login = () => {

  const{     
    employeeNumber, setEmployeeNumber,
    email, setEmail,
    password, setPassword,
    signin 
  } = useSignin();

  return (
    <div className='Login'>
      <div className='Alert'>
        <Mui_Alert />
      </div>
      <form action="">
        <div className='Field'>
          <GLobal_Input 
            Text="Number"
            Type="number"
            Value={employeeNumber}
            onChange={(e) => setEmployeeNumber(e.target.value)}
          />
        </div>
        <div className='Field'>
          <GLobal_Input 
            Text="Email"
            Type="email"
            Value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='Field'>
          <GLobal_Input 
            Text="Password"
            Type="password"
            Value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='Field'>
          <Global_Button 
            Text="Login"
            onClick={signin}
          />
        </div>
      </form>
    </div>
  )
};

export default Login;