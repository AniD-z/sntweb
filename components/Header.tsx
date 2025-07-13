'use client'

import { useState } from 'react'
import Link from 'next/link'
import menuLinks from '@/data/menu'
import ContactForm from '@/components/ContactForm'
import SocialSharing from './SocialSharing'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { ChevronDown, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const openContactForm = () => {
    setIsContactOpen(true)
    setIsSheetOpen(false) // Close Sheet on mobile
  }

  const closeContactForm = () => setIsContactOpen(false)

  const moreMenu = [
    { href: '/magazine', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/social-responsibility', label: 'Social Responsibility' },
    { href: '/meet-the-team', label: 'Meet the Team' },
  ]

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[95rem] mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Return to homepage">
            <img
              src="/logos/Log.svg"
              alt="Site logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuLinks.map((item, index) =>
              item.label === 'Contact Us' ? (
                <button
                  key={index}
                  onClick={openContactForm}
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                <Menu className="w-5 h-5 mr-1" />
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    <div className="py-2">
                      {moreMenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Divider */}
            <svg
              width="15"
              height="1"
              viewBox="0 0 15 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="15" height="1" fill="black" />
            </svg>

            {/* Social Icons */}
            <SocialSharing
              links={[
                {
                  href: '#',
                  ariaLabel: 'Visit our Instagram page',
                  src: '/icons/ri_instagram-line.svg',
                  alt: 'Instagram logo',
                },
                {
                  href: '#',
                  ariaLabel: 'Visit our Twitter page',
                  src: '/icons/ri_twitter-fill.svg',
                  alt: 'Twitter logo',
                },
                {
                  href: '#',
                  ariaLabel: 'Visit our YouTube page',
                  src: '/icons/ri_youtube-fill.svg',
                  alt: 'YouTube logo',
                },
                {
                  href: '#',
                  ariaLabel: 'Visit our RSS feed',
                  src: '/icons/ri_rss-fill.svg',
                  alt: 'RSS logo',
                },
              ]}
            />
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger aria-label="Toggle menu" className="md:hidden">
              <Menu className="w-6 h-6 text-gray-600" />
            </SheetTrigger>
            <SheetContent side="top" className="w-full pt-14">
              <nav className="flex flex-col gap-6">
                {menuLinks.map((item, index) =>
                  item.label === 'Contact Us' ? (
                    <button
                      key={index}
                      onClick={openContactForm}
                      className="text-sm text-black text-left hover:underline"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-sm text-black hover:underline"
                    >
                      {item.label}
                    </Link>
                  )
                )}

                <hr />
                <p className="text-sm text-gray-500">More</p>
                {moreMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="text-sm text-black hover:text-gray-800"
                  >
                    {item.label}
                  </Link>
                ))}

                <hr />
                <SocialSharing
                  links={[
                    {
                      href: '#',
                      ariaLabel: 'Visit our Instagram page',
                      src: '/icons/ri_instagram-line.svg',
                      alt: 'Instagram logo',
                    },
                    {
                      href: '#',
                      ariaLabel: 'Visit our Twitter page',
                      src: '/icons/ri_twitter-fill.svg',
                      alt: 'Twitter logo',
                    },
                  ]}
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Contact Modal */}
      {isContactOpen && <ContactForm onClose={closeContactForm} />}
    </>
  )
}
