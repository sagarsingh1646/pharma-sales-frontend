import { Edit, Trash2 } from "lucide-react";

export default function SalesTableRow({ sale, role, onEdit, onDelete }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 text-gray-900">
      {/* Date */}
      <td className="p-4 text-sm">{new Date(sale.dateOfSale).toLocaleDateString("en-GB")}</td>

      {/* Product + Price */}
      <td className="p-4">
        <div className="font-medium text-sm">{sale.productName}</div>
        <div className="text-gray-500 text-sm">${sale.pricePerUnit} per unit</div>
      </td>

      {/* Quantity */}
      <td className="p-4">
        <span className="bg-gray-100 px-3 py-1 rounded-full font-medium text-sm">
          {sale.quantity}
        </span>
      </td>

      {/* Customer */}
      <td className="p-4">
        <div className="font-medium text-sm">{sale.customerName}</div>
        <div className="text-gray-500 text-sm">{sale.customerEmail}</div>
      </td>

      {/* Sales Rep */}
      <td className="p-4 text-sm">{sale.createdBy.firstName} {sale.createdBy.lastName}</td>

      {/* Total */}
      <td className="p-4 font-medium text-sm">
        ${(sale.quantity * sale.pricePerUnit).toFixed(2)}
      </td>

      {/* Actions (only for Sales Rep) */}
      {role === "rep" && (
        <td className="p-4 flex space-x-2">
          {/* Edit Button */}
          <button
            onClick={() => onEdit(sale._id)}
            className="flex items-center border border-gray-200 p-2 rounded hover:bg-blue-600 transition"
            title="Edit Sale"
          >
            <Edit className="w-4 h-4"/>
          </button>

          {/* Delete Button */}
          <button
            onClick={() => onDelete(sale._id)}
            className="flex items-center border border-gray-200  p-2 rounded hover:bg-red-600 transition"
            title="Delete Sale"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </td>
      )}
    </tr>
  );
}
