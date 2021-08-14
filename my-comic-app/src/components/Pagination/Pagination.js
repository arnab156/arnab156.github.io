import React from 'react';
import classnames from 'classnames';
import './Pagination.css';

const Pagination = ({
  currentPage,
  totalPage,
  // onClick,
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

  if (!currentPage) {
    return null;
  }

  return (
    <div className="pagination">
      {
        pageBlock.map(num => {
          return (
            <p className={classnames({
              'pageNumber': currentPage === num,
              'number': currentPage !== num,
            })}>
              {num}
            </p>
            );
        })
      }
    </div>
  );
};

export default Pagination;