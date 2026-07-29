type CarProps = {
  name: string;
  image: string;
  price: number;
  fuel: string;
  transmission: string;
  seats: number;
};

export default function CarCard({
  name,
  image,
  price,
  fuel,
  transmission,
  seats,
}: CarProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">

      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {name}
        </h2>

        <p className="text-blue-600 text-lg font-semibold mt-2">
          ₹{price}/day
        </p>

        <div className="mt-4 space-y-2 text-gray-600">

          <p>⛽ Fuel : {fuel}</p>

          <p>⚙ Transmission : {transmission}</p>

          <p>👥 Seats : {seats}</p>

        </div>

        <button
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Book Now
        </button>

      </div>

    </div>
  );
}