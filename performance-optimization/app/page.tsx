import {Inter} from "next/font/google";
import Student from "./student/page";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home(){

  return (
    <main className={inter.className}>

      <h1> Font Optimization in next.js</h1>
      <p> This page uses the optimized Inter font.</p>

      <Student/>
      


    </main>
  );
}