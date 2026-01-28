"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    transmission: "Автомат",
    category: "Седан",
    pricePerDay: "",
    imageUrl: ""  
  });

  const addCar = async () => {
    if (!car.brand || !car.model || !car.pricePerDay || !car.imageUrl) {
      alert("Заполните все обязательные поля");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/myCars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand: car.brand,
          model: car.model,
          year: car.year,
          transmission: car.transmission,
          class: car.category,
          pricePerDay: Number(car.pricePerDay),
          ownerId: 2,
          images: [car.imageUrl],  
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.statusText}`);
      }

      router.push("/mycars");
    } catch (error) {
      alert(`Не удалось добавить машину: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className=" rounded-xl shadow-lg w-full max-w-xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Добавьте свой автомобиль</h2>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Марка"
            value={car.brand}
            onChange={(e) => setCar({ ...car, brand: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="text"
            placeholder="Модель"
            value={car.model}
            onChange={(e) => setCar({ ...car, model: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="number"
            placeholder="Год выпуска"
            value={car.year}
            onChange={(e) => setCar({ ...car, year: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <div className="flex space-x-4">
            {["Автомат", "Механика"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setCar({ ...car, transmission: type })}
                className={`flex-1 py-2 rounded-lg border ${
                  car.transmission === type
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-gray-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex space-x-4">
            {["Седан", "Внедорожник", "Эконом", "Люкс"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCar({ ...car, category: cat })}
                className={`flex-1 py-3 rounded-lg border text-center ${
                  car.category === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="URL фотографии"
            value={car.imageUrl}
            onChange={(e) => setCar({ ...car, imageUrl: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {car.imageUrl && (
            <img
              src={car.imageUrl}
              alt="Превью"
              className="w-full max-h-56 object-contain rounded-lg border border-gray-300"
            />
          )}

          <input
            type="number"
            placeholder="Цена в сутки (TJS)"
            value={car.pricePerDay}
            onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            onClick={addCar}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Добавить автомобиль
          </button>
        </div>
      </div>
    </div>
  );
}
