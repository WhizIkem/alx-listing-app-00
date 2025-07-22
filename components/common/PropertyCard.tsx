// components/PropertyCard.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl relative">
      <img
        src={property.image}
        alt={property.name}
        width={400}
        height={300}
        className="object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-sm text-gray-500">
          {property.address.city}, {property.address.country}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">${property.price}</p>
          <p className="text-sm text-yellow-500">⭐ {property.rating}</p>
        </div>
        {property.discount !== "" && (
          <span className="absolute top-2 right-2 bg-blue-600 text-sm text-white font-semibold px-2 py-2 rounded z-10">
            {property.discount}
          </span>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
