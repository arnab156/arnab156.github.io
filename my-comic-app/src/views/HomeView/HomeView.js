import React from 'react';
import { ChevronsLeft, ChevronsRight } from 'react-feather';

import Header from '../../components/Header/Header';
import { ComicsContext } from '../../provider/ComicsProvider';
import ComicTile from '../../components/ComicTile/ComicTile';
import Pagination from '../../components/Pagination/Pagination';
import './HomeView.css';

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

  const onPageNumberClick  = (num) => num;

  const setter = (response) => (
    setComicsList([
    ...comicsList,
    ...response,
    ])
  );

  const onPageSet = async (num) => {
    if (num < currentComicNumber) {
      setCurrentComicNumber(num);
    } else {
      if (comicsList[num-1]) {
        setCurrentComicNumber(num)
      }
      else {
        const arrayToBeAdded = [];
        for (let i=0; i < (num - comicsList.length); i++) {
          const response = await getComicByNumber((comicsList[comicsList.length-1].num) - (i+1));
          arrayToBeAdded.push(response);
        }
        setter(arrayToBeAdded);
      }
    }
  };

  return (
    <div>
      <Header />   
        <div className="container">
          <div className="arrow">
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
              />
            )
          }
          <div className="arrow">
            <ChevronsRight onClick={handleNextClick} />
          </div>        
        </div>
        { 
          <Pagination 
            totalPage={comicsList && comicsList[0].num}
            currentPage={currentComicNumber}
            onClick={onPageNumberClick(onPageSet)}
          />
        }
      <footer>
        ©2021-2022 Arnab's Comics.
      </footer>
    </div>
  );
};

export default HomeView;