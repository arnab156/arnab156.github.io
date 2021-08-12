import React from 'react';

import Header from '../../components/Header/Header';
import './HomeView.css';
import ComicsProvider from '../../provider/ComicsProvider';

const HomeView = () => {  
  return (
    <div>
      <Header />
       I am in Home View.
       <ComicsProvider>
          <div>
            { console.log('here')}
          </div>
       </ComicsProvider>
      <footer>
        ©2021-2022 Arnab's Comics.
      </footer>
    </div>
  );
};

export default HomeView;