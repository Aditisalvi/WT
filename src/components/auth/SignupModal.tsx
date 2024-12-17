import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export default function SignupModal() {
  const { isSignupModalOpen, closeSignupModal, openLoginModal, setUser } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would make an API call here
    setUser({
      id: '1',
      email,
      name,
    });
    closeSignupModal();
  };

  if (!isSignupModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={closeSignupModal}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => {
              closeSignupModal();
              openLoginModal();
            }}
            className="text-red-500 hover:text-red-600"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}