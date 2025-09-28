import React from "react";
import SalesReportRow from "./SalesReportRow";

export default function SalesReportCard({ data, title, description, rowType }) {
  const sortedData = [...data].sort((a, b) => b.total - a.total);

  return (
    <div className="bg-white shadow-sm rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      <div>
        {sortedData.length > 0 ? (
          sortedData.map((item, index) => (
            <SalesReportRow
              key={item.id}
              rowTitle={item.name}
              rowDescription={
                rowType === "rep"
                  ? `${item.transactions} transactions, ${item.units} units`
                  : `${item.units} units sold`
              }
              amount={item.total}
              rank={index + 1}
            />
          ))
        ) : (
          <p className="text-sm text-gray-400">No data available</p>
        )}
      </div>
    </div>
  );
}
