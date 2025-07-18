"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Menu } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const getHeaderBackground = () => {
    switch(activeSection) {
      case 'home':
        return 'bg-black';
      default:
        return 'bg-black';
    }
  };


  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (value: string) => {
    console.log('Search value:', value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      handleSearch(searchValue.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleSearchToggle = () => {
    if (isSearchOpen && searchValue.trim()) {
      handleSearch(searchValue.trim());
    }
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchValue('');
    }
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchValue('');
  };

  return (
    <>
      <header className={`${getHeaderBackground()} fixed z-50 w-full font-[family-name:var(--font-poppins)] transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center">
              <div className="w-28 flex h-full items-center justify-center cursor-pointer" onClick={() => router.push('/')}>
                <Image
                  src={'/gkt_light.png'}
                  alt="My Logo"
                  width={500}
                  height={70}
                />
              </div>
            </div>

            <nav className={`hidden md:flex w-full justify-end space-x-8 ${isSearchOpen ? 'md:hidden lg:flex' : ''}`}>
              {['Our story', 'Our presence', 'Career'].map((text) => (
                <a key={text} href="#" className="text-white px-3 py-2 text-sm font-medium hover:text-gray-300">
                  {text}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="hidden md:flex items-center space-x-4 ml-5">
              <div className="flex items-center">
                {isSearchOpen ? (
                  <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <div className="relative">
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchValue}
                        onChange={handleInputChange}
                        placeholder="Search..."
                        className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleCloseSearch}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <button type="submit" className="ml-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                      <Search className="h-5 w-5" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={handleSearchToggle}
                    className="text-gray-900 bg-[#E5E5E5] hover:text-gray-900 transition-colors duration-200 rounded-3xl px-2 py-1"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                )}
              </div>

              <button className="bg-white text-black px-4 py-1 rounded-lg text-sm font-medium hover:scale-105 cursor-pointer transition-colors duration-200">
                Login
              </button>

              <div className="bg-black cursor-pointer">
                <select defaultValue={'IND'} className="bg-black text-white cursor-pointer">
                  <option value="IND" className='cursor-pointer'>IND</option>
                  <option value="SGP" className='cursor-pointer'>SGP</option>
                  <option value="UAE" className='cursor-pointer'>UAE</option>
                  <option value="USA" className='cursor-pointer'>USA</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {['Our story', 'Our presence', 'Career'].map((item) => (
            <a key={item} href="#" className="text-white text-base hover:text-gray-300">
              {item}
            </a>
          ))}
          <button className="bg-white text-black px-4 py-1 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 mt-4">
            Login
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-opacity-50 z-40"
        ></div>
      )}
    </>
  );
};

export default Header;
