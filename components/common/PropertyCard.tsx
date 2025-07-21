// components/PropertyCard.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl">
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
      </div>
    </div>
  );
};

export default PropertyCard;
