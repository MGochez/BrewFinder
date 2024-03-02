import { useEffect, useState } from 'react';

const usePagination = ( filteredList, cardsPerPage = 10) => {

  const [currentList, setCurrentList] = useState(filteredList)
  const [currentPageList, setCurrentPageList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setTotalPages(Math.ceil(currentList.length / cardsPerPage))
    setCurrentPage(1)
  }, [currentList])
  
  useEffect(() => {
    // if (currentList.length) {
      const firstIndex = cardsPerPage * (currentPage - 1);
      const lastIndex = cardsPerPage * currentPage;
      setCurrentPageList(currentList.slice(firstIndex, lastIndex))
    //}
  },[currentPage, currentList])
  
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  };

  const handleClickNext = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage);
  };

  return {
    currentPage,
    currentPageList,
    totalPages,
    currentList,
    setCurrentList,
    handleClick,
    handleClickPrev,
    handleClickNext
  };
};

export default usePagination;
