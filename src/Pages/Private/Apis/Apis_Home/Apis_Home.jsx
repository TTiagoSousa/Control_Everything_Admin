import React from 'react';
import './Apis_Home.scss';
import Countries_Api_Card from './Containers/Countries_Api_Card';

const Apis_Home = () => {
  return (
    <div className='Apis_Home'>
      <section className='Cards_Section'>
        <Countries_Api_Card />
      </section>
    </div>
  )
};

export default Apis_Home;