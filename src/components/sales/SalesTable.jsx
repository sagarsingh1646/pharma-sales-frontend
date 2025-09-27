import SalesTableRow from "./SalesTableRow";

export default function SalesTable({ data, role, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-1">Sales Transactions</h2>
      {role === "rep"? <p className="text-gray-500 mb-4 text-sm">Your sales transactions</p> : <p className="text-gray-500 mb-4">View all sales transactions across the team</p>}

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
              {role === "rep" && <th className="p-3 text-left font-medium text-sm">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((sale) => (
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
    </div>
  );
}
