"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="text-ocx-fg bg-ocx-bg-subtle border-t border-ocx-border pt-10">
      <div className="px-4 md:px-12 py-10 flex flex-col justify-between md:grid md:grid-cols-6 gap-y-10 md:gap-0">
        {/* Logo */}
        <div className="flex justify-center md:justify-start order-1 md:order-none col-span-1">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={mounted && theme === "dark" ? "/assets/logo-icon-white.png" : "/assets/logo-icon-color.png"}
              alt="omnichannel CX Logo"
              width={32}
              height={32}
              className="w-8 h-8"
              suppressHydrationWarning
            />
            <span className="font-display text-ocx-dark-blue text-2xl font-bold tracking-ocx-tight">
              omnichannel <span className="font-extrabold">CX</span>
            </span>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start md:order-none col-span-2 space-y-4 order-2">
          <ul className="text-center md:text-left space-y-2 md:space-y-4 text-base font-body">
            <li><Link href="/" className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">Home</Link></li>
            <li><Link href="/about" className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">About</Link></li>
            <li><Link href="/blog" className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">Blog</Link></li>
            <li><Link href="/pricing" className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center order-3 md:order-none col-span-3 space-y-4">
          <p className="text-lg font-display font-semibold text-center text-ocx-dark-blue">Stay updated</p>

          <form className="relative flex items-center w-full max-w-md mx-auto mt-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="relative flex-grow py-3 px-5 rounded-ocx-pill bg-ocx-bg border border-ocx-border focus:outline-none focus:ring-2 focus:ring-ocx-bright-blue focus:border-transparent font-body text-sm"
              placeholder="Enter your email"
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="absolute right-1.5 min-w-[80px] bg-ocx-dark-blue cursor-pointer text-white font-display font-semibold text-sm rounded-ocx-pill px-5 py-2 hover:bg-ocx-mauve transition-colors duration-ocx-fast">
              Subscribe
            </button>
          </form>
          <div className="flex gap-6 pt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <Image
                src="/icons/x.svg"
                alt=""
                width={28}
                height={28}
                className="cursor-pointer hover:scale-110 transition-all duration-ocx-fast opacity-70 hover:opacity-100"
              />
            </a>
            <a href="https://www.linkedin.com/company/omnichannelcx" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image
                src="/icons/in.svg"
                alt=""
                width={28}
                height={28}
                className="cursor-pointer hover:scale-110 transition-all duration-ocx-fast opacity-70 hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-ocx-bg border-t border-ocx-border py-5 flex justify-center items-center">
        <ul className="flex gap-1 md:gap-3 text-sm font-body text-ocx-fg-muted">
          <li className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="cursor-default" aria-hidden="true">|</li>
          <li className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">
            <Link href="/terms-of-service">Terms of Service</Link>
          </li>
          <li className="cursor-default" aria-hidden="true">|</li>
          <li className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">
            <Link href="/disclaimer">Disclaimer</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
