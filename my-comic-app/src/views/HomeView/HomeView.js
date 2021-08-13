import React from 'react';

import Header from '../../components/Header/Header';
import './HomeView.css';
import {ComicsContext} from '../../provider/ComicsProvider';

const HomeView = () => {  
  const { latestComic } = React.useContext(ComicsContext);
  console.log('latestComic', latestComic);

  return (
    <div>
      <Header />
       I am in Home View.
       
        <div>
          "Inside the Div we are"
        </div>

      <footer>
        ©2021-2022 Arnab's Comics.
      </footer>
    </div>
  );
};

export default HomeView;