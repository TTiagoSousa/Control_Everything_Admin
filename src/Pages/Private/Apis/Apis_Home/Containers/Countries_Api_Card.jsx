import React from 'react';
import '../Apis_Home.scss';
import { Link } from 'react-router-dom'

const Countries_Api_Card = () => {

  return (
    <div className='Card'>
      <div className='wrappe'>
        <div className='Tittle'>
          <span>Countries Api</span>
        </div>
        <div className='Information'>
          <Link to="Countries_Api">Api Dasboard</Link>
        </div>
      </div>
    </div>
  )
};

export default Countries_Api_Card;