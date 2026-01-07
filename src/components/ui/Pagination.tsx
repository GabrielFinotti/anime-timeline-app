import { tv, VariantProps } from "tailwind-variants";
import ArrowPagination from "@/public/icons/arrow.svg";
import { useState, useMemo } from "react";

const paginationStyles = tv({
  slots: {
    container: "m-auto flex w-fit items-center justify-center gap-2",
    navButton:
      "hover:bg-dark-700/50 hover:text-primary-500 flex cursor-pointer items-center justify-center rounded-lg p-2 text-neutral-400 backdrop-blur-sm transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-neutral-400",
    navIcon: "h-5 w-5 transition-transform duration-300",
    pageContainer: "flex items-center gap-1.5",
    pageButton:
      "hover:bg-dark-700/50 hover:text-primary-400 min-w-10 cursor-pointer rounded-lg px-2.5 py-1.5 text-sm font-medium text-neutral-300 backdrop-blur-sm transition-all duration-300",
    pageButtonActive:
      "bg-primary-500 shadow-glow-primary hover:bg-primary-600 scale-110 text-neutral-100 hover:text-neutral-100",
    pageSeparator: "px-1 text-neutral-500",
  },
});

const slots = paginationStyles();

type PaginationProps = VariantProps<typeof paginationStyles> & {
  totalDocs: number;
};

const Pagination = (props: PaginationProps) => {
  const DOCS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(props.totalDocs / DOCS_PER_PAGE);
  }, [props.totalDocs]);

  const visiblePages = useMemo(() => {
    const pages: number[] = [];
    const maxVisible = 3;

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = currentPage - 1;
    let end = currentPage + 1;

    if (start < 1) {
      start = 1;
      end = 3;
    } else if (end > totalPages) {
      start = totalPages - 2;
      end = totalPages;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <nav className={slots.container()}>
      <button
        className={slots.navButton()}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!canGoPrevious}
        type="button"
        aria-label="Página anterior"
      >
        <ArrowPagination className={`${slots.navIcon()} rotate-180`} />
      </button>
      <div className={slots.pageContainer()}>
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`${slots.pageButton()} ${
              page === currentPage ? slots.pageButtonActive() : ""
            }`}
            type="button"
            aria-label={`Página ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className={slots.navButton()}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!canGoNext}
        type="button"
        aria-label="Próxima página"
      >
        <ArrowPagination className={slots.navIcon()} />
      </button>
    </nav>
  );
};

export default Pagination;
