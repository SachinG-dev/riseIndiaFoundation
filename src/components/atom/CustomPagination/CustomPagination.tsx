import React from "react";
import { Pagination } from "react-bootstrap";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CustomPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CustomPaginationProps) {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };
  if (totalPages > 1) {
    return (
      <Pagination className="custom-pagination w-100">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="pagination-pages d-flex">
            {[...Array(Math.min(totalPages, 30))].map((_, index) => (
              <Pagination.Item
                key={`page-${index + 1}`}
                active={index === currentPage}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </div>
          <div className="pagination-arrows d-flex">
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Previous
            </Pagination.Prev>
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Pagination.Next>
          </div>
        </div>
      </Pagination>
    );
  }
}
