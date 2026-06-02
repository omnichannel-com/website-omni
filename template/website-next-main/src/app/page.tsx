"use client"

import LandingPage from "./landing-page/page";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link
        rel="stylesheet"
        href="https://www.w3schools.com/w3css/4/w3.css"
      />
      
      <LandingPage />
    </main>
  );
}
