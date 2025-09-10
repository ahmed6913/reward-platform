import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow-sm rounded-full mx-4 mt-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-orange-500 text-white px-3 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
              RP
            </div>
            <span className="text-gray-800 font-medium text-bold text-lg ">Reward Platform</span>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors text-base">
              Home
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-orange-500 transition-colors text-base ">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors text-base">
              Contact
            </a>
            <a href="#login" className="text-gray-800 hover:text-orange-500 transition-colors font-medium text-base text-lg ">
              Login
            </a>
          </div>

          {/* sign up button - Right side */}
          <div className="hidden md:block">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-orange-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Centered */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-orange-500">
                Home
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-orange-500">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-orange-500">
                Contact
              </a>
              <a href="#login" className="block px-3 py-2 text-gray-600 hover:text-orange-500">
                Login
              </a>
              <div className="flex justify-center mt-2">
                <button className="bg-orange-500 text-white px-3 py-2 rounded-md font-medium hover:bg-orange-600">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}