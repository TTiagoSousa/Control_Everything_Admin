import React from 'react'
import './Currencies_API.scss';
import GLobal_Button from '../../../../../Components/Buttons/Global_Button/Global_Button';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useTranslation } from 'react-i18next';
import fetchUploadCurrencies from '../../../../../Hooks/Currencies/fetchUploadCurrencies';

const Currencies_API = () => {

  const { t } = useTranslation();

  const { UploadCurrencies, isLoadingUpload } = fetchUploadCurrencies();

  console.log()

  return (
    <div className='Countries_Api'>
      <div className='Alert'>
        <Mui_Alert />
      </div>
      <section className='Actions'>
        <div>
          <GLobal_Button 
            Text={isLoadingUpload ? "Loading, dont close the page..." : t("Upload currencies")}
            onClick={UploadCurrencies}
          />
        </div>
      </section>
    </div>
  )
}

export default Currencies_API;