"use client";

import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
  const router = useRouter();

  const [cars, setCars] = useState([]);
  const [bookedDates, setBookedDates] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [currentCarId, setCurrentCarId] = useState(null);
  const [selectedRange, setSelectedRange] = useState([null, null]);

  useEffect(() => {
    fetchCars();
    fetchBookedDates();
  }, []);

  const fetchCars = async () => {
    const res = await fetch("http://localhost:3001/myCars?ownerId=2");
    const data = await res.json();
    setCars(data);
  };

  const fetchBookedDates = async () => {
    const res = await fetch("http://localhost:3001/bookings");
    const data = await res.json();
    const booked = {};
    data.forEach((b) => {
      if (!booked[b.carId]) booked[b.carId] = [];
      booked[b.carId].push(new Date(b.date));
    });
    setBookedDates(booked);
  };

  const handleDeleteCar = async (id) => {
    try {
      const resBookings = await fetch(`http://localhost:3001/bookings`);
      const allBookings = await resBookings.json();
      const carBookings = allBookings.filter((b) => b.carId === id);

      for (const b of carBookings) {
        await fetch(`http://localhost:3001/bookings/${b.id}`, {
          method: "DELETE",
        });
      }

      await fetch(`http://localhost:3001/myCars/${id}`, { method: "DELETE" });

      setCars(cars.filter((c) => c.id !== id));
      const updatedBookedDates = { ...bookedDates };
      delete updatedBookedDates[id];
      setBookedDates(updatedBookedDates);
    } catch (error) {
      console.error("Ошибка при удалении авто и бронирований:", error);
    }
  };

  const isDateBooked = (carId, date) => {
    const carBooked = bookedDates[carId] || [];
    return carBooked.some((d) => d.toDateString() === date.toDateString());
  };

  const handleSave = async () => {
    if (!currentCarId || !selectedRange[0]) return;

    const carBooked = bookedDates[currentCarId] || [];
    const start = selectedRange[0];
    const end = selectedRange[1] || selectedRange[0];
    const newDates = [];
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

  return (
    <div className="min-h-screen  px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Мои Автомобили
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={800}
        className="w-full max-w-5xl h-[500px] mx-auto rounded-2xl overflow-hidden shadow-2xl"
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={car.images?.[0]}
                alt={car.brand}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end items-start h-full p-6">
                <p className="inline mb-2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                  {car.class.toUpperCase()}
                </p>
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                  {car.brand} {car.model}
                </h2>
                <p className="mt-1 text-gray-200 text-sm">
                  Премиальный автомобиль для города и гор.
                </p>
                <div className="mt-4 flex gap-4 items-center">
                  <p className="text-yellow-400 text-2xl font-bold">
                    ${car.pricePerDay}/день
                  </p>
                  <button
                    onClick={() => {
                      setCurrentCarId(car.id);
                      setSelectedRange([null, null]);
                      setOpenModal(true);
                    }}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
                  >
                    Забронировать
                  </button>
                  <button
                    onClick={() => router.push(`/bookinginfo?carId=${car.id}`)}
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteCar(car.id)}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
                      onChange={(dates) => setSelectedRange(dates)}
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
