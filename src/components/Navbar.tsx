import React from 'react';
import { Search, Menu, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const { user, logout, openLoginModal } = useAuthStore();

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">BookMyShow</span>
            <div className="ml-8 relative">
              <input
                type="text"
                placeholder="Search for Movies"
                className="w-96 px-4 py-2 bg-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">{user.name}</span>
                <button 
                  onClick={logout}
                  className="flex items-center space-x-1 hover:text-gray-300"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={openLoginModal}
                className="flex items-center space-x-1 hover:text-gray-300"
              >
                <User className="h-5 w-5" />
                <span>Sign in</span>
              </button>
            )}
            
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}