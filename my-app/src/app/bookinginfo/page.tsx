"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const rates: any = {
  USD: 1,
  EUR: 0.92,
};

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const carId = searchParams.get("carId");

  const [car, setCar] = useState<any>(null);
  const [draft, setDraft] = useState<any>(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("USD");
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const ownerId = 2; 


  useEffect(() => {
    if (!carId) return;

    Promise.all([
      fetch(`http://localhost:3001/myCars/${carId}`).then(r => r.json()),
      fetch(`http://localhost:3001/bookings?carId=${carId}`).then(r => r.json()),
    ]).then(([carData, bookings]) => {
      if (carData.ownerId !== ownerId) {
        router.push("/mycars");
        return;
      }

      setCar(carData);
      setDraft(carData);
      setBookedDates(bookings.map((b: any) => new Date(b.date)));
      setLoading(false);
    });
  }, [carId]);


  const handleChange = (e: any) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  const saveCar = async () => {
    await fetch(`http://localhost:3001/myCars/${carId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });

    setCar(draft);
    setEditMode(false);
  };

  const addImage = () => {
    setDraft({ ...draft, images: [...draft.images, ""] });
  };

  const updateImage = (i: number, value: string) => {
    const imgs = [...draft.images];
    imgs[i] = value;
    setDraft({ ...draft, images: imgs });
  };

  const removeImage = (i: number) => {
    setDraft({
      ...draft,
      images: draft.images.filter((_: any, idx: number) => idx !== i),
    });
  };

  const blockDate = async (date: Date) => {
    await fetch("http://localhost:3001/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        carId,
        date: date.toISOString().split("T")[0],
        ownerBlock: true,
      }),
    });

    setBookedDates([...bookedDates, date]);
  };


  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-16 animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-1/3 mb-6" />
        <div className="h-80 bg-gray-200 rounded mb-6" />
        <div className="h-6 bg-gray-200 rounded w-1/2" />
      </div>
    );
  }


  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Owner dashboard</h1>

        <div className="flex gap-3">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option>USD</option>
            <option>EUR</option>
          </select>

          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="bg-green-600 text-white px-6 py-2 rounded"
            >
              Edit
            </button>
          ) : (
            <button
              onClick={saveCar}
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              Save
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-bold mb-4">Gallery</h2>

        <div className="grid grid-cols-3 gap-4">
          {draft.images.map((img: string, i: number) => (
            <div key={i} className="relative">
              <img src={img} className="h-40 w-full object-cover rounded" />
              {editMode && (
                <>
                  <input
                    value={img}
                    onChange={(e) => updateImage(i, e.target.value)}
                    className="w-full mt-2 border p-1 rounded"
                  />
                  <button
                    onClick={() => removeImage(i)}
                    className="absolute top-2 right-2 bg-red-600 text-white px-2 rounded"
                  >
                    ×
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {editMode && (
          <button onClick={addImage} className="mt-4 text-blue-600">
            + Add image
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6 bg-white rounded-2xl shadow p-6">
        <div>
          <label>Brand</label>
          <input
            name="brand"
            value={draft.brand}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Model</label>
          <input
            name="model"
            value={draft.model}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label>Price / day</label>
          <p className="text-2xl font-bold text-green-600">
            {(draft.pricePerDay * rates[currency]).toFixed(0)} {currency}
          </p>
        </div>

        <div>
          <label>Total earnings</label>
          <p className="text-xl font-bold">
            {(bookedDates.length * draft.pricePerDay * rates[currency]).toFixed(0)} {currency}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-bold mb-4">Owner calendar</h2>

        <ReactDatePicker
          inline
          minDate={new Date()}
          onChange={(date: Date) => blockDate(date)}
          dayClassName={(date) =>
            bookedDates.some(d => d.toDateString() === date.toDateString())
              ? "bg-red-500 text-white rounded-full"
              : ""
          }
        />
      </div>

    </div>
  );
}
