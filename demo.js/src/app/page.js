import User from "./components/User";

export default function Home() {
  return (
    <main>
      <h1>Next.js Props Example</h1>

      <User name="Alice" />
      <User name="Bob" />
      <User name="Charlie" />
    </main>
  );
}