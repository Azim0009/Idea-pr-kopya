import { ModeToggle } from "@/src/component/mode-toggle";
import Link from "next/link";
import { FaCarSide } from "react-icons/fa";

export default function Header() {
  return (
    <header className="shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 dark:text-[white]">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-700"
        >
          <FaCarSide className="text-3xl" />
          Az-Drive
        </Link>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-700 transition">
            Главная
          </Link>
          <Link href="/vehicle" className="hover:text-blue-700 transition">
            Автомобили
          </Link>
          <Link href="/addcar" className="hover:text-blue-700 transition">
            Добавить авто
          </Link>
          <Link href="/about" className="hover:text-blue-700 transition">
            О нас
          </Link>
          <Link href="/contact" className="hover:text-blue-700 transition">
            Контакты
          </Link>
        </div>

        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 border border-blue-700 text-blue-700 rounded hover:bg-blue-700 hover:text-white transition"
          >
            Вход
          </Link>
          <Link
            href="/registraciya"
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
          >
            Регистрация
          </Link>

          <ModeToggle/>
        </div>
      </nav>
    </header>
  );
}
