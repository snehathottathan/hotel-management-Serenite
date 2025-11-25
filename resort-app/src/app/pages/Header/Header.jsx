// components/Header/Header.js
"use client"; // <--- Add this directive

import './Header.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import { useEffect } from 'react'; // We'll need useEffect in our Home component, but not directly here

export default function Header() {
  const router = useRouter(); // Initialize router

  const handleGalleryClick = (e) => {
    e.preventDefault(); // Prevent default Link behavior

    // If currently on the home page, just scroll to the anchor
    if (router.pathname === '/') {
      document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on another page, navigate to home and append the hash
      router.push('/#gallery-section');
    }
  };

  return (
    <div className="header">
      <ul className="header-ul">
        <li><Link href="/">Home</Link></li>
        <li>
          <a href="/#gallery-section" onClick={handleGalleryClick}>
            Gallery
          </a>
        </li>
        <li><Link href="/admin/login-page">Admin Login</Link></li>
      </ul>
    </div>
  );
}