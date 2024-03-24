import React from 'react'
import './Countries_Api.scss';
import fetchUpdateCountries from '../../../../../Hooks/Countries/fetchUpdateCountries';
import GLobal_Button from '../../../../../Components/Buttons/Global_Button/Global_Button';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useTranslation } from 'react-i18next';

const Countries_Api = () => {

  const { t } = useTranslation();

  const { UpdateCountriesFromDataBase, isLoadingUpdate } = fetchUpdateCountries();

  return (
    <div className='Countries_Api'>
      <div className='Alert'>
        <Mui_Alert />
      </div>
      <section className='Actions'>
        <div>
          <GLobal_Button 
            Text={isLoadingUpdate ? "Loading, dont close the page..." : t("Update Countries api")}
            onClick={UpdateCountriesFromDataBase}
          />
        </div>
      </section>
    </div>
  )
}

export default Countries_Api;