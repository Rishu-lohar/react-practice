// app/AddNumbers.tsx
"use client";

import { useActionState } from "react";
import { addNumbers } from "./action";

export default function AddNumbers() {
  const [result, formAction, isPending] = useActionState(addNumbers, null);

  return (
    <main>
      <h1>Add Two Numbers</h1>

      <form action={formAction}>
        <input
          type="number"
          name="num1"
          placeholder="Enter first number"
          required
        />

        <input
          type="number"
          name="num2"
          placeholder="Enter second number"
          required
        />

        <button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add"}
        </button>
      </form>

      {result !== null && <p>Result: {result}</p>}
    </main>
  );
}