"use client";

import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";

function ContactHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("How can we help you?");

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMenuClose = (plan: string) => {
    setSelectedPlan(plan);
    setMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const payload = { ...formData, inquiryType: selectedPlan };
    // TODO: Replace with actual API endpoint (e.g., Formspree, Webhook, or custom endpoint)
    // eslint-disable-next-line no-console
    console.log("Contact form submission:", payload);

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ fullName: "", email: "", company: "", mobile: "", message: "" });
    setSelectedPlan("How can we help you?");
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <>
      <section className="relative z-10 py-4 min-h-screen">
        <div className="container mx-auto">
          <div className="lg:px-16 px-4 h-full flex flex-col text-ocx-fg relative top-[2%] space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-center lg:text-left font-display font-semibold py-2 text-ocx-fg-primary">
              Contact <span className="text-ocx-mauve">omnichannel CX</span>
            </h1>

            <div className="w-full flex flex-col pb-12">
              <h4 className="text-ocx-bright-blue font-display text-2xl font-bold text-center lg:text-left mb-0">Support</h4>
              <div className="flex flex-col lg:flex-row text-center lg:text-left w-full justify-between items-center lg:items-start lg:space-x-4 mt-0">
                <h3 className="font-display text-3xl font-bold flex-shrink-0 lg:flex-1 mt-0">Get help using omnichannel CX</h3>
                <div className="flex flex-col gap-1 lg:flex-1 mt-0">
                  <p className="leading-tight font-body">To contact our support team <span className="text-ocx-bright-blue whitespace-nowrap cursor-pointer hover:bg-ocx-bg-muted px-2 py-1 rounded-ocx-md transition-colors duration-ocx-fast" onClick={handleModalOpen}>Click here</span></p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col pb-12">
              <h4 className="text-ocx-bright-blue font-display text-2xl font-bold text-center lg:text-left mb-0">Sales</h4>
              <div className="flex flex-col lg:flex-row text-center lg:text-left w-full justify-between items-center lg:items-start lg:space-x-4 mt-0">
                <h3 className="font-display text-3xl font-bold flex-shrink-0 lg:flex-1 mt-0">Learn more about omnichannel CX</h3>
                <div className="flex flex-col gap-1 lg:flex-1 mt-0">
                  <p className="leading-tight font-body"><span className="text-ocx-bright-blue whitespace-nowrap">sales@omnichannel.cx</span></p>
                  <p className="leading-tight font-body">+61 2 0000 0000 (Australia)</p>
                  <p className="leading-tight font-body">+1 000 000 0000 (North America)</p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col pb-12">
              <h4 className="text-ocx-bright-blue font-display text-xl font-bold text-center lg:text-left mb-0">Offices</h4>
              <div className="flex flex-col lg:flex-row text-center lg:text-left w-full justify-between items-center lg:items-start lg:space-x-4 mt-0">
                <h3 className="font-display text-3xl font-bold flex-shrink-0 lg:flex-1 mt-0">Find us</h3>
                <div className="flex flex-col gap-1 lg:flex-1 mt-0">
                  <p className="leading-tight font-body"><span className="text-ocx-bright-blue whitespace-nowrap">Sydney</span></p>
                  <p className="leading-tight font-body">420 George St., Floor 17 Sydney, NSW 2000, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-ocx-bg rounded-ocx-xl p-6 md:p-8 w-full max-w-2xl mx-auto relative border border-ocx-border shadow-ocx-lg">
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 p-1 bg-ocx-bg-subtle rounded-ocx-md text-ocx-fg hover:text-ocx-fg-primary transition-colors duration-ocx-fast"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>
            <h3 className="text-xl font-bold mb-4 font-display text-ocx-fg-primary">Contact Us</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-ocx-fg-muted text-sm font-body mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full py-2 px-4 border border-ocx-border rounded-ocx-pill bg-ocx-bg-subtle focus:outline-none focus:ring-2 focus:ring-ocx-bright-blue focus:border-transparent placeholder:text-ocx-fg-subtle text-ocx-fg font-body text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-ocx-fg-muted text-sm font-body mb-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full py-2 px-4 border border-ocx-border rounded-ocx-pill bg-ocx-bg-subtle focus:outline-none focus:ring-2 focus:ring-ocx-bright-blue focus:border-transparent placeholder:text-ocx-fg-subtle text-ocx-fg font-body text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-ocx-fg-muted text-sm font-body mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full py-2 px-4 border border-ocx-border rounded-ocx-pill bg-ocx-bg-subtle focus:outline-none focus:ring-2 focus:ring-ocx-bright-blue focus:border-transparent placeholder:text-ocx-fg-subtle text-ocx-fg font-body text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-ocx-fg-muted text-sm font-body mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile Number"
                    pattern="[\+\d\s\-\(\)]{7,20}"
                    className="w-full py-2 px-4 border border-ocx-border rounded-ocx-pill bg-ocx-bg-subtle focus:outline-none focus:ring-2 focus:ring-ocx-bright-blue focus:border-transparent placeholder:text-ocx-fg-subtle text-ocx-fg font-body text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative flex-1">
                  <label className="block text-ocx-fg-muted text-sm font-body mb-1">How can we help you?</label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={selectedPlan}
                      onClick={() => setMenuOpen(!menuOpen)}
                      readOnly
                      className="w-full py-2 px-4 border border-ocx-border rounded-ocx-pill bg-ocx-bg-subtle cursor-pointer focus:outline-none focus:ring-2 focus:ring-ocx-bright-blue focus:border-transparent placeholder:text-ocx-fg-subtle text-ocx-fg font-body text-sm"
                    />
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-ocx-fg-subtle w-4 h-4 pointer-events-none" />
                  </div>
                  {menuOpen && (
                    <div className="absolute mt-1 w-full bg-ocx-bg border border-ocx-border rounded-ocx-lg overflow-hidden shadow-ocx-md z-10">
                      {["General enquiry", "Sales", "Support", "Partnerships"].map((option) => (
                        <div
                          key={option}
                          onClick={() => handleMenuClose(option)}
                          className="p-2.5 cursor-pointer hover:bg-ocx-bg-muted hover:text-ocx-fg-primary font-body text-sm transition-colors duration-ocx-fast"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-ocx-fg-muted text-sm font-body mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    required
                    className="w-full py-2 px-4 border border-ocx-border rounded-ocx-lg bg-ocx-bg-subtle focus:outline-none focus:ring-2 focus:ring-ocx-bright-blue focus:border-transparent placeholder:text-ocx-fg-subtle text-ocx-fg font-body text-sm resize-none"
                    rows={4}
                  />
                </div>
              </div>
              {submitStatus === "success" && (
                <p className="text-ocx-bright-blue text-sm font-body text-center">Thank you! Your message has been received.</p>
              )}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-ocx-dark-blue text-white font-display font-semibold text-sm px-8 py-2.5 rounded-ocx-pill hover:bg-ocx-mauve transition-colors duration-ocx-fast disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactHero;
