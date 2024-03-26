import { useState } from "react";
import http from '../../Services/httpService';
import { NavsState } from "../../Contexts/Navs_Context";

const fetchUpdateCurrenciesRate = () => {

  const { setAlert } = NavsState()

  const [ isLoadingUpdate, setIsLoadingUpdate ] = useState(false);

  const UpdateCurrenciesRate = async () => {

    setIsLoadingUpdate(true)

    try{
      const response =  await http.post('/currency/update-currencies-rate');

      setIsLoadingUpdate(false);

      setAlert({
        open: true,
        message: "Upload done successfully",
        type: 'success'
      });

      window.location.reload();

    }catch(error){
      console.log(error)
      if (error.response && error.response.status === 401) {
        const errorMessage = error.response.data.message;
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        });
      } else if(error.response && error.response.status === 403) {
        const errorMessage = error.response.data.message;
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        });
      }
      setIsLoadingUpdate(false)
    }
  }

  return {
    UpdateCurrenciesRate, isLoadingUpdate
  };
}

export default fetchUpdateCurrenciesRate;