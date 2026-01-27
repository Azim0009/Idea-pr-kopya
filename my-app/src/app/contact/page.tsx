import React from "react";

export default function page() {
  return (
    <div>
      <div className=" bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">
              Связаться с AzDrive Dushanbe
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Есть вопросы по аренде или хотите предложить свой автомобиль? Наша
              команда в Таджикистане поможет вам быстро и безопасно.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Телефон поддержки
                </h3>
                <p className="text-sm text-gray-500 mb-1">Горячая линия</p>
                <a
                  href="tel:100700400"
                  className="text-lg font-bold text-blue-600 hover:underline"
                >
                  1007 00400
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Напишите нам
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Менеджер по работе с клиентами
                </p>
                <p className="font-medium text-gray-800">Азим Сухиев</p>
                <a
                  href="mailto:azim@rentacar.tj"
                  className="text-blue-600 hover:underline text-sm"
                >
                  azim@rentacar.tj
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Рабочее время
                </h3>
                <p className="text-sm text-gray-600">Пн – Вс: 09:00 – 21:00</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Отправьте нам сообщение
                </h2>

                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Полное имя
                    </label>
                    <input
                      type="text"
                      placeholder="Введите ваше имя"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email адрес
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше сообщение
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Чем мы можем вам помочь?"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                      🔒 Безопасное соединение · Ответ в течение 24 часов
                    </p>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Отправить сообщение →
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
