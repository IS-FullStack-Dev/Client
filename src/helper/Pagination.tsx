import React from 'react';
import './Pagination.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <span
          key={index}
          className={`dot ${index + 1 === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(index + 1)}
        ></span>
      ))}
    </div>
  );
};

export default Pagination;
