import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavsState } from "../../Contexts/Navs_Context";
import { DataBaseState } from "../../Contexts/DataBase_Context";
import http from "../../Services/httpService";
import { validateEmail} from '../../Utils/email/is.valide.email';
import * as jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

export const useSignin = () => {

  const { setAlert } = NavsState();

  const { setAuthenticated } = DataBaseState();

  const [email, setEmail] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const signin  = async (e) => {
    e.preventDefault();

    console.log("Entrou")

    if (!email || !employeeNumber || !password) {
      setAlert({
        open: true,
        message: "All fields must be filleds",
        type: 'error'
      });
      
      return;
    }

    if (!validateEmail(email)) {
      setAlert({
        open: true,
        message: "Invalid email format",
        type: 'error'
      });
      
      return;
    }

    try{
      const response = await http.post(`/auth/signin_employee`, {
        email: email,
        password: password,
        employeeNumber: parseFloat(employeeNumber)
      });

      const { token, id } = response.data;

      if (token) {
        const decoded = jwt_decode.jwtDecode(token);
  
        sessionStorage.setItem('rewg42345ge_32g:F2sfgreagdc', token);
        Cookies.set('erg::#4%&gtreatrbaetrg53df', token);
        Cookies.set('GRW432::;3_#2vd345435', decoded.id);
        Cookies.set('rega434tgr_#23efdf2df', decoded.EmployeeRole);
      }

      console.log("Passou") 

      setAuthenticated(true);

      setAlert({
        open: true,
        message: "Login successful",
        type: 'success'
      });

      setTimeout(() => {
        navigate('/CE_Work_Space');
        window.location.reload();
      }, 3000);
      
    }catch (error) {
      console.log(error)
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        console.log(errorMessage)
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        });
      }
    }
  }

  return {
    employeeNumber, setEmployeeNumber,
    email, setEmail,
    password, setPassword,
    signin
  }
}