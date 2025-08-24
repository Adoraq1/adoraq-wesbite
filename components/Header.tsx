'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Instagram } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: 'https://wa.me/44749052323' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-muted-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand2 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-muted-900">Adoraq</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-600 hover:text-brand transition-colors duration-200 font-medium"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://instagram.com/adoraq_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-600 hover:text-brand transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-600 hover:text-brand hover:bg-muted-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-muted-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-600 hover:text-brand transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://instagram.com/adoraq_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-600 hover:text-brand transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram size={20} />
                <span>Follow on Instagram</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
