import { useState } from "react";
import http from '../../Services/httpService';
import { NavsState } from "../../Contexts/Navs_Context";

const fetchUpdateCountries = () => {

  const { setAlert } = NavsState()

  const [ updateCountries, setUpdateCountries ] = useState();
  const [ isLoadingUpdate, setIsLoadingUpdate ] = useState(false);

  const UpdateCountriesFromDataBase = async () => {

    setIsLoadingUpdate(true)

    try{
      const response =  await http.post('/countries/upload-update-countries');

      setUpdateCountries(response.data)

      setIsLoadingUpdate(false);

      setAlert({
        open: true,
        message: "Update done successfully",
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
    UpdateCountriesFromDataBase, isLoadingUpdate
  };
}

export default fetchUpdateCountries;