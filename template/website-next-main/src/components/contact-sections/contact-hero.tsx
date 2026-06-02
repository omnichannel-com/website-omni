import React, { useState } from "react";
import { Button, Menu, MenuItem, Modal, TextField, TextareaAutosize } from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

function ContactHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>("Pick a plan");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (plan: string) => {
    setSelectedPlan(plan);
    setAnchorEl(null);
  };

  const menuOpen = Boolean(anchorEl);

  return (
    <>
      <section className="relative z-10 py-4 min-h-screen">
        <div className="container mx-auto">
          <div className="lg:px-16 px-4 h-full flex flex-col text-textClr relative top-[2%] space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-center lg:text-left font-nunito font-semibold py-2">
              Contact <span className="gradient-text">AlterEgo</span>
            </h1>

            <div className="w-full flex flex-col pb-12">
              <h4 className="text-secondaryColor font-nunito text-2xl font-bold text-center lg:text-left mb-0">Support</h4>
              <div className="flex flex-col lg:flex-row text-center lg:text-left w-full justify-between items-center lg:items-start lg:space-x-4 mt-0">
                <h3 className="font-nunito text-3xl font-bold flex-shrink-0 lg:flex-1 mt-0">Get help using AlterEgo</h3>
                <div className="flex flex-col gap-1 lg:flex-1 mt-0">
                  <p className="leading-tight">To contact our support team <span className="text-secondaryColor whitespace-nowrap cursor-pointer hover:bg-cardClr px-2 py-1 rounded" onClick={handleModalOpen}>Click here</span></p>
                  {/* <p className="leading-tight">Having trouble accessing your account? <span className="text-secondaryColor whitespace-nowrap">Submit a ticket</span></p> */}
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col pb-12">
              <h4 className="text-secondaryColor font-nunito text-2xl font-bold text-center lg:text-left mb-0">Sales</h4>
              <div className="flex flex-col lg:flex-row text-center lg:text-left w-full justify-between items-center lg:items-start lg:space-x-4 mt-0">
                <h3 className="font-nunito text-3xl font-bold flex-shrink-0 lg:flex-1 mt-0">Learn more about AlterEgo</h3>
                <div className="flex flex-col gap-1 lg:flex-1 mt-0">
                  <p className="leading-tight"><span className="text-secondaryColor whitespace-nowrap">sales@alterego.com</span></p>
                  <p className="leading-tight">+61 000 000 000 (Australia)</p>
                  <p className="leading-tight">+1 000 000 000 (North America)</p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col pb-12">
              <h4 className="text-secondaryColor font-nunito text-xl font-bold text-center lg:text-left mb-0">Offices</h4>
              <div className="flex flex-col lg:flex-row text-center lg:text-left w-full justify-between items-center lg:items-start lg:space-x-4 mt-0">
                <h3 className="font-nunito text-3xl font-bold flex-shrink-0 lg:flex-1 mt-0">Find us</h3>
                <div className="flex flex-col gap-1 lg:flex-1 mt-0">
                  <p className="leading-tight"><span className="text-secondaryColor whitespace-nowrap">Sydney</span></p>
                  <p className="leading-tight">420 George St., Floor 17 Sydney, NSW 2000, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal open={isModalOpen} onClose={handleModalClose}>
        <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-cardClr rounded-2xl p-8 w-full max-w-4xl mx-auto relative border-borderClr/25 border-2">
            <IoClose
              className="absolute top-4 right-4 bg-backgroundClr rounded text-textClr cursor-pointer hover:text-secondaryColor"
              size={24}
              onClick={handleModalClose}
            />
            <h3 className="text-xl font-bold mb-4 font-nunito text-secondaryColor">Contact Us</h3>
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-textClr">Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full py-2 px-4 mt-1 border border-borderClr/25 rounded-full bg-backgroundClr focus:outline-none focus:border-secondaryColor placeholder:text-textClr/25 text-textClr"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-textClr">Your Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full py-2 px-4 mt-1 border border-borderClr/25 rounded-full bg-backgroundClr focus:outline-none focus:border-secondaryColor placeholder:text-textClr/25 text-textClr"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-textClr">Company Name</label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full py-2 px-4 mt-1 border border-borderClr/25 rounded-full bg-backgroundClr focus:outline-none focus:border-secondaryColor placeholder:text-textClr/25 text-textClr"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-textClr">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full py-2 px-4 mt-1 border border-borderClr/25 rounded-full bg-backgroundClr focus:outline-none focus:border-secondaryColor placeholder:text-textClr/25 text-textClr"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative flex-1">
                  <label className="block text-textClr">How can we help you?</label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={selectedPlan}
                      onClick={handleMenuOpen}
                      readOnly
                      className="w-full py-2 px-4 mt-1 border border-borderClr/25 rounded-full bg-backgroundClr cursor-pointer focus:outline-none focus:border-secondaryColor placeholder:text-textClr/25 text-textClr"
                      placeholder="How can we help you?"
                    />
                    <RiArrowDropDownLine className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  </div>
                  <div
                    className={`absolute mt-1 w-full bg-cardClr border border-secondaryColor rounded-lg overflow-hidden shadow-lg ${menuOpen ? 'block' : 'hidden'}`}
                    style={{ zIndex: 1000 }}
                  >
                    <div onClick={() => handleMenuClose("Pick a plan")} className="p-2 cursor-pointer hover:bg-backgroundClr hover:text-textClr">Pick a plan</div>
                    <div onClick={() => handleMenuClose("Plan A")} className="p-2 cursor-pointer hover:bg-backgroundClr hover:text-textClr">Plan A</div>
                    <div onClick={() => handleMenuClose("Plan B")} className="p-2 cursor-pointer hover:bg-backgroundClr hover:text-textClr">Plan B</div>
                    <div onClick={() => handleMenuClose("Plan C")} className="p-2 cursor-pointer hover:bg-backgroundClr hover:text-textClr">Plan C</div>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-textClr">Message</label>
                  <textarea
                    placeholder="Message"
                    className="w-full py-2 px-4 mt-1 border border-borderClr/25 rounded-2xl bg-backgroundClr focus:outline-none focus:border-secondaryColor placeholder:text-textClr/25 text-textClr"
                    rows={4}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-secondaryColor text-white font-bold px-6 py-2 rounded-full hover:bg-white hover:border-1 hover:border-primaryColor hover:text-primaryColor"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ContactHero;
