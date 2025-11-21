import React from 'react';
import { Lock, ChevronLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Portal: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <div className="p-8 md:p-10">
        <Link to="/" className="inline-flex items-center text-xs text-stone-500 hover:text-stone-900 uppercase tracking-widest transition-colors font-medium">
          <ChevronLeft size={16} className="mr-1" /> Return Home
        </Link>
      </div>

      <div className="flex-grow flex items-center justify-center px-6 pb-32">
        <div className="max-w-lg w-full">
          <div className="bg-white p-12 md:p-16 border border-stone-200 shadow-lg text-center">
            <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 text-stone-900 border border-stone-100">
              <Lock size={32} />
            </div>
            <h1 className="text-3xl font-display font-medium text-stone-900 mb-6">Partner Portal</h1>
            <p className="text-stone-500 mb-10 text-base leading-relaxed">
              Access restricted to accredited referral partners. Please log in to view client status and resources.
            </p>
            
            <div className="space-y-6">
              <div className="text-left">
                <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full border-b border-stone-300 py-3 text-lg focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                />
              </div>
              <div className="text-left">
                <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full border-b border-stone-300 py-3 text-lg focus:outline-none focus:border-stone-900 transition-colors bg-transparent"
                />
              </div>
              <div className="pt-6">
                 <Button fullWidth>Secure Login</Button>
              </div>
            </div>
            
            <div className="mt-10 text-xs text-stone-400 uppercase tracking-widest">
              <a href="#" className="hover:text-stone-600 transition-colors">Forgot Credentials?</a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs text-stone-400">Protected by Sumry Secure Access</p>
          </div>
        </div>
      </div>
    </div>
  );
};