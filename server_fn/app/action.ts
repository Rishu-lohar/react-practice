// app/action.ts
"use server";

export async function addNumbers(
  _previousState: number | null,
  formData: FormData
): Promise<number> {
  const num1 = Number(formData.get("num1"));
  const num2 = Number(formData.get("num2"));

  return num1 + num2;
}