"use client";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  // Login API call
  async function login() {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password,
        }),
      });

      // Pehle raw response read karo
      const text = await response.text();

      // Check karo ki response empty toh nahi hai
      if (!text) {
        setMessage(`API returned an empty response. Status: ${response.status}`);
        return;
      }

      // Raw text ko JSON mein convert karo
      const data = JSON.parse(text);

      // Login fail hone par
      if (!response.ok) {
        setMessage(data.message || "Login failed");
        setToken("");
        return;
      }

      // Successful login
      setMessage(data.message);
      setToken(data.token);
    } catch (error) {
      console.error("Login error:", error);
      setMessage("API response error. Check terminal and browser console.");
    }
  }

  // Protected profile API call
  async function getProfile() {
    const response = await fetch("/api/profile", {
      method: "GET",
      headers: {
        // Login se mila JWT bhej rahe hain
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    // API ka result screen par dikhao
    setMessage(JSON.stringify(data, null, 2));
  }

  return (
    <main className="space-y-4 p-10">
      <h1 className="text-2xl font-bold">
        JWT Authentication Demo
      </h1>

      <input
        className="block rounded border p-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="block rounded border p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="rounded bg-blue-600 p-2 text-white"
        onClick={login}
      >
        Login
      </button>

      <p className="whitespace-pre-wrap">{message}</p>

      {/* Token milne par hi ye section dikhega */}
      {token && (
        <>
          <h2 className="font-semibold">JWT Token</h2>

          <textarea
            className="w-full rounded border p-2"
            value={token}
            readOnly
            rows={5}
          />

          <button
            className="rounded bg-green-700 p-2 text-white"
            onClick={getProfile}
          >
            Access Protected Profile
          </button>
        </>
      )}
    </main>
  );
}