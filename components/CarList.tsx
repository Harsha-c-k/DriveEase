import CarCard from "./CarCard";

const cars = [
  {
    id: 1,
    name: "Toyota Innova",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
    price: 2500,
    fuel: "Diesel",
    transmission: "Manual",
    seats: 7,
  },
  {
    id: 2,
    name: "Hyundai Creta",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
    price: 2200,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
  },
  {
    id: 3,
    name: "Mahindra XUV700",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900",
    price: 3000,
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
  },
];

export default function CarList() {
  return (
    <section
    id="cars"
    className="max-w-7xl mx-auto py-16 px-6 mb-20"
    >

      <h2 className="text-4xl font-bold text-center mb-12">
        Available Cars
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {cars.map((car) => (
          <CarCard
            key={car.id}
            name={car.name}
            image={car.image}
            price={car.price}
            fuel={car.fuel}
            transmission={car.transmission}
            seats={car.seats}
          />
        ))}

      </div>

    </section>
  );
}