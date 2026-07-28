import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, User, Phone, EnvelopeSimple, ChatText, ShieldCheck } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

declare global {
  interface Window {
    $zoho: any;
  }
}

export default function ZohoLeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // States for inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Validation errors
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

  // Dynamically load Zoho CRM WebForm Analytics script when modal opens
  useEffect(() => {
    if (isOpen) {
      if (!document.getElementById("wf_anal")) {
        const d = document;
        const s = d.createElement("script");
        s.id = "wf_anal";
        s.src = "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=45f49069dfba160c5b6f71614b24290e6710529dbc9d6c8e1cda64a79536a4459a816942691500109c93ba64fb93fa11gid88253522f975b6a6136cd8a38ac1f1a2e71cfe6e20858a7f1a13c0a61f584e46gida9668c836b7cf2b2b68d6fcc9e3a3ae21c2ea4251f05b23b8aca1295206248c1gid743178d37b7584f8da1a72a9cfe9e961b756882a6bb08072ae4935fbede5c7a6&tw=9a3e32a5a5111886aa37686573ab4f7e7b06aee389e059fa1c3b7c6977e1a06c&version=v2";
        d.head.appendChild(s);
      }
    }
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Name cannot be empty";
    
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && formRef.current) {
      // Submit the form programmatically to Zoho
      formRef.current.submit();
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
            className="absolute inset-0"
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
              <p className="text-xs text-slate-300 mt-1">
                Submit your details to sync with ex-aspirants. Zero spam. Absolute guidance.
              </p>
              
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Zoho Form Wrapper */}
            <form
              ref={formRef}
              id="webform1355990000000603023"
              action="https://crm.zoho.in/crm/WebToLeadForm"
              name="WebToLeads1355990000000603023"
              method="POST"
              onSubmit={handleSubmit}
              acceptCharset="UTF-8"
              className="p-6 space-y-4 font-sans text-slate-700"
            >
              {/* Zoho Mandatories */}
              <input type="text" style={{ display: "none" }} name="xnQsjsdp" value="1af7a40c8c7e4f83cd2612317fc36e1605eb4dce8ce73ce70790e83954093600" readOnly />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="text" style={{ display: "none" }} name="xmIwtLD" value="81357e124610702e51d19ec0f1b2b38d239e14cec94ca09865766582a1a89b326dba3a0ad619c855c4eaae90e8c349c9" readOnly />
              <input type="text" style={{ display: "none" }} name="actionType" value="TGVhZHM=" readOnly />
              <input type="text" style={{ display: "none" }} name="returnURL" value="https://cockroachias.com" readOnly />
              <input type="text" style={{ display: "none" }} id="ldeskuid" name="ldeskuid" readOnly />
              <input type="text" style={{ display: "none" }} id="LDTuvid" name="LDTuvid" readOnly />
              <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q" value="" readOnly />

              {/* Form Input fields */}
              
              {/* Name */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-semibold text-navy-950 flex items-center gap-1.5" htmlFor="Designation">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Name <span className="text-brand-red font-bold">*</span></span>
                </label>
                <input
                  type="text"
                  id="Designation"
                  name="Designation"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  maxLength={100}
                  className={`w-full bg-slate-50 border px-3.5 py-2.5 rounded-xl text-sm focus:outline-hidden text-navy-950 transition-colors font-sans ${
                    errors.name ? "border-brand-red focus:border-brand-red" : "border-slate-200 focus:border-navy-900"
                  }`}
                />
                {errors.name && <p className="text-[10px] text-brand-red font-semibold">{errors.name}</p>}
              </div>

              {/* Phone number */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-semibold text-navy-950 flex items-center gap-1.5" htmlFor="Phone">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Phone Number <span className="text-brand-red font-bold">*</span></span>
                </label>
                <input
                  type="tel"
                  id="Phone"
                  name="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter 10-digit WhatsApp number"
                  maxLength={40}
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
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  maxLength={200}
                  className={`w-full bg-slate-50 border px-3.5 py-2.5 rounded-xl text-sm focus:outline-hidden text-navy-950 transition-colors font-sans ${
                    errors.email ? "border-brand-red focus:border-brand-red" : "border-slate-200 focus:border-navy-900"
                  }`}
                />
                {errors.email && <p className="text-[10px] text-brand-red font-semibold">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1 text-left">
                <label className="text-xs font-semibold text-navy-950 flex items-center gap-1.5" htmlFor="Last_Name">
                  <ChatText className="w-3.5 h-3.5 text-slate-400" />
                  <span>Message <span className="text-brand-red font-bold">*</span></span>
                </label>
                <textarea
                  id="Last_Name"
                  name="Last Name"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your suggestions/enquiries"
                  maxLength={80}
                  rows={2}
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
                  <span>Zoho Secure Webform Connection</span>
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
                    className="px-5 py-2 text-xs font-semibold text-white bg-brand-red hover:bg-brand-red-hover rounded-lg transition-colors cursor-pointer shadow-md hover:shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
