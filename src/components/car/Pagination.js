import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; 
    const range = Math.min(totalPages, maxPagesToShow);
    const startPage = Math.max(1, currentPage - Math.floor(range / 2));
    const endPage = Math.min(totalPages, startPage + range - 1);

    if (startPage > 1) {
      pages.push(1); 
      if (startPage > 2) pages.push('...'); 
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push('...'); 
      pages.push(totalPages); 
    }

    return pages;
  };

  return (
    <div className="pagination justi-center">
      <ul className="pagination">
        <li
          className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <a className="page-link">trước</a>
        </li>
        {renderPageNumbers().map((page, index) => (
          <li
            key={index}
            className={`page-item ${page === currentPage ? "active" : ""} ${page === '...' ? "disabled" : ""}`}
            onClick={() => {
              if (page !== '...') {
                handlePageChange(page);
              }
            }}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <a className="page-link">sau</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
