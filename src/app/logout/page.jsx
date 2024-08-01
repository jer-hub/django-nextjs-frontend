"use client";

import { useAuth } from "@/components/authProvider";

const url = "/api/logout/";

export default function Page() {
  const auth = useAuth();

  async function handleClick(event) {
    event.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: "",
    });
    const rData = await response.json();
    if (response.ok) {
      auth.logout();
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div>
        <h1>Are you sure you want to logout?</h1>
        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-400 text-white px-2 py-1"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
