import React, { useEffect, useState } from 'react';
import './Sidebar_Home.scss';
import { Navigation_Map } from './Navigation_Map';
import { NavLink, useLocation } from 'react-router-dom';
import * as Color from '../../../Styles/Colors';
import * as Icon from '../../../Imports/icons';

const Sidebar_Home = () => {

  const location = useLocation();

  const [activeItem, setActiveItem] = useState(null);

  // Enables or disables the clicked item in the main navigation.
  const handleClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  // Returns class 'active' if the submenu item is active, otherwise returns an empty string.
  const isSubmenuActive = (item) => {
    return activeItem === item ? 'active' : '';
  };

  const getLinkColorStyle = (item) => {
    return {
      color: item.link === location.pathname ? Color.blue_darker : Color.gray
    };
  };

  return (
    <>
      <nav className='Sidebar_Home'>
       <header></header>
       <div className="Sidebar_Body">
        {Navigation_Map.map((item, index) =>(
          <div className="Wrap_Menu" key={index}>
            <NavLink
              className="Hyper_Link"
              onClick={() => handleClick(item.title)}
              to={item.link}
              key={index}
              style={getLinkColorStyle(item)}
            >
              <div className="Informations_Link">
                <div className="Icon">
                  <Icon.GLobal_SVG Global_Color={Color.whitte}>{item.icon}</Icon.GLobal_SVG>
                </div>
                <span className="Text">{item.title}</span>
              </div>
              {item.submenuItems && (
                <div className='Icon_Arrow'>
                  <div className={`Arrow ${isSubmenuActive(item.title)}`}>
                    <Icon.Simple_Triangle 
                      Global_Color={Color.whitte}
                    />
                  </div>
                </div>
              )}
            </NavLink>
            {item.submenuItems && (
              <div className={`Div_SubMenu ${isSubmenuActive(item.title)}`}>
                <div className='Line'>
                  <div></div>
                </div>
                <div className="Nav_Link_Group">
                  {item.submenuItems.map((submenuItem, index) => (
                    <NavLink
                      to={submenuItem.link}
                      className="Hyper_Link"
                      onClick={() => handleSubmenuClick(item.title)}
                      key={index}
                      style={getLinkColorStyle(item)}
                    >
                      {submenuItem.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
       </div>
      </nav>
    </>
  )
}

export default Sidebar_Home;
