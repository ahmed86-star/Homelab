import React from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-500 font-mono">
                &gt; Homelab
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-base font-medium text-gray-300 hover:text-green-500 font-mono">
                &gt; Home
              </Link>
              <Link href="/services" className="text-base font-medium text-gray-300 hover:text-green-500 font-mono">
                &gt; Services
              </Link>
              <Link href="/docs" className="text-base font-medium text-gray-300 hover:text-green-500 font-mono">
                &gt; Documentation
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 mt-auto">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/docs" className="text-gray-400 hover:text-green-500 font-mono">
              &gt; Documentation
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-green-500 font-mono">
              &gt; Services
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-green-500 font-mono">
              &gt; Contact
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400 font-mono">
              &gt; Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 