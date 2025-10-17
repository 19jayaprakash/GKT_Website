// "use client";

// import React, { useState, useRef, useEffect } from 'react';
// import { Search, X, Menu } from 'lucide-react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';


// interface HeaderProps {
//   activeSection: string;
// }

// const Header: React.FC<HeaderProps> = ({ activeSection }) => {
//     const router = useRouter();
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const searchInputRef = useRef<HTMLInputElement>(null);

//   const getHeaderBackground = () => {
//     switch(activeSection) {
//       case 'home':
//         return 'bg-black';
//       default:
//         return 'bg-black';
//     }
//   };


//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [isSearchOpen]);

//   const handleSearch = (value: string) => {
//     console.log('Search value:', value);
//   };

//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchValue.trim()) {
//       handleSearch(searchValue.trim());
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setSearchValue(value);
//   };

//   const handleSearchToggle = () => {
//     if (isSearchOpen && searchValue.trim()) {
//       handleSearch(searchValue.trim());
//     }
//     setIsSearchOpen(!isSearchOpen);
//     if (isSearchOpen) {
//       setSearchValue('');
//     }
//   };

//   const handleCloseSearch = () => {
//     setIsSearchOpen(false);
//     setSearchValue('');
//   };

//   return (
//     <>
//       <header className={`${getHeaderBackground()} fixed z-50 w-full font-[family-name:var(--font-poppins)] transition-colors duration-500`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center">
//               <div className="w-40 flex h-full items-center justify-center cursor-pointer" onClick={() => router.push('/')}>
//                 <Image
//                   src={'/gkt_light.png'}
//                   alt="My Logo"
//                   width={300}
//                   height={70}
//                 />
//               </div>
//             </div>

//             <nav className={`hidden md:flex w-full justify-end space-x-8 ${isSearchOpen ? 'md:hidden lg:flex' : ''}`}>
//               {['Our story', 'Our programs', 'Career'].map((text) => (
//                 <a key={text} href="#" className="text-gray-400 px-3 py-2 text-sm font-normal hover:text-gray-300">
//                   {text}
//                 </a>
//               ))}
//             </nav>

//             <button
//               className="md:hidden text-white"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <Menu className="h-6 w-6" />
//             </button>

//             <div className="hidden md:flex items-center space-x-4 ml-5">
//               <div className="flex items-center">
//                 {isSearchOpen ? (
//                   <form onSubmit={handleSearchSubmit} className="flex items-center">
//                     <div className="relative">
//                       <input
//                         ref={searchInputRef}
//                         type="text"
//                         value={searchValue}
//                         onChange={handleInputChange}
//                         placeholder="Search..."
//                         className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none"
//                       />
//                       <button
//                         type="button"
//                         onClick={handleCloseSearch}
//                         className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
//                       >
//                         <X className="h-4 w-4" />
//                       </button>
//                     </div>
//                     <button type="submit" className="ml-2 text-gray-400 hover:text-gray-600 cursor-pointer">
//                       <Search className="h-5 w-5" />
//                     </button>
//                   </form>
//                 ) : (
//                   <button
//                     onClick={handleSearchToggle}
//                     className="text-gray-900 bg-[#E5E5E5] hover:text-gray-900 transition-colors duration-200 rounded-3xl px-2 py-1"
//                   >
//                     <Search className="h-5 w-5" />
//                   </button>
//                 )}
//               </div>

//               <button className="bg-white text-black px-4 py-1 rounded-lg text-sm font-medium hover:scale-105 cursor-pointer transition-colors duration-200">
//                 Login
//               </button>

//               <div className="bg-black cursor-pointer">
//                 <select defaultValue={'IND'} className="bg-black text-gray-400 cursor-pointer">
//                   <option value="IND" className='cursor-pointer'>IND</option>
//                   <option value="SGP" className='cursor-pointer'>SGP</option>
//                   <option value="UAE" className='cursor-pointer'>UAE</option>
//                   <option value="USA" className='cursor-pointer'>USA</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div
//         className={`fixed top-0 left-0 z-50 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-gray-700">
//           <span className="text-lg font-bold">Menu</span>
//           <button onClick={() => setIsMenuOpen(false)}>
//             <X className="h-6 w-6 text-white" />
//           </button>
//         </div>
//         <nav className="flex flex-col space-y-4 p-4">
//           {['Our story', 'Our presence', 'Career'].map((item) => (
//             <a key={item} href="#" className="text-white text-base hover:text-gray-300">
//               {item}
//             </a>
//           ))}
//           <button className="bg-white text-black px-4 py-1 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 mt-4">
//             Login
//           </button>
//         </nav>
//       </div>

