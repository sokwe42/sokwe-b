"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="logo-wrap">
          <Image src="/Sokwe-b-Logo.png" alt="Sokwe-b logo" width={44} height={34} />
          <div className="logo-text">
            <h2>Sokwe-b</h2>
            <p>Learning Platform</p>
          </div>
        </Link>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          <Link href="/explore-courses">Explore Courses</Link>
          <Link href="/career-guidance">Career Guidance</Link>
          <Link href="/ai-coaching">AI Coaching</Link>
          <Link href="/for-businesses">For Businesses</Link>
          <Link href="/careers">Careers</Link>
        </nav>

        <div className="nav-actions">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Search courses..." />
          </div>

          <Link href="/cart" className="icon-btn">
            <ShoppingCart size={20} />
          </Link>

          <Link href="/account" className="icon-btn">
            <User size={20} />
          </Link>

          <button className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}