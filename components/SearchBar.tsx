"use client";

import { useState } from "react";

export default function SearchBar() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <section className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto -mt-16 relative z-10">
      <h2 className="text-2xl font-bold mb-6">
        Search Your Ride
      </h2>

      <form
        onSubmit={(e) => {
            e.preventDefault();
            console.log("Searching for:", pickupLocation);
        }}
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
        />

        <input
          type="date"
          className="border p-3 rounded-lg"
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
    </section>
  );
}