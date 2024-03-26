import { useState } from "react";
import http from '../../Services/httpService';
import { NavsState } from "../../Contexts/Navs_Context";

const fetchUploadCurrencies = () => {

  const { setAlert } = NavsState()

  const [ uploadCountries, setUploadCountries ] = useState();
  const [ isLoadingUpload, setIsLoadingUpload ] = useState(false);

  const UploadCurrencies = async () => {

    setIsLoadingUpload(true)

    try{
      const response =  await http.post('/currency/upload-currencies');

      setUploadCountries(response.data)

      setIsLoadingUpload(false);

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
      setIsLoadingUpload(false)
    }
  }

  return {
    UploadCurrencies, isLoadingUpload
  };
}

export default fetchUploadCurrencies;