import React from 'react';

export const ComicsContext = React.createContext({
  latest: [],
});
ComicsContext.displayName = 'Comics';

const ComicsProvider = ({
  children,
}) => {
  const [latestComic, setLatestComic] = React.useState();

  React.useEffect(() => {
      (async () => {
        try { 
           await fetch("https://getxkcd.now.sh/api/comic?num=latest")
          .then(res => res.json())
          .then( data => setLatestComic(data))
        } catch (error) {
          throw(error);
        }
      })();
  }, []);

  return (
    <ComicsContext.Provider
      value={{latestComic}}
    >
      {children}
    </ComicsContext.Provider>
  );
};

export default ComicsProvider;
