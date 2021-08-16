import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

import Header from '../../components/Header/Header';
import { ComicsContext } from '../../provider/ComicsProvider';
import ComicTile from '../../components/ComicTile/ComicTile';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import './HomeView.css';

const HomeView = () => {  
  const { latestComic, getComicByNumber, inProgress } = React.useContext(ComicsContext);
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
        setCurrentComicNumber(num);
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
          <div 
            className="arrow"
            role="button" 
            onClick={handlePreviousClick} 
            onKeyPress={handlePreviousClick}
            tabIndex={currentComicNumber === 1 ? -1 : 0}
            aria-label="previous comic"
          >
            {
              currentComicNumber > 1
              && <ChevronLeft aria-hidden={currentComicNumber === 1}/>
            }
          </div>
          {
            (comicsList && !inProgress) && (
              <ComicTile
                title={comicsList[currentComicNumber-1].title || ''}
                image={comicsList[currentComicNumber-1].img}
                alt={comicsList[currentComicNumber-1].alt}
                date={`${comicsList[currentComicNumber-1].month}/${comicsList[currentComicNumber-1].day}/${comicsList[currentComicNumber-1].year}`}
              />
            )
          }
          {
            (!comicsList || inProgress) && <Loading />
          }
          <div 
            className="arrow" 
            role="button" 
            onClick={handleNextClick} 
            onKeyPress={handleNextClick}
            tabIndex={0}
            aria-label="next comic"
          >
            <ChevronRight/>
          </div>        
        </div>
        { 
          <Pagination 
            totalPage={comicsList && comicsList[0].num}
            currentPage={currentComicNumber}
            onClick={onPageNumberClick(onPageSet)}
          />
        }
        <Footer/>
    </div>
  );
};

export default HomeView;