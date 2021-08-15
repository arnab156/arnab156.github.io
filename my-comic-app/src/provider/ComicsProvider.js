import React from 'react';

export const ComicsContext = React.createContext({
  latest: [],
  getComicByNumber: (num) => { return null; },
});

ComicsContext.displayName = 'Comics';

const ComicsProvider = ({
  children,
}) => {
  const [latestComic, setLatestComic] = React.useState();
  const [inProgress, setInProgress] = React.useState(false);

  React.useEffect(() => {
      (async () => {
        try { 
           await fetch("https://getxkcd.now.sh/api/comic?num=latest")
          .then(res => res.json())
          .then(data => setLatestComic(data))
        } catch (error) {
          throw(error);
        }
      })();
  }, []);

  const getComicByNumber = async (number) => {
    setInProgress(true);
    try { 
      const response = await fetch(`https://getxkcd.now.sh/api/comic?num=${number}`)
      .then(res => res.json())
      .then( data => (data))
      return response;
   } catch (error) {
     throw(error);
   } finally {
    setInProgress(false);
   }
  };

  return (
    <ComicsContext.Provider
      value={{
        latestComic,
        getComicByNumber,
        inProgress,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};

export default ComicsProvider;
