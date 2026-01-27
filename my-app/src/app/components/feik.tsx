"use client";

import { useEffect, useState, Fragment } from "react";
import { AppDispatch, RootState } from "@/utils/store";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile } from "../../api/api";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Feik() {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, loading } = useSelector((state: RootState) => state.cars);

  const [bookedDates, setBookedDates] = useState<{ [key: number]: Date[] }>({});
  const [openModal, setOpenModal] = useState(false);
  const [currentCarId, setCurrentCarId] = useState<number | null>(null);
  const [selectedRange, setSelectedRange] = useState<[Date | null, Date | null]>([null, null]);

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
            1
        )
      )
    : 0;

  const currentCarPrice =
    currentCarId && cars.find((c) => c.id === currentCarId)?.pricePerDay;
  const totalPrice = currentCarPrice ? currentCarPrice * selectedDaysCount : 0;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-16">
   <div className="mt-20">
 <div className="mt-24">
  <Swiper
    modules={[Navigation, Pagination]}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    speed={800}
    className="w-[90%] h-[620px] mx-auto rounded-[28px] overflow-hidden shadow-2xl"
  >
    {cars?.slice(0, 8).map((car: any) => (
      <SwiperSlide key={car.id}>
        <div className="relative w-full h-full">
          
          {/* IMAGE — БЕЗ УБИЙСТВА */}
          <img
            src={car.images?.[0]}
            alt={car.brand}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* лёгкий градиент ТОЛЬКО снизу */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-end">
            <div className="m-10 w-full max-w-xl">
              
              <span className="inline-block mb-3 bg-yellow-400 text-black text-xs font-extrabold px-4 py-1 rounded-full shadow">
                {car.class.toUpperCase()}
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                {car.brand} {car.model}
              </h2>

              <p className="mt-3 text-gray-200 text-sm max-w-md">
                Премиальный автомобиль для города и гор. Максимальный комфорт и
                уверенность в любой поездке.
              </p>

              <div className="mt-6 flex items-center gap-8">
                <div>
                  <p className="text-xs text-gray-300">Цена за день</p>
                  <p className="text-3xl font-bold text-yellow-400 drop-shadow">
                    ${car.pricePerDay}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setCurrentCarId(car.id);
                    setSelectedRange([null, null]);
                    setOpenModal(true);
                  }}
                  className="px-9 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl hover:scale-105 transition"
                >
                  Забронировать
                </button>
              </div>

            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

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
