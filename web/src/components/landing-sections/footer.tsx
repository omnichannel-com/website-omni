import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-ocx-fg bg-ocx-bg-subtle border-t border-ocx-border pt-10">
      <div className="px-4 md:px-12 py-10 flex flex-col justify-between md:grid md:grid-cols-6 gap-y-10 md:gap-0">
        {/* Logo */}
        <div className="flex justify-center md:justify-start order-1 md:order-none col-span-1">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/omnichannel-cx-icon-large.svg"
              alt="omnichannel Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              sizes="32px"
            />
            <span className="font-display text-ocx-fg-primary text-2xl font-bold tracking-ocx-tight">
              omnichannel
            </span>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start md:order-none col-span-2 space-y-4 order-2">
          <ul className="text-center md:text-left space-y-2 md:space-y-4 text-base font-body">
            <li><Link href="/" className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">Home</Link></li>
            <li><Link href="/about" className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">About</Link></li>
            <li><Link href="/services" className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">Services</Link></li>
            <li><Link href="/blog" className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">Blog</Link></li>
            <li><Link href="/human-in-control" className="hover:text-ocx-bright-blue transition-colors duration-ocx-fast">Human in control</Link></li>
          </ul>
        </div>

        {/* Tagline & social */}
        <div className="flex flex-col items-center order-3 md:order-none col-span-3 space-y-4">
          <p className="text-lg font-display font-semibold text-center text-ocx-fg-primary">
            AI does the work. You make the call.
          </p>
          <p className="text-sm font-body text-ocx-fg-muted text-center">
            Human-in-control AI for the whole organisation.
          </p>
          <div className="flex gap-6 pt-2">
            <a href="https://www.linkedin.com/company/omnichannel-cx" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image
                src="/icons/in.svg"
                alt="LinkedIn"
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
        </ul>
      </div>
    </footer>
  );
}
