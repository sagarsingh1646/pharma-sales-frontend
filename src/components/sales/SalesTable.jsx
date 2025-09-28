import { useState } from "react";
import SalesTableRow from "./SalesTableRow";

export default function SalesTable({ data, role, onEdit, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  // Calculate pagination values
  const totalPages = Math.ceil(data.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentData = data.slice(startIndex, startIndex + recordsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Function to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const maxVisiblePages = 5;
    const pages = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="bg-white rounded-xl p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-1">Sales Transactions</h2>
      {role === "rep" ? (
        <p className="text-gray-500 mb-4 text-sm">Your sales transactions</p>
      ) : (
        <p className="text-gray-500 mb-4">View all sales transactions across the team</p>
      )}

      {/* Table */}
      <div className="overflow-x-auto p-2">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th className="p-3 text-left font-medium text-sm">Date</th>
              <th className="p-3 text-left font-medium text-sm">Product</th>
              <th className="p-3 text-left font-medium text-sm">Quantity</th>
              <th className="p-3 text-left font-medium text-sm">Customer</th>
              <th className="p-3 text-left font-medium text-sm">Sales Rep</th>
              <th className="p-3 text-left font-medium text-sm">Total</th>
              {role === "rep" && (
                <th className="p-3 text-left font-medium text-sm">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentData.map((sale) => (
              <SalesTableRow
                key={sale._id}
                sale={sale}
                role={role}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center mt-4 space-y-3">
          {/* Prev / Next Buttons */}
          <div className="flex justify-between items-center w-full max-w-md">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 bg-gray-100 rounded disabled:opacity-50 hover:bg-gray-200"
            >
              &lt;
            </button>

            <div className="text-sm">
              Page <span className="font-semibold">{currentPage}</span> of{" "}
              <span className="font-semibold">{totalPages}</span>
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2  bg-gray-100 rounded disabled:opacity-50 hover:bg-gray-200"
            >
              &gt;
            </button>
          </div>

          {/* Jump to Specific Page */}
          <div className="flex flex-wrap justify-center space-x-2">
            {getPageNumbers().map((page, index) =>
              page === "..." ? (
                <span key={`ellipsis-${index}`} className="px-3 py-1 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-2  rounded border transition ${
                    currentPage === page
                      ? "bg-black text-white border-black"
                      : "bg-gray-100 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
