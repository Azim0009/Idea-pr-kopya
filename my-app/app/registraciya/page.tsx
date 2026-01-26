import React from "react";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80";

export default function Page() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT */}
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-b from-blue-600 to-blue-700 text-white p-12">
        <div>
          <h2 className="text-2xl font-bold">AzDrive</h2>
          <h1 className="text-4xl font-extrabold mt-16 leading-tight">
            Исследуйте <br /> Душанбе на <br /> колесах
          </h1>
          <p className="mt-6 text-blue-100 max-w-md">
            Присоединяйтесь к нашему сообществу путешественников
            в Таджикистане.
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-4">
          <img
            src={IMAGE_URL}
            alt="car"
            className="rounded-lg w-full object-cover"
          />
          <p className="text-sm mt-3 text-blue-100">
            🚗 Комфорт и надежность
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900">
            Начните работу
          </h2>
          <p className="text-gray-500 mt-2">Создайте новый аккаунт</p>

          <div className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Полное имя"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email адрес"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="tel"
              placeholder="+992 00 000 0000"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="password"
              placeholder="Пароль"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Создать аккаунт
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Уже есть аккаунт?{" "}
            <a href="/login" className="text-blue-600 font-medium">
              Войти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
