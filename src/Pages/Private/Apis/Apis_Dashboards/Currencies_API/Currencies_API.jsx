import React from 'react'
import './Currencies_API.scss';
import GLobal_Button from '../../../../../Components/Buttons/Global_Button/Global_Button';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useTranslation } from 'react-i18next';
import fetchUploadCurrencies from '../../../../../Hooks/Currencies/fetchUploadCurrencies';
import fetchUpdateCurrenciesRate from '../../../../../Hooks/Currencies/fetchUpdateCurrenciesRate';

const Currencies_API = () => {

  const { t } = useTranslation();

  const { UploadCurrencies, isLoadingUpload } = fetchUploadCurrencies();
  const { UpdateCurrenciesRate, isLoadingUpdate } = fetchUpdateCurrenciesRate()

  console.log()

  return (
    <div className='Currencies_API'>
      <div className='Alert'>
        <Mui_Alert />
      </div>
      <section className='Actions'>
        <div>
          <GLobal_Button 
            Text={isLoadingUpload ? t("Loading, dont close the page...") : t("Upload currencies")}
            onClick={UploadCurrencies}
          />
        </div>
        <div>
          <GLobal_Button 
            Text={isLoadingUpdate ? t("Loading, dont close the page...") : t("Update currencies rate")}
            onClick={UpdateCurrenciesRate}
          />
        </div>
      </section>
    </div>
  )
}

export default Currencies_API;