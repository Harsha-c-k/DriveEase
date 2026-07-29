"use client";

import { useState } from "react";

export default function SearchBar() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    setSearchResult(
      `Searching cars in ${pickupLocation} from ${pickupDate} to ${returnDate}`
    );
  };

  return (
    <section className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto -mt-16 relative z-10">
      <h2 className="text-2xl font-bold mb-6">
        Search Your Ride
      </h2>

      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >

        <input
          type="text"
          placeholder="Pickup Location"
          className="border p-3 rounded-lg"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />

        <input
          type="date"
          className="border p-3 rounded-lg"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />

        <input
          type="date"
          className="border p-3 rounded-lg"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Search
        </button>

      </form>

      <p className="mt-4">
        Pickup Location: {pickupLocation}
      </p>
      <p className="mt-2 font-semibold text-blue-600">
        {searchResult}
      </p>
    </section>
  );
}