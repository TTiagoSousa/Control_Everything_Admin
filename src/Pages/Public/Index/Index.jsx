import React from 'react';
import './Index.scss';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import { useTranslation } from 'react-i18next';
const Index = () => {
  
  const { t, i18n } = useTranslation();

  console.log("Resources:", i18n.options.resources); // Verifica os recursos de tradução

  return (
    <div className='Index'>
      <div>
        <Global_Button 
          Text={t("Login")}
          to="Auth"
        />
      </div>
    </div>
  )
};

export default Index;