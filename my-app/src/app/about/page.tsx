import Image from "next/image";
import logo from "../assets/XXL_height.jpg";
import logo1 from "../assets/1.jpg";
import {
  PaperAirplaneIcon,
  TruckIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      <div className="relative w-[95%] mx-auto p-20">
        <Image
          src={logo}
          alt="logo"
          className="w-full h-[700px] object-cover rounded-lg"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-7xl text-[blue] font-bold mb-4">
            О компании AzDrive Dushanbe{" "}
          </h1>
          <b className="text-3xl font-bold mb-4">
            Ведуший сервис автомобилей в Душанбе.{" "}
          </b>
          <b className="text-3xl font-bold mb-4">
            Мы соединяем вас с сердцем Таджикиствна, безопасность и местный опыт
            с 2014 года{" "}
          </b>

          <div className="flex gap-4">
            <Link href="/vehicle">
              <button
                className="px-8 py-3 bg-blue-600 rounded-xl font-semibold
                transition-all duration-300
                hover:bg-blue-700 hover:scale-105 hover:shadow-2xl
                active:scale-95"
              >
                Наш автопарк
              </button>
            </Link>
            <Link href="/about">
              <button
                className="px-8 py-3 bg-gray-700 rounded-xl font-semibold
                transition-all duration-300
                hover:bg-gray-800 hover:scale-105 hover:shadow-2xl
                active:scale-95"
              >
                Наш путь
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-around mt-50">
        <div className="w-[230px] h-[150px] shadow-2xl p-10 rouned-[20px]">
          <div className="ml-5">
            <b className="text-[45px] text-[blue]">10+</b>
          </div>
          <div className="">
            <p className="text-[20px] text-[gray]">Лет работы</p>
          </div>
        </div>

        <div className="w-[230px] h-[150px] shadow-2xl p-5 rouned-[20px]">
          <div className="ml-5">
            <b className="text-[45px] text-[blue]">150+</b>
          </div>
          <div className="">
            <p className="text-[20px] text-[gray]">Премиальных авто</p>
          </div>
        </div>

        <div className="w-[230px] h-[150px] shadow-2xl p-2 rouned-[20px]">
          <div className="ml-5">
            <b className="text-[45px] text-[blue]">12k+</b>
          </div>
          <div className="">
            <p className="text-[20px] text-[gray]">Cчастливых клиентов</p>
          </div>
        </div>

        <div className="w-[230px] h-[150px] shadow-2xl p-5 rouned-[20px]">
          <div className="ml-5">
            <b className="text-[45px] text-[blue]">24/7</b>
          </div>
          <div className="">
            <p className="text-[20px] text-[gray]">Местная подержка </p>
          </div>
        </div>
      </div>

      <div className=" py-16 px-4 md:px-8 lg:px-16 mt-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наш путь</h2>
            <p className="text-gray-700 mb-4">
              Основанная в самом сердце столицы Таджикистана, компания AzDrive
              начала свой путь с простой идеи: сделать захватывающие дух пейзажи
              нашей страны доступными для каждого.
            </p>
            <p className="text-gray-700 mb-4">
              Начав с одного автомобиля в 2014 году, мы выросли в лидера
              городского рынка благодаря глубокому знанию местных дорог,
              таджикской культуры и специфических потребностей международных
              путешественников. Мы гордимся тем, что являемся не просто
              агентством по прокату, а вашим надёжным партнёром в пути.
            </p>
            <p className="text-yellow-600 font-semibold italic">
              "Наша цель — сделать так, чтобы каждое путешествие по Душанбе и
              горам Памира было безопасным, комфортным и незабываемым."
            </p>
          </div>

          <div className="">
            <Image
              src={logo1}
              alt="logo"
              className="w-full h-[700px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className=" py-16 px-4 md:px-8 lg:px-16 mt-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-gray-700 mb-12">
            Мы предлагаем полный спектр транспортных решений, адаптированных к
            уникальным условиям ландшафта и деловой среды Душанбе.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <PaperAirplaneIcon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Трансфер из аэропорта
              </h3>
              <p className="text-gray-700 mb-4">
                Безупречный сервис встречи в международном аэропорту Душанбе
                (DYU). Водители отслеживают рейсы для своевременного прибытия.
              </p>
              <a
                href="#"
                className="text-yellow-600 font-medium hover:underline"
              >
                Подробнее
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <TruckIcon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Посуточная аренда
              </h3>
              <p className="text-gray-700 mb-4">
                Гибкие тарифы для экскурсий по городу или деловых поездок. От
                компактных седанов до премиальных внедорожников.
              </p>
              <a
                href="#"
                className="text-yellow-600 font-medium hover:underline"
              >
                Посмотреть автопарк
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <CalendarDaysIcon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Долгосрочная аренда
              </h3>
              <p className="text-gray-700 mb-4">
                Специализированные решения для НПО, дипмиссий и экспатов. Полное
                техобслуживание и страховка включены.
              </p>
              <a
                href="#"
                className="text-yellow-600 font-medium hover:underline"
              >
                Корпоративный запрос
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-16 px-4 md:px-8 lg:px-16 mt-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
          <p className="text-lg mb-10">
            Предоставлять безопасные, доступные и высококачественные
            транспортные решения, которые открывают людям красоту и
            гостеприимство Таджикистана. Мы стремимся развивать туризм и бизнес
            с помощью современного автопарка и исключительного сервиса.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white text-blue-600 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Честность</h3>
              <p className="text-gray-700">
                Прозрачное ценообразование, без скрытых комиссий.
              </p>
            </div>

            <div className="bg-white text-blue-600 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="text-gray-700">
                Строгая проверка каждого авто по 20 пунктам.
              </p>
            </div>

            <div className="bg-white text-blue-600 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Сообщество</h3>
              <p className="text-gray-700">
                Поддержка местных талантов и развития региона.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-50 py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Готовы увидеть Душанбе?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Собираетесь ли вы на деловую встречу в центре города или исследуете
            Варзобское ущелье, у нас есть идеальный автомобиль для вас.
          </p>
          <Link href="/vehicle">
            <span
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl
            transition-all duration-300
            hover:bg-blue-700 hover:scale-105 hover:shadow-2xl
            active:scale-95 cursor-pointer"
            >
              Выбрать автомобиль
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
