import React from "react";

interface PagingButtonsInterface {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const PagingButtons: React.FC<PagingButtonsInterface> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  const DOTS: string = "...";

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = () => {
    const totalPageNumbers: number = siblingCount * 2 + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex: number = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex: number = Math.min(
      currentPage + siblingCount,
      totalPages
    );

    const showLeftDots: boolean = leftSiblingIndex > 2;
    const showRightDots: boolean = rightSiblingIndex < totalPages - 1;

    const firstPageIndex: number = 1;
    const lastPageIndex: number = totalPages;

    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPages];
    }

    if (showLeftDots && !showRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (showLeftDots && showRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  };

  const pages: (number | string)[] = paginationRange()!;

  if (!pages) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-9 mb-9">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Prev
      </button>

      {pages.map((page: number | string, idx: number) => {
        if (page === DOTS) {
          return (
            <span key={idx} className="px-3 py-1 text-gray-500">
              {DOTS}
            </span>
          );
        }

        return (
          <button
            key={idx}
            onClick={() => onPageChange(page as number)}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-blue-600 text-white font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default PagingButtons;
