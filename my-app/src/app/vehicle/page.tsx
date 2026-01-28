"use client";

import { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/utils/store";
import { GetProfile } from "@/src/api/api";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog, Transition } from "@headlessui/react";

const categories = ["all", "economy", "comfort", "luxury", "supercar"];

export default function AutomobilesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, loading } = useSelector((state: RootState) => state.cars);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [price, setPrice] = useState(1000);

  const [bookedDates, setBookedDates] = useState<{ [key: number]: Date[] }>({});
  const [openModal, setOpenModal] = useState(false);
  const [currentCarId, setCurrentCarId] = useState<number | null>(null);
  const [selectedRange, setSelectedRange] = useState<
    [Date | null, Date | null]
  >([null, null]);

  useEffect(() => {
    dispatch(GetProfile());
    fetchBookedDates();
  }, [dispatch]);

  const fetchBookedDates = async () => {
    try {
      const res = await fetch("http://localhost:3001/bookings");
      const data = await res.json();
      const booked: { [key: number]: Date[] } = {};
      data.forEach((b: any) => {
        if (!booked[b.carId]) booked[b.carId] = [];
        booked[b.carId].push(new Date(b.date));
      });
      setBookedDates(booked);
    } catch (error) {
      console.error("Ошибка при загрузке бронирований:", error);
    }
  };

  const handleSave = async () => {
    if (currentCarId === null || !selectedRange[0]) return;

    const carBooked = bookedDates[currentCarId] || [];
    const start = selectedRange[0];
    const end = selectedRange[1] || selectedRange[0];

    const newDates: Date[] = [];
    let current = new Date(start);
    while (current <= end) {
      if (!carBooked.some((d) => d.toDateString() === current.toDateString())) {
        newDates.push(new Date(current));
      }
      current.setDate(current.getDate() + 1);
    }

    for (const date of newDates) {
      await fetch("http://localhost:3001/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          carId: currentCarId,
          date: date.toISOString().split("T")[0],
        }),
      });
    }

    setBookedDates({
      ...bookedDates,
      [currentCarId]: [...carBooked, ...newDates],
    });

    setSelectedRange([null, null]);
    setOpenModal(false);
  };

  const isDateBooked = (carId: number, date: Date) => {
    const carBooked = bookedDates[carId] || [];
    return carBooked.some((d) => d.toDateString() === date.toDateString());
  };

  const selectedDaysCount = selectedRange[0]
    ? Math.max(
        1,
        Math.ceil(
          ((selectedRange[1] || selectedRange[0]).getTime() -
            selectedRange[0].getTime()) /
            (1000 * 60 * 60 * 24) +
            1,
        ),
      )
    : 0;

  const currentCarPrice =
    currentCarId && cars.find((c) => c.id === currentCarId)?.pricePerDay;
  const totalPrice = currentCarPrice ? currentCarPrice * selectedDaysCount : 0;

  const filteredCars = cars.filter((car: any) => {
    const byCategory =
      selectedCategory === "all" || car.class === selectedCategory;
    const byPrice = car.pricePerDay <= price;
    return byCategory && byPrice;
  });

  return (
    <div className=" min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <aside className=" rounded-2xl shadow-lg p-6 h-fit">
          <h3 className="text-lg font-semibold mb-6">Фильтры</h3>

          <div className="mb-10">
            <p className="text-sm font-medium mb-4 text-gray-500">
              Класс автомобиля
            </p>
            <div className="space-y-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {cat === "all" ? "Все" : cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-4 text-gray-500">
              Цена до:
              <span className="ml-2 font-bold text-blue-600">${price}</span>
            </p>

            <input
              type="range"
              min={50}
              max={1200}
              step={10}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>
        </aside>

        <section className="lg:col-span-3">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold">Каталог автомобилей</h1>
              <p className="text-gray-500 mt-1">
                Выберите идеальный автомобиль для поездки
              </p>
            </div>
          </div>

          {loading && <p>Загрузка...</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car: any) => (
              <div
                key={car.id}
                className=" rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="relative h-56">
                  <span className="absolute top-4 left-4 z-10 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {car.class.toUpperCase()}
                  </span>
                  <img
                    src={car.images?.[0]}
                    alt={car.brand}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">
                        {car.brand} {car.model}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Класс: {car.class}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">
                        ${car.pricePerDay}
                      </p>
                      <span className="text-xs text-gray-400">/ день</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentCarId(car.id);
                      setSelectedRange([null, null]);
                      setOpenModal(true);
                    }}
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-800 transition"
                  >
                    Арендовать
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <p className="text-gray-500 mt-10">
              Нет автомобилей по выбранным параметрам
            </p>
          )}
        </section>
      </div>

      <Transition appear show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setOpenModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md bg-white rounded-3xl p-6 shadow-xl">
                <Dialog.Title className="text-2xl font-bold mb-4 text-center">
                  Выберите даты бронирования
                </Dialog.Title>

                {currentCarId && (
                  <>
                    <ReactDatePicker
                      selected={selectedRange[0]}
                      onChange={(dates: any) => setSelectedRange(dates)}
                      startDate={selectedRange[0]}
                      endDate={selectedRange[1]}
                      selectsRange
                      inline
                      minDate={new Date()}
                      dayClassName={(date) =>
                        isDateBooked(currentCarId, date)
                          ? "bg-red-500 text-white rounded-full"
                          : "hover:bg-blue-100 transition-colors rounded-full"
                      }
                    />

                    <div className="mt-4 text-center">
                      <p className="text-gray-700">
                        Вы выбрали: <b>{selectedDaysCount}</b>{" "}
                        {selectedDaysCount === 1 ? "день" : "дня"}
                      </p>
                      <p className="text-gray-900 font-bold text-lg mt-1">
                        Итоговая сумма: ${totalPrice}
                      </p>
                    </div>
                  </>
                )}

                <div className="mt-6 flex justify-between gap-3">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="w-1/2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  >
                    Отмена
                  </button>
                  <button
                    onClick={handleSave}
                    className="w-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    disabled={!selectedRange[0]}
                  >
                    Забронировать
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
