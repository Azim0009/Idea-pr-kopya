import {
  FaCarSide,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#050b16] text-gray-400 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div
        className="relative container mx-auto px-6 py-20 grid gap-14
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div>
          <div className="flex items-center gap-3 text-white text-2xl font-semibold tracking-wide">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-600/30">
              <FaCarSide />
            </div>
            AZDRIVE
          </div>

          <p className="mt-6 text-sm leading-relaxed max-w-sm">
            Ведущая платформа по прокату автомобилей в Душанбе. Объединяем
            владельцев авто и путешественников с 2021 года.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#0f172a]
              flex items-center justify-center
              hover:bg-pink-600 hover:scale-110
              transition-all duration-300"
            >
              <FaInstagram className="text-white" />
            </a>

            <a
              href="https://t.me"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#0f172a]
              flex items-center justify-center
              hover:bg-blue-500 hover:scale-110
              transition-all duration-300"
            >
              <FaTelegramPlane className="text-white" />
            </a>

            <a
              href="https://wa.me/992900123456"
              target="_blank"
              className="w-11 h-11 rounded-full bg-[#0f172a]
              flex items-center justify-center
              hover:bg-green-500 hover:scale-110
              transition-all duration-300"
            >
              <FaWhatsapp className="text-white" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-medium mb-6">Ссылки</h3>
          <ul className="space-y-4 text-sm">
            {[
              "Наш автопарк",
              "Тарифы",
              "Как это работает",
              "Добавить авто",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-6">Поддержка</h3>
          <ul className="space-y-4 text-sm">
            {[
              "Центр помощи",
              "Политика конфиденциальности",
              "Условия использования",
              "Страхование",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-6">Контакты</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-blue-500 mt-1 shrink-0" />
              пр. Рудаки 45, Душанбе, Таджикистан, 734000
            </li>

            <li className="flex gap-3 items-center hover:text-white transition">
              <FaPhoneAlt className="text-blue-500" />
              +992 100700400
            </li>

            <li className="flex gap-3 items-center hover:text-white transition">
              <FaEnvelope className="text-blue-500" />
              contact@azdrive.tj
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© 2023 AzDrive Душанбе. Все права защищены.</span>
          <span>Язык: Русский • Валюта: USD ($)</span>
        </div>
      </div>
    </footer>
  );
}
