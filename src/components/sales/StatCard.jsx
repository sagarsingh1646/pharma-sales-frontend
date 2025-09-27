import React from "react";

export default function StatCard({ title, stats, description, icon: Icon, isQuantity }) {
  return (
    <div className="flex justify-between items-start bg-white border border-gray-200 rounded-xl p-6 w-full">
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <div className="text-3xl font-bold mt-1">
          {isQuantity ? stats : `$${stats.toLocaleString()}`}
        </div>
        {description && (
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        )}
      </div>
      {Icon && <Icon className="text-gray-400" size={20} />}
    </div>
  );
}
