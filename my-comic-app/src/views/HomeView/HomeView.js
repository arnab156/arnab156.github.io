import React from 'react';

import Header from '../../components/Header/Header';
import './HomeView.css';
import { ComicsContext } from '../../provider/ComicsProvider';
import ComicTile from '../../components/ComicTile/ComicTile';
import { ChevronsLeft, ChevronsRight } from 'react-feather';

const HomeView = () => {  
  const { latestComic, getComicByNumber } = React.useContext(ComicsContext);
  const [comicsList, setComicsList] = React.useState();
  const [currentComicNumber, setCurrentComicNumber] = React.useState(1);

  React.useEffect(() => {
    if (latestComic) {
      setComicsList([latestComic]);
    }
  }, [latestComic]);

  React.useEffect(() => {
    if (comicsList && comicsList.length) {
      setCurrentComicNumber(comicsList.length);
    }
  }, [comicsList]);


  const handleNextClick = async (e) => {
    e.preventDefault();

    if (comicsList[currentComicNumber]) {
      setCurrentComicNumber(currentComicNumber+1);
    } else {
      const response = await getComicByNumber((comicsList[currentComicNumber-1].num) - 1);
      setComicsList([
        ...comicsList,
        response,
      ]);
    }
  };

  const handlePreviousClick = () => {
    if (currentComicNumber > 1) {
      setCurrentComicNumber(currentComicNumber-1);
    }
  };

  return (
    <div>
      <Header />   
        <div className="container">
        
          <div>
            {
              currentComicNumber > 1
              && <ChevronsLeft onClick={handlePreviousClick} />
            }
          </div>
       
          {
            comicsList && (
              <ComicTile
                title={comicsList[currentComicNumber-1].title || ''}
                image={comicsList[currentComicNumber-1].img}
                alt={comicsList[currentComicNumber-1].alt}
                date={`${comicsList[currentComicNumber-1].month}/${comicsList[currentComicNumber-1].day}/${comicsList[currentComicNumber-1].year}`}
                num={currentComicNumber}
              />
            )
          }

          <ChevronsRight onClick={handleNextClick} />
        </div>

      <footer>
        ©2021-2022 Arnab's Comics.
      </footer>
    </div>
  );
};

export default HomeView;