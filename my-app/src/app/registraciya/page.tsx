"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80";

export default function Page() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "client",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    const res = await fetch(
      `http://localhost:3001/users?email=${form.email}`
    );
    const exists = await res.json();

    if (exists.length) {
      alert("Пользователь уже существует");
      return;
    }

    const newUser = {
      ...form,
      id: Date.now().toString(),
    };

    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    localStorage.setItem("currentUser", JSON.stringify(newUser));
    router.push("/");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT */}
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-b from-blue-600 to-blue-700 text-white p-12">
        <div>
          <h2 className="text-2xl font-bold">AzDrive</h2>
          <h1 className="text-4xl font-extrabold mt-16 leading-tight">
            Исследуйте <br /> Душанбе на <br /> колесах
          </h1>
        </div>
        <img src={IMAGE_URL} className="rounded-xl" />
      </div>

      {/* FORM */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold">Создать аккаунт</h2>

          <input
            name="name"
            placeholder="Полное имя"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            name="password"
            type="password"
            placeholder="Пароль"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          >
            <option value="client">Я клиент</option>
            <option value="owner">Я владелец авто</option>
          </select>

          <button
            onClick={register}
            className="w-full py-3 bg-blue-600 text-white rounded-lg"
          >
            Создать аккаунт
          </button>
        </div>
      </div>
    </div>
  );
}
