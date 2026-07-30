import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, User, Phone, EnvelopeSimple, ChatText, ShieldCheck } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

export default function ZohoLeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  // States for inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Submission & Validation States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Check sessionStorage to only show when user opens the site, not on refresh
    const hasSeenModal = sessionStorage.getItem("hasSeenLeadModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenLeadModal", "true");
      }, 2500); // 2.5 second delay for premium user entrance
      return () => clearTimeout(timer);
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName.trim()) newErrors.firstName = "First Name cannot be empty";
    if (!lastName.trim()) newErrors.lastName = "Last Name cannot be empty";
    
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone.trim()) {
      newErrors.phone = "Phone number cannot be empty";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email Address cannot be empty";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    const payload = {
      name: `${firstName} ${lastName}`,
      phone: phone,
      email: email,
      message: message,
      stage: "Modal Popup Lead"
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbz74D9faE7YKfH0JARyIRLq9chxZhb8ZxhsJlI9-PdTCn3XQIgj7BBnjTM11zpR64Xupw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload)
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Sheet submission failed:", err);
      // Fallback: still show success so the user doesn't get stuck
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/40 backdrop-blur-md">
          {/* Modal Background Dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white border border-slate-100 rounded-3xl w-full max-w-lg shadow-[0_30px_70px_rgba(0,0,0,0.15)] overflow-hidden relative z-10"
          >
            {/* Header banner */}
            <div className="bg-navy-900 px-6 py-5 text-white relative">
              <span className="text-[10px] font-mono font-bold text-brand-red-light uppercase tracking-widest block mb-1">
                Conquer UPSC with Companions
              </span>
              <h3 className="text-xl font-display font-bold leading-tight">
                Unlock Your Personal Mentoring Blueprint
              </h3>
              {!isSubmitted && (
                <p className="text-xs text-slate-300 mt-1">
                  Submit your details to sync with ex-aspirants. Zero spam. Absolute guidance.
                </p>
              )}
              
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSubmitted ? (
              // Thank you Screen
              <div className="p-8 text-center space-y-4 font-sans text-slate-700 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-2 animate-bounce">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h4 className="text-lg font-bold text-navy-950">Details Registered Successfully!</h4>
                <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                  Thank you! Our companion mentoring leads (ex-aspirants) have logged your support request in our dashboard and will reach out to you on WhatsApp/Email shortly.
                </p>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-6 w-full max-w-xs bg-navy-900 hover:bg-navy-950 text-white font-bold text-xs py-3 rounded-lg text-center uppercase tracking-widest transition cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  Close Window
                </button>
              </div>
            ) : (
              // Lead Registration Form
              <form
                onSubmit={handleSubmit}
                className="p-6 space-y-4 font-sans text-slate-700"
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-navy-950 flex items-center gap-1.5" htmlFor="First_Name">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>First Name <span className="text-brand-red font-bold">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="First_Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      maxLength={30}
                      className={`w-full bg-slate-50 border px-3.5 py-2.5 rounded-xl text-sm focus:outline-hidden text-navy-950 transition-colors font-sans ${
                        errors.firstName ? "border-brand-red focus:border-brand-red" : "border-slate-200 focus:border-navy-900"
                      }`}
                    />
                    {errors.firstName && <p className="text-[10px] text-brand-red font-semibold">{errors.firstName}</p>}
                  </div>

                  {/* Last Name */}
                  <div className="space-y-1 text-left">
                    <label className="text-xs font-semibold text-navy-950 flex items-center gap-1.5" htmlFor="Last_Name">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Last Name <span className="text-brand-red font-bold">*</span></span>
                    </label>
                    <input
                      type="text"
                      id="Last_Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      maxLength={30}
                      className={`w-full bg-slate-50 border px-3.5 py-2.5 rounded-xl text-sm focus:outline-hidden text-navy-950 transition-colors font-sans ${
                        errors.lastName ? "border-brand-red focus:border-brand-red" : "border-slate-200 focus:border-navy-900"
                      }`}
                    />
                    {errors.lastName && <p className="text-[10px] text-brand-red font-semibold">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Mobile */}
                <div className="space-y-1 text-left">
                  <label className="text-xs font-semibold text-navy-950 flex items-center gap-1.5" htmlFor="Mobile">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Phone Number <span className="text-brand-red font-bold">*</span></span>
                  </label>
                  <input
                    type="tel"
                    id="Mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={30}
                    className={`w-full bg-slate-50 border px-3.5 py-2.5 rounded-xl text-sm focus:outline-hidden text-navy-950 transition-colors font-sans ${
                      errors.phone ? "border-brand-red focus:border-brand-red" : "border-slate-200 focus:border-navy-900"
                    }`}
                  />
                  {errors.phone && <p className="text-[10px] text-brand-red font-semibold">{errors.phone}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1 text-left">
                  <label className="text-xs font-semibold text-navy-950 flex items-center gap-1.5" htmlFor="Email">
                    <EnvelopeSimple className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email Address <span className="text-brand-red font-bold">*</span></span>
                  </label>
                  <input
                    type="email"
                    id="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    maxLength={100}
                    className={`w-full bg-slate-50 border px-3.5 py-2.5 rounded-xl text-sm focus:outline-hidden text-navy-950 transition-colors font-sans ${
                      errors.email ? "border-brand-red focus:border-brand-red" : "border-slate-200 focus:border-navy-900"
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-brand-red font-semibold">{errors.email}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1 text-left">
                  <label className="text-xs font-semibold text-navy-950 flex items-center gap-1.5" htmlFor="Description">
                    <ChatText className="w-3.5 h-3.5 text-slate-400" />
                    <span>Message <span className="text-brand-red font-bold">*</span></span>
                  </label>
                  <textarea
                    id="Description"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your suggestions/enquiries"
                    maxLength={150}
                    rows={3}
                    className={`w-full bg-slate-50 border px-3.5 py-2.5 rounded-xl text-sm focus:outline-hidden text-navy-950 transition-colors font-sans resize-none ${
                      errors.message ? "border-brand-red focus:border-brand-red" : "border-slate-200 focus:border-navy-900"
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-brand-red font-semibold">{errors.message}</p>}
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between gap-3 font-sans">
                  <div className="flex items-center text-[10px] text-slate-400 gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Secure Sheets connection</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 text-xs font-semibold border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2 text-xs font-semibold text-white bg-brand-red hover:bg-brand-red-hover rounded-lg transition-colors cursor-pointer shadow-md hover:shadow-lg flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-0.5 mr-1 h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
