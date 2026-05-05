"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    router.push(`/explore-courses?search=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* LEFT SIDE */}
        <div className="nav-left">
          <Link href="/" className="logo-wrap">
            <Image
              src="/Sokwe-b-Logo.png"
              alt="Sokwe-b logo"
              width={38}
              height={28}
              priority
            />

            <div className="logo-text">
              <h2>Sokwe-b</h2>
              <p>Learning Platform</p>
            </div>
          </Link>

          <Link href="/explore-courses" className="explore-link">
            Explore Courses
          </Link>

          <form className="search-box" onSubmit={handleSearch}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <nav className={`nav-links ${open ? "active" : ""}`}>
            <Link href="/career-guidance" onClick={() => setOpen(false)}>
              Career Guidance
            </Link>

            <Link href="/ai-coaching" onClick={() => setOpen(false)}>
              AI Coaching
            </Link>

            <Link href="/for-businesses" onClick={() => setOpen(false)}>
              For Businesses
            </Link>

            <Link href="/careers" onClick={() => setOpen(false)}>
              Careers
            </Link>
          </nav>

          <div className="nav-actions">
            <Link href="/cart" className="icon-btn" aria-label="Cart">
              <ShoppingCart size={20} />
            </Link>

            <Link href="/account" className="icon-btn" aria-label="Account">
              <User size={20} />
            </Link>

            <button
              className="menu-btn"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              type="button"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}