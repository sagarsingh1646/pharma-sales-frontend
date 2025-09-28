

export default function SalesReportRow({
  rowTitle,
  rowDescription,
  amount,
  rank,
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-2">
      {/* Left side - Rep info */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800">{rowTitle}</h3>
        <p className="text-xs text-gray-500">{rowDescription}</p>
      </div>

      {/* Right side - Amount + Rank */}
      <div className="text-right">
        <p className="text-sm font-semibold text-gray-800">
          ${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
        <p className="text-xs text-gray-400">#{rank}</p>
      </div>
    </div>
  );
}
