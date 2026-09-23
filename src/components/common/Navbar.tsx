import React, { useState } from 'react';
import { useApp, PageId } from '../../context/AppContext';
import { Menu, X, ArrowRight, HeartHandshake, Shield, Sparkles, UserCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo, setRole } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'features', label: 'Features' },
    { id: 'impact', label: 'Impact' },
    { id: 'team', label: 'Our Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    navigateTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="glass-nav sticky top-0 z-40 transition-all border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-indigo to-brand-light flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              {/* Abstract logo: signal wave + human heart/hand */}
              <div className="relative">
                <HeartHandshake className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-softBlue rounded-full ring-2 ring-white animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-brand-navy tracking-tight">
                  Emo<span className="text-brand-primary">Spot</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-indigo-50 text-brand-primary px-1.5 py-0.5 rounded border border-indigo-200">
                  Campus
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block -mt-0.5">
                Small signals. Brighter tomorrows.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/70">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentPage === link.id
                    ? 'bg-white text-brand-primary shadow-sm'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-white/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => navigateTo('role-select')}
              className="text-xs font-semibold text-slate-700 hover:text-brand-primary px-3.5 py-2 rounded-full hover:bg-slate-100 transition-all flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5 text-slate-500" />
              Login
            </button>

            <button
              onClick={() => {
                setRole('student');
                navigateTo('student-dashboard');
              }}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-brand-primary to-brand-light text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-200" />
              Enter Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => {
                setRole('student');
                navigateTo('student-dashboard');
              }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-primary text-white"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 rounded-xl text-xs font-medium ${
                  currentPage === link.id
                    ? 'bg-indigo-50 text-brand-primary font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                navigateTo('role-select');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl"
            >
              Sign In to Portal
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setRole('student');
                  navigateTo('student-dashboard');
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 text-center text-xs font-semibold bg-brand-softBlue/20 text-brand-navy border border-sky-300 rounded-xl"
              >
                Student Demo
              </button>
              <button
                onClick={() => {
                  setRole('staff');
                  navigateTo('staff-dashboard');
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 text-center text-xs font-semibold bg-brand-indigo text-white rounded-xl"
              >
                Staff Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
