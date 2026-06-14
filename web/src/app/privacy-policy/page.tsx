import type { Metadata } from "next";
import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "omnichannel privacy policy. How we collect, use, and protect your information.",
  alternates: {
    canonical: "https://omnichannel.cx/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <StickyScrollLayout>
      <div className="flex flex-col justify-center py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ocx-fg-primary text-center my-12">
          Privacy Policy
        </h1>

        <div className="container text-ocx-fg font-body flex flex-col gap-12 max-w-3xl mx-auto">
          <section>
            <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
              What we collect
            </h2>
            <p className="text-lg leading-ocx-base">
              We collect minimal data about visitors to this website:
            </p>
            <ul className="list-disc ml-8 mt-4 space-y-2">
              <li>
                <strong>Analytics:</strong> We use PostHog to understand how visitors use the site.
                This includes page views, clicks, and session recordings. PostHog stores data in
                first-party cookies and localStorage.
              </li>
              <li>
                <strong>Quiz interactions:</strong> If you use the two-minute maturity check, your
                answers are stored in sessionStorage. Nothing is sent to our servers.
              </li>
              <li>
                <strong>Booking:</strong> If you book a working session via Calendly, Calendly
                collects the information you provide through their booking form. We do not store
                that data ourselves.
              </li>
            </ul>
            <p className="text-lg leading-ocx-base mt-4">
              We do not collect names, addresses, or other personal information unless you
              voluntarily provide it through a booking or direct contact.
            </p>
          </section>

          <section>
            <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
              How we use it
            </h2>
            <p className="text-lg leading-ocx-base">
              Analytics data is used to improve the website experience only. We do not sell or share
              your data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
              Cookies and tracking
            </h2>
            <p className="text-lg leading-ocx-base">
              PostHog uses cookies and localStorage to track session data. You can decline tracking
              via the cookie consent banner that appears on your first visit. If you decline, no
              analytics cookies are set and no tracking occurs.
            </p>
          </section>

          <section>
            <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
              Your rights
            </h2>
            <p className="text-lg leading-ocx-base">
              Under the UK General Data Protection Regulation (GDPR) and the Australian Privacy
              Act 1988, you have the right to:
            </p>
            <ul className="list-disc ml-8 mt-4 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-ocx-fg-accent font-bold font-display text-2xl mb-4">
              Contact
            </h2>
            <p className="text-lg leading-ocx-base">
              Data controller: Graeme Provan, Omnichannel PTY LTD.
              <br />
              
            </p>
          </section>
        </div>
      </div>
    </StickyScrollLayout>
  );
}
