export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
      <h2 className="text-5xl font-bold mb-6">
        Find Your Perfect Ride
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Rent premium cars quickly, securely, and at affordable prices.
        Whether it's a family trip or a business meeting,
        DriveEase has the perfect vehicle for you.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Browse Cars
        </button>

        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100">
          Learn More
        </button>
      </div>
    </section>
  );
}