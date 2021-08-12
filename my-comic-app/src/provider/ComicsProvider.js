import React from 'react';

export const ComicsContext = React.createContext([]);
ComicsContext.displayName = 'Comics';

const ComicsProvider = ({
  children,
}) => {
  const [comics, setComics] = React.useState([]);

  React.useEffect(() => {
      (async () => {
        try { 
          const response = await fetch("http://xkcd.com/info.0.json");
          console.log('response', response);
          setComics([...response]);
        } catch (error) {
          console.log(error);
        }
      })();
  }, []);

  return (
    <ComicsContext.Provider
      value={comics}
    >
      {children}
    </ComicsContext.Provider>
  );
};

export default ComicsProvider;
