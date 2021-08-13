import React from 'react';

import Header from '../../components/Header/Header';
import './HomeView.css';
import { ComicsContext } from '../../provider/ComicsProvider';
import ComicTile from '../../components/ComicTile/ComicTile'

const HomeView = () => {  
  const { latestComic } = React.useContext(ComicsContext);
  const [comicsList, setComicsList] = React.useState();

  React.useEffect(() => {
    if (latestComic) {
      setComicsList([latestComic]);
    }
  }, [latestComic]);

  console.log('comicsList', comicsList);

  return (
    <div>
      <Header />   
        <div>
          {
            comicsList && (
              <ComicTile
                title={comicsList[0].title || ''}
                image={comicsList[0].img}
                alt={comicsList[0].alt}
                date={`${comicsList[0].month}/${comicsList[0].day}/${comicsList[0].year}`}
                num={comicsList[0].num}
              />
            )
          }
        </div>

      <footer>
        ©2021-2022 Arnab's Comics.
      </footer>
    </div>
  );
};

export default HomeView;