import React from 'react';
import '../Apis_Home.scss';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Currencies_Api_Card = () => {

  const { t } = useTranslation();

  return (
    <div className='Card'>
      <div className='wrappe'>
        <div className='Tittle'>
          <span>{t("Currencies API")}</span>
        </div>
        <div className='Information'>
          <Link to="Currencies_Api">Api Dasboard</Link>
        </div>
      </div>
    </div>
  )
};

export default Currencies_Api_Card;