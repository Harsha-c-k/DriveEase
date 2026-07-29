"use client";

import { useState } from "react";

export default function SearchBar() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [searchResult, setSearchResult] = useState("");
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      pickupLocation.trim() === "" ||
      pickupDate === "" ||
      returnDate === ""
    ) {
      setError("Please fill all fields.");
      setSearchResult("");
      return;
    }

    if (pickupDate > returnDate) {
      setError("Return date cannot be before pickup date.");
      setSearchResult("");
      return;
    }

    setError("");

    setSearchResult(
      `Searching cars in ${pickupLocation} from ${pickupDate} to ${returnDate}`
    );
  };

  const clearForm = () => {
    setPickupLocation("");
    setPickupDate("");
    setReturnDate("");
    setSearchResult("");
    setError("");
  };

  return (
    <section className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto -mt-16 relative z-10">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Search Your Ride
      </h2>

      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >

        <input
          type="text"
          placeholder="Pickup Location"
          className="border rounded-lg p-3"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />

        <input
          type="date"
          className="border rounded-lg p-3"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />

        <input
          type="date"
          className="border rounded-lg p-3"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>

      </form>

      <div className="mt-4 flex gap-3">

        <button
          type="button"
          onClick={clearForm}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          Clear
        </button>

      </div>

      {error && (
        <p className="text-red-600 mt-4 font-medium">
          {error}
        </p>
      )}

      {searchResult && (
        <div className="mt-6 rounded-lg bg-blue-50 border border-blue-200 p-4">

          <h3 className="font-bold text-lg mb-2">
            Search Summary
          </h3>

          <p>{searchResult}</p>

        </div>
      )}

    </section>
  );
}