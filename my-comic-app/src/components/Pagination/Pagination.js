import React from 'react';
import classnames from 'classnames';
import { ChevronsLeft } from 'react-feather';

import './Pagination.css';

const Pagination = ({
  currentPage,
  onClick,
}) => {
  const initialBlock = [1,2,3,4,5,6,7];
  const [pageBlock, setPageBlock] = React.useState(initialBlock);

  React.useEffect(() => {
    setPageBlock(initialBlock);
  },[]);

  React.useEffect(() => {
    if (currentPage > 4) {
      const newArr = [];
      for(let i = -3; i < 4; i++) {
        newArr.push(currentPage + i);
      };

      setPageBlock(newArr);
    } else if (pageBlock !== initialBlock) {
      setPageBlock(initialBlock);
    }
  }, [currentPage]);

  const handleClick = (n) => {
    if (onClick) {
      onClick(n);
    }
  };

  if (!currentPage) {
    return null;
  }

  return (
    <div className="pagination">
      {
        currentPage > 4 && (
          <ChevronsLeft 
            className="paginationArrow" 
            onClick={() => handleClick(1)} 
            onKeyPress={() => handleClick(1)} 
            tabIndex="0"
          />
        )
      }
      {
        pageBlock.map(num => {
          return (
            <div className={classnames({
              'pageNumber': currentPage === num,
              'number': currentPage !== num,
            })}
              onClick={() => handleClick(num)}
              onKeyPress={() => handleClick(num)}
              key={`pageNum-${num}`}
              tabIndex={0}
              role="button"
              aria-label={`page number ${num}`}
            >
              {num}
            </div>
            );
        })
      }
    </div>
  );
};

export default Pagination;