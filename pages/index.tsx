// pages/index.tsx
import React, { useState } from "react";
import { heroBackground } from "@/constants/images";
import Pill from "@/components/Pill"; // Make sure the path is correct
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";

const filters = ["Top Villa", "Self Checkin", "Beachfront", "Pet Friendly", "Countryside"];

const Home: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 px-4 bg-white shadow-sm">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isSelected={selectedFilter === filter}
              onClick={() => setSelectedFilter(filter)}
            />
          ))}
        </div>
      </section>
      {/* Property listing Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE
            .filter((property) =>
              selectedFilter
                ? property.category.includes(selectedFilter)
                : true
            )
            .map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
