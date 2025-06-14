"use client";

import NewsletterTicker from "./NewsletterTicker";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import FooterSocialLinks from "./FooterSocialsLinks";
import NewsletterSignUp from "./NewsletterSignUp";

export default function Footer() {
  return (
    <footer className="bg-black overflow-hidden">
      
      <div className="max-w-[95rem] mx-auto px-6">
        <div className="py-8 xl:py-[128px] grid grid-cols-1 2xl:grid-cols-2 gap-2 md:gap-12 xl:gap-32 items-center">
          <h2 className="uppercase text-footer-title">
            Design to your inbox
          </h2>
          <div className="flex flex-wrap lg:justify-end gap-3">
            <NewsletterSignUp
              formClassName="flex flex-col gap-4 max-w-[28rem] w-full"
              formFieldsClassName="flex flex-wrap gap-3"
              inputClassName="max-w-[20rem]"
              buttonClassName="bg-white text-black hover:text-white"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap lg:justify-between gap-6 max-w-[95rem] w-full">
          <svg
            width="209"
            height="18"
            viewBox="0 0 209 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64366 17.592V11.016H9.94814V7.872H3.64366V3.528H11.1227V0.36H0V17.592H3.64366Z"
              fill="white"
            />
            <path
              d="M21.7267 11.112L27.8634 0.36H24.1958L20.0248 7.776L15.9256 0.36H11.9943L18.0831 11.112V17.592H21.7267V11.112Z"
              fill="white"
            />
            <path
              d="M33.4207 17.592V11.496H35.698L39.5813 17.592H43.9202L39.4854 10.944C41.9305 10.128 43.3688 8.28 43.3688 5.952C43.3688 2.376 40.8518 0.36 36.513 0.36H29.777V17.592H33.4207ZM33.4207 3.384H36.3452C38.5506 3.384 39.7252 4.248 39.7252 5.952C39.7252 7.632 38.5506 8.496 36.3452 8.496H33.4207V3.384Z"
              fill="white"
            />
            <path
              d="M49.8308 17.592V11.496H52.1081L55.9915 17.592H60.3303L55.8956 10.944C58.3407 10.128 59.7789 8.28 59.7789 5.952C59.7789 2.376 57.2619 0.36 52.9231 0.36H46.1871V17.592H49.8308ZM49.8308 3.384H52.7553C54.9607 3.384 56.1353 4.248 56.1353 5.952C56.1353 7.632 54.9607 8.496 52.7553 8.496H49.8308V3.384Z"
              fill="white"
            />
            <path
              d="M74.1755 14.424H66.2409V10.296H73.2885V7.152H66.2409V3.528H74.0077V0.36H62.5973V17.592H74.1755V14.424Z"
              fill="white"
            />
            <path
              d="M89.8185 17.592H92.8629L97.4175 6.048V17.592H100.726V0.36H96.3627L91.3527 13.128L86.3666 0.36H82.0038V17.592H85.3119V6.144L89.8185 17.592Z"
              fill="white"
            />
            <path
              d="M115.749 17.592H119.657L113.232 0.36H109.253L102.781 17.592H106.448L107.767 13.896H114.455L115.749 17.592ZM111.147 4.344L113.448 10.992H108.798L111.147 4.344Z"
              fill="white"
            />
            <path
              d="M128.609 17.952C134.099 17.952 137.503 13.92 137.287 8.304H128.418V11.208H133.404C132.924 13.344 131.318 14.856 128.777 14.856C125.325 14.856 123.479 12.312 123.479 9C123.479 5.304 125.589 3.264 128.37 3.264C130.671 3.264 132.253 4.584 132.78 6.336H137.071C135.945 2.592 132.828 0 128.466 0C123.432 0 119.74 3.816 119.74 8.904C119.74 14.232 123.623 17.952 128.609 17.952Z"
              fill="white"
            />
            <path
              d="M150.419 17.592H154.326L147.902 0.36H143.923L137.45 17.592H141.118L142.436 13.896H149.124L150.419 17.592ZM145.816 4.344L148.118 10.992H143.467L145.816 4.344Z"
              fill="white"
            />
            <path
              d="M169.2 17.592V14.448H160.067L168.912 3.288V0.36H155.656V3.504H164.429L155.632 14.712V17.592H169.2Z"
              fill="white"
            />
            <path
              d="M175.494 17.592V0.36H171.85V17.592H175.494Z"
              fill="white"
            />
            <path
              d="M190.232 17.592H193.804V0.36H190.448V11.784L182.945 0.36H179.013V17.592H182.345V5.568L190.232 17.592Z"
              fill="white"
            />
            <path
              d="M208.921 14.424H200.987V10.296H208.034V7.152H200.987V3.528H208.753V0.36H197.343V17.592H208.921V14.424Z"
              fill="white"
            />
          </svg>

          <div className="flex lg:flex-row max-w-[63.125rem] w-full">
            <nav className="flex flex-1" aria-label="left-footer-links">
              <ul className="text-white space-y-3">
                <li>
                  <Link href="#">Art</Link>
                </li>
                <li>
                  <Link href="#">Design</Link>
                </li>
                <li>
                  <Link href="#">Architecture</Link>
                </li>
              </ul>
            </nav>
            <nav className="flex flex-1" aria-label="middle-footer-links">
              <ul className="text-white space-y-3">
                <li>
                  <Link href="/magazine">Magazine</Link>
                </li>
                <li>
                  <Link href="/podcasts">Podcast</Link>
                </li>
                <li>
                  <Link href="/authors">Authors</Link>
                </li>
              </ul>
            </nav>
            <nav className="flex flex-1" aria-label="right-footer-links">
              <ul className="text-white space-y-3">
                <li>
                  <a href="#">Styleguide</a>
                </li>
                <li>
                  <a href="#">Licensing</a>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row justify-between gap-6 py-3 lg:pt-[6rem] lg:pb-[4.0625rem] w-full">
          <p className="font-regular text-white">
            Developed by Zoir. All content belongs to SNTLY copyright holders.
          </p>
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
}
