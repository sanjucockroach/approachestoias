import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Trash, Sparkle, Plus, Image, Code, TextT, FileText, CheckCircle, Warning } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  getEditorials,
  saveEditorial,
  deleteEditorial,
  getBlogs,
  saveBlog,
  deleteBlog,
  EditorialItem,
  BlogItem
} from "../data/resourcesDb";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"editorials" | "blogs">("editorials");
  const [editorials, setEditorials] = useState<EditorialItem[]>([]);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  
  // Feedback notification state
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Form states - Editorials
  const [editTitle, setEditTitle] = useState("");
  const [editDate, setEditDate] = useState(new Date().toISOString().split("T")[0]);
  const [editSyllabus, setEditSyllabus] = useState("GS Paper 2 (Polity & Governance)");
  const [editSource, setEditSource] = useState("The Hindu");
  const [editSummary, setEditSummary] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editMode, setEditMode] = useState<"text" | "html">("html");
  const [editTakeaways, setEditTakeaways] = useState<string[]>([""]);
  const [editImage, setEditImage] = useState<string>("");

  // Form states - Blogs
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDate, setBlogDate] = useState(new Date().toISOString().split("T")[0]);
  const [blogCategory, setBlogCategory] = useState("Strategy");
  const [blogAuthor, setBlogAuthor] = useState("Companion Team");
  const [blogReadTime, setBlogReadTime] = useState("5 Min Read");
  const [blogSummary, setBlogSummary] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogMode, setBlogMode] = useState<"text" | "html">("html");
  const [blogImage, setBlogImage] = useState<string>("");

  const contentAreaRef = useRef<HTMLTextAreaElement>(null);
  const blogContentAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditorials(getEditorials());
    setBlogs(getBlogs());
  }, []);

  const showFeedback = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Convert image to Base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "editorial" | "blog") => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        showFeedback("error", "Image file must be less than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          if (type === "editorial") {
            setEditImage(reader.result);
          } else {
            setBlogImage(reader.result);
          }
          showFeedback("success", "Image uploaded and converted successfully!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // HTML Helper inserts
  const insertHTMLTag = (tag: string, type: "editorial" | "blog") => {
    const ref = type === "editorial" ? contentAreaRef : blogContentAreaRef;
    const value = type === "editorial" ? editContent : blogContent;
    const setValue = type === "editorial" ? setEditContent : setBlogContent;

    if (ref.current) {
      const start = ref.current.selectionStart;
      const end = ref.current.selectionEnd;
      const text = ref.current.value;
      const selected = text.substring(start, end);
      let replacement = "";

      if (tag === "b") replacement = `<strong>${selected || "bold text"}</strong>`;
      else if (tag === "i") replacement = `<em>${selected || "italic text"}</em>`;
      else if (tag === "p") replacement = `<p>${selected || "Paragraph content."}</p>`;
      else if (tag === "h4") replacement = `<h4>${selected || "Subheading"}</h4>`;
      else if (tag === "ul") replacement = `<ul>\n  <li>${selected || "List item"}</li>\n</ul>`;
      else if (tag === "li") replacement = `<li>${selected || "List item"}</li>`;

      const newContent = text.substring(0, start) + replacement + text.substring(end);
      setValue(newContent);
      
      // Reset focus & cursor selection position after state update
      setTimeout(() => {
        if (ref.current) {
          ref.current.focus();
          const newCursorPos = start + replacement.length;
          ref.current.setSelectionRange(newCursorPos, newCursorPos);
        }
      }, 50);
    }
  };

  // Submit Editorial
  const handleEditorialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTitle || !editSummary || !editContent) {
      showFeedback("error", "Please fill in Title, Summary, and Content.");
      return;
    }

    const contentBody = editMode === "text" 
      ? editContent.split("\n\n").map(p => `<p>${p.replace(/\n/g, "<br />")}</p>`).join("")
      : editContent;

    const formattedTakeaways = editTakeaways.filter(t => t.trim() !== "");

    const newEd = saveEditorial({
      title: editTitle,
      date: editDate,
      syllabusTag: editSyllabus,
      source: editSource,
      summary: editSummary,
      content: contentBody,
      takeaways: formattedTakeaways.length > 0 ? formattedTakeaways : ["Analyze key syllabus linkages."],
      image: editImage || undefined
    });

    setEditorials(newEd);
    showFeedback("success", "Editorial analysis published successfully!");
    
    // Reset Form
    setEditTitle("");
    setEditSummary("");
    setEditContent("");
    setEditTakeaways([""]);
    setEditImage("");
  };

  // Submit Blog
  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogTitle || !blogSummary || !blogContent) {
      showFeedback("error", "Please fill in Title, Summary, and Content.");
      return;
    }

    const contentBody = blogMode === "text"
      ? blogContent.split("\n\n").map(p => `<p>${p.replace(/\n/g, "<br />")}</p>`).join("")
      : blogContent;

    const newBlogs = saveBlog({
      title: blogTitle,
      date: blogDate,
      category: blogCategory,
      author: blogAuthor,
      readTime: blogReadTime,
      summary: blogSummary,
      content: contentBody,
      image: blogImage || undefined
    });

    setBlogs(newBlogs);
    showFeedback("success", "Blog post published successfully!");

    // Reset Form
    setBlogTitle("");
    setBlogSummary("");
    setBlogContent("");
    setBlogImage("");
  };

  // Takeaway handlers
  const handleTakeawayChange = (index: number, val: string) => {
    const copy = [...editTakeaways];
    copy[index] = val;
    setEditTakeaways(copy);
  };

  const addTakeawayField = () => {
    setEditTakeaways([...editTakeaways, ""]);
  };

  const removeTakeawayField = (index: number) => {
    if (editTakeaways.length > 1) {
      const copy = [...editTakeaways];
      copy.splice(index, 1);
      setEditTakeaways(copy);
    }
  };

  // Delete Handlers
  const handleDeleteEditorial = (id: string) => {
    if (confirm("Are you sure you want to delete this editorial?")) {
      const updated = deleteEditorial(id);
      setEditorials(updated);
      showFeedback("success", "Editorial deleted successfully.");
    }
  };

  const handleDeleteBlog = (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      const updated = deleteBlog(id);
      setBlogs(updated);
      showFeedback("success", "Blog post deleted successfully.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 relative" id="admin-workspace-root">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 right-6 z-50 p-4 rounded-xl shadow-lg border flex items-center gap-3 ${
              notification.type === "success" 
                ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
                : "bg-rose-50 border-rose-200 text-rose-800"
            }`}
          >
            {notification.type === "success" ? <CheckCircle className="w-5 h-5 text-emerald-600" /> : <Warning className="w-5 h-5 text-rose-600" />}
            <span className="text-xs font-bold font-mono">{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-2">
          <button
            onClick={() => navigate("/resources")}
            className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-500 hover:text-brand-red uppercase tracking-wider transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Exit Admin Panel</span>
          </button>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-red-light px-2.5 py-0.5 rounded-md border border-brand-red/10 uppercase">
              Control Center
            </span>
            <h1 className="text-2xl font-display font-bold text-navy-950">
              Companion Resource Console
            </h1>
          </div>
        </div>
        <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-center font-mono">
          <button
            onClick={() => setActiveTab("editorials")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition duration-200 ${
              activeTab === "editorials" 
                ? "bg-navy-950 text-white shadow-xs" 
                : "text-slate-600 hover:text-navy-950"
            }`}
          >
            Daily Editorials
          </button>
          <button
            onClick={() => setActiveTab("blogs")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition duration-200 ${
              activeTab === "blogs" 
                ? "bg-navy-950 text-white shadow-xs" 
                : "text-slate-600 hover:text-navy-950"
            }`}
          >
            Blogs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left 2 Cols: Form Panel */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs blueprint-grid">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-base font-display font-bold text-navy-950 flex items-center gap-2">
              <Plus className="w-5 h-5 text-brand-red" />
              Publish New {activeTab === "editorials" ? "Editorial Analysis" : "Blog Post"}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Add premium, value-added study metrics to keep resources fresh. Supports markdown/HTML.
            </p>
          </div>

          {activeTab === "editorials" ? (
            /* Editorial Form */
            <form onSubmit={handleEditorialSubmit} className="space-y-6 text-xs text-navy-950">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Editorial Title *</label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="e.g. Sedition Law vs Liberty"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Syllabus Tag *</label>
                  <select
                    value={editSyllabus}
                    onChange={(e) => setEditSyllabus(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold"
                  >
                    <option>GS Paper 1 (Art & Culture / History)</option>
                    <option>GS Paper 1 (Geography / Society)</option>
                    <option>GS Paper 2 (Polity & Constitution)</option>
                    <option>GS Paper 2 (Governance & Social Justice)</option>
                    <option>GS Paper 2 (International Relations)</option>
                    <option>GS Paper 3 (Economy & Agriculture)</option>
                    <option>GS Paper 3 (Science & Tech / Environment)</option>
                    <option>GS Paper 3 (Internal Security / Disaster Mgmt)</option>
                    <option>GS Paper 4 (Ethics, Integrity & Aptitude)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Publish Date *</label>
                  <input
                    type="date"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Source Outlet *</label>
                  <input
                    type="text"
                    value={editSource}
                    onChange={(e) => setEditSource(e.target.value)}
                    placeholder="e.g. The Hindu, Indian Express, LiveMint"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Brief Summary *</label>
                <textarea
                  value={editSummary}
                  onChange={(e) => setEditSummary(e.target.value)}
                  placeholder="Summarize the core debate/focus in 2 lines..."
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold resize-y"
                />
              </div>

              {/* Editorial Image upload */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col md:flex-row items-center gap-4">
                <div className="space-y-1 flex-1">
                  <span className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Optional Header Image</span>
                  <p className="text-[10px] text-slate-500">Max size 2MB. Converted to base64 for instant client persistence.</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "editorial")}
                    className="text-[11px] font-mono text-slate-600 file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[10px] file:font-bold file:bg-navy-950 file:text-white hover:file:bg-black file:cursor-pointer mt-2"
                  />
                </div>
                {editImage && (
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                    <img src={editImage} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setEditImage("")}
                      className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white rounded-full p-0.5 text-[8px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Main Content Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider">Editorial Content Body *</label>
                  <div className="flex items-center gap-3 text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setEditMode("html")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md border ${
                        editMode === "html" ? "bg-navy-950 text-white border-navy-950" : "bg-white text-slate-500 border-slate-200"
                      }`}
                    >
                      <Code className="w-3.5 h-3.5" /> HTML Mode
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditMode("text")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md border ${
                        editMode === "text" ? "bg-navy-950 text-white border-navy-950" : "bg-white text-slate-500 border-slate-200"
                      }`}
                    >
                      <TextT className="w-3.5 h-3.5" /> Text Mode
                    </button>
                  </div>
                </div>

                {/* HTML Helper toolbar */}
                {editMode === "html" && (
                  <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest px-2">INSERT TAGS:</span>
                    <button type="button" onClick={() => insertHTMLTag("p", "editorial")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono">Paragraph &lt;p&gt;</button>
                    <button type="button" onClick={() => insertHTMLTag("h4", "editorial")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono">Heading &lt;h4&gt;</button>
                    <button type="button" onClick={() => insertHTMLTag("b", "editorial")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono font-bold">Bold &lt;b&gt;</button>
                    <button type="button" onClick={() => insertHTMLTag("i", "editorial")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono italic">Italic &lt;i&gt;</button>
                    <button type="button" onClick={() => insertHTMLTag("ul", "editorial")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono">List &lt;ul&gt;</button>
                    <button type="button" onClick={() => insertHTMLTag("li", "editorial")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono">Item &lt;li&gt;</button>
                  </div>
                )}

                <textarea
                  ref={contentAreaRef}
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  placeholder={editMode === "html" ? "<h4>Introduce core issue...</h4>\n<p>Body analysis with stats...</p>" : "Separate paragraphs with double spaces..."}
                  rows={8}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-navy-300 font-mono text-[11px] leading-relaxed resize-y"
                />
              </div>

              {/* Takeaways Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider">Aspirant Takeaway Bullets *</label>
                  <button
                    type="button"
                    onClick={addTakeawayField}
                    className="flex items-center gap-1 text-[10px] font-mono text-brand-red font-bold hover:underline"
                  >
                    + Add Takeaway
                  </button>
                </div>
                <div className="space-y-2">
                  {editTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <span className="font-mono text-slate-400 text-[10px] w-6 shrink-0">{idx + 1}.</span>
                      <input
                        type="text"
                        value={takeaway}
                        onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                        placeholder={`Takeaway bullet ${idx + 1}...`}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-navy-300 font-semibold"
                      />
                      {editTakeaways.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeTakeawayField(idx)}
                          className="text-slate-400 hover:text-brand-red shrink-0"
                        >
                          <Trash className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md font-mono"
              >
                <Sparkle className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} /> Publish Daily Editorial
              </button>
            </form>
          ) : (
            /* Blog Form */
            <form onSubmit={handleBlogSubmit} className="space-y-6 text-xs text-navy-950">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Blog Post Title *</label>
                  <input
                    type="text"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    placeholder="e.g. How to stay motivated"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Category *</label>
                  <select
                    value={blogCategory}
                    onChange={(e) => setBlogCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold"
                  >
                    <option>Mental Prep</option>
                    <option>Strategy</option>
                    <option>UPSC Journey</option>
                    <option>Resource Lists</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Publish Date *</label>
                  <input
                    type="date"
                    value={blogDate}
                    onChange={(e) => setBlogDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Author Name *</label>
                  <input
                    type="text"
                    value={blogAuthor}
                    onChange={(e) => setBlogAuthor(e.target.value)}
                    placeholder="e.g. Companion Team, Ranker X"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Reading Time *</label>
                  <input
                    type="text"
                    value={blogReadTime}
                    onChange={(e) => setBlogReadTime(e.target.value)}
                    placeholder="e.g. 5 Min Read"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Short Abstract / Summary *</label>
                <textarea
                  value={blogSummary}
                  onChange={(e) => setBlogSummary(e.target.value)}
                  placeholder="Summarize the blog focus in 2 lines..."
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-navy-300 font-semibold resize-y"
                />
              </div>

              {/* Blog Image upload */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col md:flex-row items-center gap-4">
                <div className="space-y-1 flex-1">
                  <span className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider block">Optional Header Image</span>
                  <p className="text-[10px] text-slate-500">Max size 2MB. Converted to base64 for instant client persistence.</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "blog")}
                    className="text-[11px] font-mono text-slate-600 file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[10px] file:font-bold file:bg-navy-950 file:text-white hover:file:bg-black file:cursor-pointer mt-2"
                  />
                </div>
                {blogImage && (
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                    <img src={blogImage} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setBlogImage("")}
                      className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white rounded-full p-0.5 text-[8px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Main Content Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-mono font-bold text-[10px] text-slate-400 uppercase tracking-wider">Blog Content Body *</label>
                  <div className="flex items-center gap-3 text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setBlogMode("html")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md border ${
                        blogMode === "html" ? "bg-navy-950 text-white border-navy-950" : "bg-white text-slate-500 border-slate-200"
                      }`}
                    >
                      <Code className="w-3.5 h-3.5" /> HTML Mode
                    </button>
                    <button
                      type="button"
                      onClick={() => setBlogMode("text")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md border ${
                        blogMode === "text" ? "bg-navy-950 text-white border-navy-950" : "bg-white text-slate-500 border-slate-200"
                      }`}
                    >
                      <TextT className="w-3.5 h-3.5" /> Text Mode
                    </button>
                  </div>
                </div>

                {/* HTML Helper toolbar */}
                {blogMode === "html" && (
                  <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest px-2">INSERT TAGS:</span>
                    <button type="button" onClick={() => insertHTMLTag("p", "blog")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono">Paragraph &lt;p&gt;</button>
                    <button type="button" onClick={() => insertHTMLTag("h4", "blog")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono">Heading &lt;h4&gt;</button>
                    <button type="button" onClick={() => insertHTMLTag("b", "blog")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono font-bold">Bold &lt;b&gt;</button>
                    <button type="button" onClick={() => insertHTMLTag("i", "blog")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono italic">Italic &lt;i&gt;</button>
                    <button type="button" onClick={() => insertHTMLTag("ul", "blog")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono">List &lt;ul&gt;</button>
                    <button type="button" onClick={() => insertHTMLTag("li", "blog")} className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 rounded text-[10px] font-mono">Item &lt;li&gt;</button>
                  </div>
                )}

                <textarea
                  ref={blogContentAreaRef}
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                  placeholder={blogMode === "html" ? "<h4>Intro...</h4>\n<p>Motivation section...</p>" : "Separate paragraphs with double spaces..."}
                  rows={8}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-navy-300 font-mono text-[11px] leading-relaxed resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md font-mono"
              >
                <Sparkle className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} /> Publish Blog Post
              </button>
            </form>
          )}
        </div>

        {/* Right 1 Col: Live List/Delete Panel */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col gap-4 font-mono max-h-[750px] overflow-y-auto">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-navy-900" />
            <div>
              <h3 className="text-xs font-bold text-navy-950 uppercase tracking-widest block leading-none">
                Active Repository
              </h3>
              <span className="text-[10px] text-slate-400 mt-1 block">
                {activeTab === "editorials" ? `${editorials.length} Editorials` : `${blogs.length} Blogs`} listed in DB
              </span>
            </div>
          </div>

          <div className="space-y-3.5">
            {activeTab === "editorials" ? (
              editorials.map((ed) => (
                <div key={ed.id} className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 flex justify-between items-start gap-3">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-brand-red uppercase">{ed.syllabusTag}</span>
                    <h4 className="text-[11px] font-bold text-navy-950 font-display line-clamp-2 leading-snug">{ed.title}</h4>
                    <div className="flex gap-2 text-[9px] text-slate-400">
                      <span>{ed.date}</span>
                      <span>•</span>
                      <span>{ed.source}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteEditorial(ed.id)}
                    className="text-slate-400 hover:text-brand-red transition-colors p-1"
                    title="Delete editorial"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              blogs.map((b) => (
                <div key={b.id} className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 flex justify-between items-start gap-3">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-brand-red uppercase">{b.category}</span>
                    <h4 className="text-[11px] font-bold text-navy-950 font-display line-clamp-2 leading-snug">{b.title}</h4>
                    <div className="flex gap-2 text-[9px] text-slate-400">
                      <span>{b.date}</span>
                      <span>•</span>
                      <span>{b.readTime}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteBlog(b.id)}
                    className="text-slate-400 hover:text-brand-red transition-colors p-1"
                    title="Delete blog post"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
