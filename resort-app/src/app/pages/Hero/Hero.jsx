"use client";

import Header from "../Header/Header";
import "./Hero.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  // Show "BOOK NOW" ONLY on home page "/"
  const showBookNow = pathname === "/";

  return (
    <div className="hero-section">
      <Header />
      <h1 className="head">SERENITY HEAVEN RESORT</h1>
      <p className="para">Experience Nature At Its Finest</p>

      {showBookNow && (
        <Link href="/booking">
          <button className="button">
            <b>BOOK NOW</b>
          </button>
        </Link>
      )}
    </div>
  );
}
