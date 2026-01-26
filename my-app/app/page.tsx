import React from "react";
import { Headset, Map, BadgeCheck } from "lucide-react";

export default function Page() {
  return (
    <div className="">
      <section
        className="relative min-h-screen flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 text-xs font-semibold rounded-full bg-yellow-400/20 text-yellow-300">
              ⭐ ПРОКАТ №1 В ТАДЖИКИСТАНЕ
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Исследуйте <br />
              Душанбе с{" "}
              <span className="text-blue-500 italic">премиальным</span>{" "}
              комфортом
            </h1>

            <p className="mt-6 text-gray-200 max-w-xl text-sm md:text-base">
              Самая надежная платформа по аренде авто в Таджикистане. Широкий
              выбор внедорожников и комфортных авто для вашего путешествия.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="px-7 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium">
                Арендовать авто →
              </button>
              <button className="px-7 py-3 bg-white/10 hover:bg-white/20 transition rounded-lg font-medium">
                Наш автопарк
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-900 w-full max-w-md">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              📅 Забронировать поездку
            </h3>

            <div className="space-y-5 text-sm">
              <div>
                <label className="block mb-1 text-gray-500">МЕСТО ПОДАЧИ</label>
                <select className="w-full bg-gray-100 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Международный аэропорт Душанбе (DYU)</option>
                  <option>Центр города Душанбе</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-500">
                    ДАТА НАЧАЛА
                  </label>
                  <input
                    type="date"
                    className="w-full bg-gray-100 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-gray-500">
                    ДАТА ОКОНЧАНИЯ
                  </label>
                  <input
                    type="date"
                    className="w-full bg-gray-100 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button className="w-full mt-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition">
                Найти доступные авто
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-50 text-gray-900 px-6 py-10 max-w-5xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="flex justify-center">
            <h1 className="text-[30px] font-bold text-yellow-500">
              ПРОФЕССИОНАЛЬНЫЙ СЕРВИС
            </h1>
          </div>
          <div className="flex justify-center mt-5">
            <b className="text-[50px] font-semibold">
              Почему выбирают AzDrive Dushanbe?
            </b>
          </div>
          <p className="text-center text-[gray] mt-4 text-[16px]">
            Мы предоставляем больше, чем просто автомобиль. Мы дарим свободу
            исследовать Таджикистан с уверенностью и местной поддержкой.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 ">
          <div className="space-y-2">
            <Headset className="w-13 h-13 text-[blue]" />
            <b className="text-[20px]">Круглосуточная поддержка</b>
            <div className="mt-3">
              <p className="text-[16px]">
                Наша команда доступна 24/7, чтобы помочь вам во всем: от встречи
                в аэропорту до помощи на Памирском тракте.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Map className="w-13 h-13 text-[blue]" />
            <b className="text-[20px]">Местная экспертиза</b>
            <div className="mt-3">
              <p className="text-[16px]">
                Глубокое знание дорог и горного ландшафта Таджикистана.
                Предоставляем авто, специально подготовленные для бездорожья.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <BadgeCheck className="w-13 h-13 text-[#3030cd]" />
            <b className="text-[20px]">Прозрачные цены</b>
            <div className="mt-3">
              <p className="text-[16px]">
                Никаких скрытых платежей или неожиданных страховых взносов.
                Цена, которую вы видите, — это цена, которую вы платите.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1400px] mx-auto px-6 py-16">
        <div className="flex items-center justify-between mt-30">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Наш избранный автопарк
            </h2>
            <p className="text-gray-500 mt-2">
              Популярные премиальные внедорожники для поездок по Душанбе и
              регионам.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
              ‹
            </button>
            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
              ›
            </button>
          </div>
        </div>

        <div className="mt-20 Cars grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-56">
              <span className="absolute top-4 left-4 z-10 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                ⭐ ПРЕМИУМ
              </span>
              <img src="" alt="" />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">Toyota Land Cruiser 300</h3>
                  <p className="text-sm text-gray-500">
                    Внедорожник • 7 мест • АКПП
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">$120</p>
                  <span className="text-xs text-gray-400">/ день</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600 my-6">
                <div>V8 Turbo</div>
                <div>Дизель</div>
                <div>Климат</div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                Арендовать
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-56">
              <span className="absolute top-4 left-4 z-10 bg-black text-white text-xs px-3 py-1 rounded-full">
                ПОПУЛЯРНОЕ
              </span>
              <img src="" alt="" />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">Lexus LX 570</h3>
                  <p className="text-sm text-gray-500">
                    Внедорожник • 8 мест • AWD
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">$150</p>
                  <span className="text-xs text-gray-400">/ день</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600 my-6">
                <div>Полный</div>
                <div>Безопасность</div>
                <div>Багаж</div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                Арендовать
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-56">
              <span className="absolute top-4 left-4 z-10 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                ДЛЯ БЕЗДОРОЖЬЯ
              </span>
              <img src="" alt="" />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">Toyota Hilux 2023</h3>
                  <p className="text-sm text-gray-500">Пикап • 5 мест • 4x4</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">$85</p>
                  <span className="text-xs text-gray-400">/ день</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600 my-6">
                <div>4x4</div>
                <div>Шины</div>
                <div>Кузов</div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                Арендовать
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 py-20">
      <div className="w-full rounded-[32px] bg-gradient-to-r from-[#0b1118] via-[#0d1622] to-[#0b1118] px-6 py-20 text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Готовы отправиться в путь?
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg mb-10">
          Независимо от того, являетесь ли вы гостем столицы или местным
          жителем, которому нужен автомобиль для особого случая, у нас
          есть идеальное решение.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Арендовать авто
          </button>

          <button className="px-8 py-4 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-100 transition">
            Сдать авто
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
