import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface InvoiceTableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<any, any>[];
  tableName?: string;
  showPagination?: boolean;
  link?: {
    to: string;
    label: string;
  };
  pageSize?: number;
}

const fallbackData: unknown[] = [];

export const InvoiceTable: React.FC<InvoiceTableProps> = ({
  data,
  columns,
  tableName,
  showPagination = false,
  link,
  pageSize = 10,
}) => {
  //✅ GOOD: This will not cause an infinite loop of re-renders because `data` is a stable reference
  const [currentData] = useState(data);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  });

  // Columns and data are defined in a stable reference, will not cause infinite loop!
  const table = useReactTable({
    columns,
    data: currentData ?? fallbackData, //also good to use a fallback array that is defined outside of the component (stable reference)
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    },
  });

  const pageLinks = () => {
    const pageCount = table.getPageCount();
    const pageIndex = table.getState().pagination.pageIndex;
    const gotoPage = (page: number) => {
      table.setPageIndex(page);
    };

    const pageNumbers = [];
    const showEllipsis = pageCount > 5; // Only show ellipsis if we have more than 5 pages

    if (showEllipsis) {
      // Display first, last, current, and neighbors with ellipsis
      const firstPage = 0;
      const lastPage = pageCount - 1;
      const currentPage = pageIndex;

      // Always show the first page
      pageNumbers.push(
        <button
          className={clsx([
            ` text-sm font-medium   w-10 h-10 flex justify-center items-center rounded-lg`,
          ])}
          style={{
            cursor: pageIndex === firstPage ? `not-allowed` : `pointer`,
          }}
          key={firstPage}
          onClick={() => gotoPage(firstPage)}
          disabled={pageIndex === firstPage}
        >
          {firstPage + 1}
        </button>
      );

      if (currentPage > 2) {
        pageNumbers.push(<span key="start-dots">...</span>);
      }

      // Show current page and up to two neighbors
      const start = Math.max(currentPage - 1, 1);
      const end = Math.min(currentPage + 1, lastPage - 1);
      for (let i = start; i <= end; i++) {
        pageNumbers.push(
          <button
            className={clsx([
              pageIndex === i ? `cursor-not-allowed` : `cursor-pointer`,
              ` w-10 h-10 text-sm font-medium  flex justify-center items-center rounded-lg`,
            ])}
            key={i}
            onClick={() => gotoPage(i)}
            disabled={pageIndex === i}
          >
            {i + 1}
          </button>
        );
      }

      if (currentPage < lastPage - 2) {
        pageNumbers.push(<span key="end-dots">...</span>);
      }

      // Always show the last page
      pageNumbers.push(
        <button
          style={{
            cursor: pageIndex === lastPage ? `not-allowed` : `pointer`,
          }}
          className={clsx([
            ` text-sm font-medium  w-10 h-10 flex justify-center items-center `,
          ])}
          key={lastPage}
          onClick={() => gotoPage(lastPage)}
          disabled={pageIndex === lastPage}
        >
          {lastPage + 1}
        </button>
      );
    } else {
      // For small page counts, show all page numbers
      for (let i = 0; i < pageCount; i++) {
        pageNumbers.push(
          <button
            className={clsx([
              " text-sm font-medium  w-10 h-10 flex justify-center items-center rounded-lg",
              pageIndex === i &&
                `bg-[#F9FAFB] dark:bg-white dark:text-text-primary`,
            ])}
            style={{
              cursor: pageIndex === i ? `not-allowed` : `pointer`,
            }}
            key={i}
            onClick={() => gotoPage(i)}
            disabled={pageIndex === i}
          >
            {i + 1}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <div className="border border-border-light dark:border-border-dark rounded-2xl dark:bg-cardBackground-dark overflow-hidden">
        {/* title and navigation link */}
        {(tableName || link) && (
          <div className="flex justify-between items-center p-4">
            {tableName && (
              <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-1">
                {tableName}
              </h3>
            )}
            {link && (
              <Link
                to={link.to}
                className="border border-border-light dark:border-border-dark dark:bg-cardBackground-dark2 rounded-lg p-2  px-4 ml-auto"
              >
                {link.label}
              </Link>
            )}
          </div>
        )}
        {/* Table */}
        <div className="overflow-x-auto w-[90vw] sm:w-full scrollbar-none">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-cardBackground-light dark:bg-cardBackground-dark2">
              {table.getHeaderGroups().map((headerGroup) => {
                return (
                  <tr
                    key={headerGroup.id}
                    className={clsx([
                      (link || tableName) &&
                        "border-t border-border-light dark:border-border-dark ",
                    ])}
                  >
                    {headerGroup.headers.map(
                      (
                        header // map over the headerGroup headers array
                      ) => (
                        <th
                          key={header.id}
                          colSpan={header.colSpan}
                          onClick={header.column.getToggleSortingHandler()}
                          className="p-4 text-left text-sm font-normal text-nowrap"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      )
                    )}
                  </tr>
                );
              })}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={clsx([
                    "border-t border-border-light dark:border-border-dark ",
                    showPagination &&
                      "last:border-b last:border-border-light dark:last:border-border-dark",
                  ])}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 text-left text-nowrap"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        {showPagination && (
          <div className="flex items-center gap-2 mx-auto w-full justify-center p-4">
            <button
              className="cursor-pointer text-sm font-medium"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              ← Previous
            </button>
            {pageLinks()}
            <button
              className=" cursor-pointer text-sm font-medium"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
