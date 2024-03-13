import React, { useState, createContext, useContext, useEffect } from 'react';

const Language = createContext({});

const LanguageContext  = ({ children }) => {

  const [language, setLanguage] = useState('en'); // Idioma padrão

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en'; // Fallback para 'en' caso não exista no localStorage
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage); // Atualiza o i18next com o idioma armazenado
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang); // Importante para atualizar o idioma no i18next
  };

  return (
    <Language.Provider value={{ 
        language, switchLanguage
      }}>
      {children}
    </Language.Provider>    
  )

};

export default LanguageContext;

export const LanguageState = () => {
  return useContext(Language);
};