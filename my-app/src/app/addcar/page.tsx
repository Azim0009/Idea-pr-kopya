import React from "react";

export default function page() {
  return (
    <div>
      <div className="min-h-screen bg-[#f6f8fb] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Добавьте свой автомобиль
          </h1>
          <p className="text-gray-500 mb-6">
            Выполните указанные ниже шаги, чтобы разместить свой автомобиль на
            нашей платформе в Душанбе.
          </p>

          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Шаг 1 из 4: Данные автомобиля</span>
              <span className="text-blue-600 font-medium">Заполнено 25%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-blue-600 rounded-full" />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Текущий раздел: Общая информация
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="font-semibold text-lg mb-4">Общая информация</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <select className="border rounded-lg px-4 py-3 text-sm">
                <option>Выберите марку</option>
              </select>

              <select className="border rounded-lg px-4 py-3 text-sm">
                <option>Выберите модель</option>
              </select>

              <select className="border rounded-lg px-4 py-3 text-sm">
                <option>Выберите год</option>
              </select>

              <div className="flex gap-2">
                <button className="flex-1 border rounded-lg py-3 text-sm bg-blue-50 border-blue-600 text-blue-600 font-medium">
                  Автомат
                </button>
                <button className="flex-1 border rounded-lg py-3 text-sm">
                  Механика
                </button>
              </div>
            </div>

            <h2 className="font-semibold text-lg mb-2">Категория автомобиля</h2>
            <p className="text-sm text-gray-400 mb-4">
              Выберите категорию, которая лучше всего описывает ваш автомобиль.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["Седан", "Внедорожник", "Эконом", "Люкс"].map((item, i) => (
                <button
                  key={item}
                  className={`border rounded-xl py-6 text-sm font-medium ${
                    i === 0 ? "border-blue-600 bg-blue-50 text-blue-600" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <h2 className="font-semibold text-lg mb-2">Фотографии</h2>
            <p className="text-sm text-gray-400 mb-4">
              Загрузите качественные фото экстерьера и интерьера (минимум 3).
            </p>

            <div className="border-2 border-dashed rounded-xl p-10 text-center mb-8">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                ⬆
              </div>
              <p className="text-sm font-medium">
                Нажмите для загрузки или перетащите фото
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PNG, JPG или JPEG (макс. 5MB на файл)
              </p>
            </div>

            <h2 className="font-semibold text-lg mb-4">Стоимость</h2>

            <div className="border rounded-lg px-4 py-3 flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">TJS</span>
              <span className="text-sm text-gray-400">0.00</span>
              <span className="text-sm text-gray-400">/ день</span>
            </div>

            <p className="text-xs text-gray-400 mb-8">
              Средняя цена для похожих авто в Душанбе: 350 TJS/день
            </p>

            <div className="flex justify-between">
              <button className="border px-6 py-3 rounded-lg text-sm">
                Сохранить черновик
              </button>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm flex items-center gap-2">
                Следующий шаг →
              </button>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
            <strong>Нужна помощь в регистрации авто?</strong>
            <br />
            Наша служба поддержки работает 24/7. Позвоните нам:
            <span className="font-medium"> +992 100 700 400</span>
          </div>
        </div>
      </div>
    </div>
  );
}
