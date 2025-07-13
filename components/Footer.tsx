"use client";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import FooterSocialLinks from "./FooterSocialsLinks";
import NewsletterSignUp from "./NewsletterSignUp";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="max-w-[95rem] mx-auto px-4">
        
        

        {/* Navigation Links */}
        <div className="py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-700">
          <nav aria-label="left-footer-links">
            <ul className="space-y-2">
              <li><Link href="/what-we-offer">Offers</Link></li>
              <li><Link href="/services">Services</Link></li>
            </ul>
          </nav>
          <nav aria-label="middle-footer-links">
            <ul className="space-y-2">
              <li><Link href="/magazine">Our Work</Link></li>
              <li><a href="https://zoir.in" target="_blank" rel="noopener noreferrer">ZOIR</a></li>
            </ul>
          </nav>
          <nav aria-label="right-footer-links">
            <ul className="space-y-2">
              <li><a href="#">Team</a></li>
              <li><a href="#">Licensing</a></li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-700 gap-3 text-xs">
          <p>Powered by Zoir. All content belongs to SNTLY copyright holders.</p>
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
}
