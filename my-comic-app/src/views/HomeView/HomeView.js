import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { useSwipeable } from 'react-swipeable';

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


  const comicSetter = (response) => (
    setComicsList([
      ...comicsList,
      ...response,
    ])
  );

  const goNext = async () => {
    if (comicsList[currentComicNumber]) {
      setCurrentComicNumber(currentComicNumber+1);
    } else {
      const response = await getComicByNumber((comicsList[currentComicNumber-1].num) - 1);
      comicSetter([response]);
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    goNext();
  };

  const handlePreviousClick = () => {
    if (currentComicNumber > 1) {
      setCurrentComicNumber(currentComicNumber-1);
    }
  };

  const onPageNumberClick  = (num) => num;

  const onPageSet = async (num) => {
    if (comicsList[num-1]) {
      setCurrentComicNumber(num);
    } else {
        const arrayToBeAdded = [];
        for (let i=0; i < (num - comicsList.length); i++) {
          const response = await getComicByNumber((comicsList[comicsList.length-1].num) - (i+1));
          arrayToBeAdded.push(response);
        }
        comicSetter(arrayToBeAdded);
      }
  };

  const swipeHandler = useSwipeable({
    onSwipedRight: handlePreviousClick,
    onSwipedLeft: goNext,
  });

  return (
    <div>
      <Header />   
        <div className="container" {...swipeHandler}>
          <div 
            className="arrow"
            role="button" 
            onClick={handlePreviousClick} 
            onKeyPress={handlePreviousClick}
            tabIndex={currentComicNumber === 1 ? -1 : 0}
            aria-label="previous comic"
          >
            {
              comicsList && currentComicNumber > 1
              && <ChevronLeft aria-hidden={currentComicNumber === 1}/>
            }
          </div>
          {
            (comicsList && !inProgress) && (
              <ComicTile
                title={comicsList[currentComicNumber-1].title}
                image={comicsList[currentComicNumber-1].img}
                alt={comicsList[currentComicNumber-1].alt}
                date={`${comicsList[currentComicNumber-1].month}/${comicsList[currentComicNumber-1].day}/${comicsList[currentComicNumber-1].year}`}
              />
            )
          }
          {
            (!comicsList || inProgress) && <Loading />
          }
          {
            comicsList && comicsList[0] && (<div 
              className="arrow" 
              role="button" 
              onClick={handleNextClick} 
              onKeyPress={handleNextClick}
              tabIndex={0}
              aria-label="next comic"
            >
              <ChevronRight/>
            </div>)
          }        
        </div>
        { 
          comicsList && comicsList[0] && <Pagination 
            currentPage={currentComicNumber}
            onClick={onPageNumberClick(onPageSet)}
          />
        }
        <Footer/>
    </div>
  );
};

export default HomeView;