'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSearch, FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    {
      name: 'Pages',
      href: '#',
      dropdown: [
        { name: 'Pricing', href: '/pricing' },
        { name: 'Team', href: '/team' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Career', href: '/career' },
        { name: 'Membership', href: '/membership' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Coming Soon', href: '/coming-soon' },
        { name: 'Error 404', href: '/404' },
      ]
    },
    {
      name: 'Auth',
      href: '#',
      dropdown: [
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
        { name: 'Profile', href: '/profile' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isDropdownActive = (dropdown: { href: string }[]) => {
    return dropdown.some(item => isActive(item.href));
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0c14]/80 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <Image
                src="/logo/logo.png"
                alt="deltaFox Logo"
                width={140}
                height={40}
                className="h-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => {
              const active = link.dropdown ? isDropdownActive(link.dropdown) : isActive(link.href);

              return (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button
                        className={`hover:text-primary transition-all duration-300 font-medium px-5 py-2 relative group flex items-center ${active ? 'text-primary' : 'text-white'}`}
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      >
                        {link.name}
                        <FiChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:text-primary" />
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${active ? 'w-full' : 'w-0'}`}></span>
                      </button>

                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-2 w-64 bg-[#13042a]/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 transition-all duration-300 ${activeDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}>
                        <div className="py-2">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className={`block px-4 py-2 hover:bg-white/5 hover:text-primary transition-colors duration-300 ${isActive(item.href) ? 'text-primary bg-white/5' : 'text-white'}`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`hover:text-primary transition-all duration-300 font-medium px-5 py-2 relative group ${active ? 'text-primary' : 'text-white'}`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${active ? 'w-full' : 'w-0'}`}></span>
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center">
              <button className="text-white hover:text-primary transition-all duration-300 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30">
                <FiSearch className="h-5 w-5" />
              </button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center"
              >
                {isOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden bg-[#13042a]/95 backdrop-blur-md transition-all duration-300 ${isOpen ? 'max-h-screen py-5' : 'max-h-0 py-0'
          }`}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => {
            const active = link.dropdown ? isDropdownActive(link.dropdown) : isActive(link.href);

            return (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      className={`flex items-center justify-between w-full hover:text-primary transition-colors duration-300 py-2 border-b border-white/10 ${active ? 'text-primary' : 'text-white'}`}
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    >
                      <span>{link.name}</span>
                      <FiChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${activeDropdown === link.name ? 'max-h-96 py-2' : 'max-h-0 py-0'
                      }`}>
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className={`block hover:text-primary transition-colors duration-300 py-1 ${isActive(item.href) ? 'text-primary' : 'text-gray-300'}`}
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block hover:text-primary transition-colors duration-300 py-2 border-b border-white/10 ${active ? 'text-primary' : 'text-white'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}
          <div className="pt-2">
            <button className="w-full text-white hover:text-primary transition-colors duration-300 py-2 flex items-center justify-center space-x-2">
              <FiSearch className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