//       {isMenuOpen && (
//         <div
//           onClick={() => setIsMenuOpen(false)}
//           className="fixed inset-0 bg-opacity-50 z-40"
//         ></div>
//       )}


//     </>
//   );
// };

// export default Header;




"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Menu, ChevronDown } from 'lucide-react';
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
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getHeaderBackground = () => {
    switch(activeSection) {
      case 'home':
        return 'bg-black';
      case 'consulting':
        return 'bg-[#FFFFFF] text-black';
      default:
        return 'bg-[#FFFFFF] text-black';
    }
  };

  const getHeaderTextColor = () => {
  switch(activeSection) {
    case 'home':
      return 'text-white';
    default:
      return 'text-black';
  }
};


  const getButtonColor = () => {
  switch(activeSection) {
    case 'home':
      return 'text-black bg-white';
    default:
      return ' bg-[#004881] text-white';
  }
};

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProgramsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const handleProgramsClick = (item: string) => {
    console.log('Selected program:', item);
    setIsProgramsDropdownOpen(false);
    // Add your navigation logic here
  };

  const handleMobileProgramsClick = (item: string) => {
    console.log('Selected mobile program:', item);
    setIsMobileProgramsOpen(false);
    // Add your navigation logic here
  };

  return (
    <>
      <header className={`${getHeaderBackground()} ${getHeaderTextColor()} shadow-md fixed z-50 w-full font-[family-name:var(--font-poppins)] transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-40 flex h-full items-center justify-center cursor-pointer" onClick={() => router.push('/')}>
                <Image
                  src={`${activeSection !== 'home' ? '/gkt.png':'/gkt_light.png'}`}
                  alt="My Logo"
                  width={300}
                  height={70}
                />
              </div>
            </div>

            <nav className={`hidden md:flex w-full justify-end space-x-8 ${isSearchOpen ? 'md:hidden lg:flex' : ''}`}>
              <a href="#" className="px-3 py-2 text-sm font-normal hover:text-gray-300">
                Our story
              </a>
              
              {/* Programs Dropdown */}
              <div 
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                onMouseLeave={() => setIsProgramsDropdownOpen(false)}
              >
                <button className=" px-3 cursor-pointer py-2 text-sm font-normal hover:text-gray-300 flex items-center space-x-1">
                  <span>Our programs</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isProgramsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <button
                      onClick={() => handleProgramsClick('Webinars')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                    >
                      Webinars
                    </button>
                    <button
                      onClick={() => handleProgramsClick('Schedules')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                    >
                      Schedules
                    </button>
                  </div>
                )}
              </div>

              <a href="#" className=" px-3 py-2 text-sm font-normal hover:text-gray-300">
                Career
              </a>
            </nav>
            <div className='flex gap-5'>
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
                        className="w-32 md:w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleCloseSearch}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2  hover:text-gray-600 cursor-pointer"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <button type="submit" className="ml-2  hover:text-gray-600 cursor-pointer">
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
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            </div>


            <div className="hidden md:flex items-center space-x-4 ml-5">
             

              <button className={`${getButtonColor()} px-4 py-1 rounded-lg text-sm font-medium hover:scale-105 cursor-pointer transition-colors duration-200`}>
                Login
              </button>

              <div className={` cursor-pointer ${getHeaderTextColor}`}>
                <select defaultValue={'IND'} className=" cursor-pointer">
                  <option value="IND" className='cursor-pointer text-black'>IND</option>
                  <option value="SGP" className='cursor-pointer  text-black'>SGP</option>
                  <option value="UAE" className='cursor-pointer  text-black'>UAE</option>
                  <option value="USA" className='cursor-pointer  text-black'>USA</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
          <a href="#" className="text-white text-base hover:text-gray-300">
            Our story
          </a>
          
          <div className="relative">
            <button
              onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
              className="text-white text-base hover:text-gray-300 flex items-center justify-between w-full cursor-pointer"
            >
              <span>Our programs</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileProgramsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMobileProgramsOpen && (
              <div className="mt-2 ml-4 space-y-2">
                <button
                  onClick={() => handleMobileProgramsClick('Webinars')}
                  className="block text-gray-300 text-sm hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  Webinars
                </button>
                <button
                  onClick={() => handleMobileProgramsClick('Schedules')}
                  className="block text-gray-300 text-sm hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  Schedules
                </button>
              </div>
            )}
          </div>

          <a href="#" className="text-white text-base hover:text-gray-300">
            Career
          </a>
          
          <button className="bg-white text-black px-4 py-1 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200 mt-4">
            Login
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </>
  );
};

export default Header;