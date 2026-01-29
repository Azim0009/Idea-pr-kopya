"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch(
      `http://localhost:3001/users?email=${email}&password=${password}`
    );
    const data = await res.json();

    if (!data.length) {
      alert("Неверный email или пароль");
      return;
    }

    const user = data[0];
    localStorage.setItem("currentUser", JSON.stringify(user));

    router.push(user.role === "owner" ? "/" : "/");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex bg-gradient-to-b from-blue-600 to-blue-700 text-white p-12">
        <img src={IMAGE_URL} className="rounded-xl" />
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold">Вход</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <button
            onClick={login}
            className="w-full py-3 bg-blue-600 text-white rounded-lg"
          >
            Войти
          </button>

          <p className="text-center text-gray-500 mt-4 text-sm">
            Нет аккаунта?{" "}
            <Link href="/registraciya" className="text-blue-600 font-medium">
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
