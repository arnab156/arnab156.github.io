import React from 'react';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

export const ComicsContext = React.createContext({
  latest: [],
  getComicByNumber: () => { return null; },
});

ComicsContext.displayName = 'Comics';

const ComicsProvider = ({
  children,
}) => {
  const [latestComic, setLatestComic] = React.useState();
  const [inProgress, setInProgress] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState();

  React.useEffect(() => {
      (async () => {
        try { 
           await fetch('https://getxkcd.now.sh/api/comic?num=latest')
          .then(res => res.json())
          .then(data => setLatestComic(data));
        } catch (error) {
          setErrorMsg('Error getting latest comics', error);
          throw(error);
        }
      })();
  }, []);

  const getComicByNumber = async (number) => {
    setInProgress(true);
    try { 
      const response = await fetch(`https://getxkcd.now.sh/api/comic?num=${number}`)
        .then(res => res.json())
        .then(data => data);
      return response;
   } catch (error) {
      setErrorMsg('Error getting the next comic', error);
     throw(error);
   } finally {
    setInProgress(false);
   }
  };

  React.useEffect(() => setTimeout(() => setErrorMsg(), 3000), [errorMsg]);
  
  return (
    <ComicsContext.Provider
      value={{
        latestComic,
        getComicByNumber,
        inProgress,
      }}
    >
      {errorMsg && <ErrorMessage message={errorMsg} />}
      {children}
    </ComicsContext.Provider>
  );
};

export default ComicsProvider;
