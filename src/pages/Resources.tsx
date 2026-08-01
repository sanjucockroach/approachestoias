import React, { useState, useEffect, useMemo } from "react";
import { Compass, Brain, ArrowRight, ArrowLeft, Sparkle, TrendUp, ShieldCheck, ListNumbers, Scales, Trophy, BookOpen, Clock, FileText, MagnifyingGlass, Tag } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { getEditorials, getBlogs, EditorialItem, BlogItem } from "../data/resourcesDb";

interface ResourcesProps {
  activePhase?: "none" | "prelims" | "mains" | "integrity" | "editorials" | "blog";
  setActivePhase?: (phase: "none" | "prelims" | "mains" | "integrity" | "editorials" | "blog") => void;
}

export default function Resources({ activePhase: propActivePhase, setActivePhase: propSetActivePhase }: ResourcesProps) {
  const navigate = useNavigate();
  const [localActivePhase, setLocalActivePhase] = useState<"none" | "prelims" | "mains" | "integrity" | "editorials" | "blog">("none");
  const activePhase = propSetActivePhase && propActivePhase !== undefined ? propActivePhase : localActivePhase;
  const setActivePhase = propSetActivePhase || setLocalActivePhase;

  // Stateful resources data hooks
  const [editorials, setEditorials] = useState<EditorialItem[]>([]);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [selectedEdId, setSelectedEdId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [edSearch, setEdSearch] = useState("");

  useEffect(() => {
    const eds = getEditorials();
    setEditorials(eds);
    if (eds.length > 0 && !selectedEdId) {
      setSelectedEdId(eds[0].id);
    }
    setBlogs(getBlogs());
  }, [activePhase]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, transform: "translateY(15px)" },
    visible: { opacity: 1, transform: "translateY(0px)", transition: { type: "spring", stiffness: 110, damping: 14 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" 
      id="resources-root"
    >
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-brand-red tracking-widest uppercase bg-brand-red-light px-3.5 py-1 rounded-full border border-brand-red/10">
          Approaches to IAS Repository
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-navy-950">
          Explore the Unexplored
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
          We do not sell generic PDF books or copy-pasted compilations. We engineer interactive cognitive instruments, syllabus mapping engines, and deep question diagnostics to build your administrative persistence.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {activePhase === "none" ? (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="border-b border-slate-200 pb-3 text-center sm:text-left">
              <h2 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest">
                System Workspaces
              </h2>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Card 1: Prelims Command System */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                onClick={() => setActivePhase("prelims")}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300 cursor-pointer"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <Compass className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Phase 1 Workspace</span>
                      <h3 className="text-lg font-display font-bold text-navy-950">
                        Prelims Command System
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Access syllabus mapping engines, Article diagnostics, and granular logical MCQ traps tracking databases.
                      </p>
                    </div>
                  </div>
                  <button className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-xs">
                    <span>Enter Prelims Space</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Card 2: Mains Blueprint Engine */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                onClick={() => setActivePhase("mains")}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300 cursor-pointer"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Phase 2 Workspace</span>
                      <h3 className="text-lg font-display font-bold text-navy-950">
                        Mains Blueprint Engine
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Review subjective answer blueprints, recurrent GS syllabus weightage maps, and step-by-step diagnostic workflows.
                      </p>
                    </div>
                  </div>
                  <button className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-xs">
                    <span>Enter Mains Space</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Card 3: Administrative Integrity Workspace */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                onClick={() => setActivePhase("integrity")}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300 cursor-pointer"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Phase 3 Workspace</span>
                      <h3 className="text-lg font-display font-bold text-navy-950">
                        Administrative Integrity Workspace
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Deploy case studies of civil servant reforms, administrative innovations, and values-aligned GS4 essay models.
                      </p>
                    </div>
                  </div>
                  <button className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-xs">
                    <span>Enter Integrity Space</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Card 4: Daily Editorial Analysis */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                onClick={() => setActivePhase("editorials")}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300 cursor-pointer"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <FileText className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">GS Syllabus Linkages</span>
                      <h3 className="text-lg font-display font-bold text-navy-950">
                        Daily Editorial Analysis
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Stay ahead with professional, syllabus-mapped analysis of daily newspaper editorials. Cite legal cases, stats, and structures.
                      </p>
                    </div>
                  </div>
                  <button className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-xs">
                    <span>Enter Editorials</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Card 5: Blogs & Motivation */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                onClick={() => setActivePhase("blog")}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300 cursor-pointer"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Companion Chronicles</span>
                      <h3 className="text-lg font-display font-bold text-navy-950">
                        Companion Blogs
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Read strategic advice, mental resilience blueprints, and honest experience logs from ex-aspirants who survived the UPSC grind.
                      </p>
                    </div>
                  </div>
                  <button className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-xs">
                    <span>Enter Blogs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : activePhase === "prelims" ? (
          <motion.div
            key="prelims-phase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <button
              onClick={() => setActivePhase("none")}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-red uppercase tracking-wider transition-colors cursor-pointer group mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Overview</span>
            </button>

            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-red-light px-2.5 py-1 rounded-md border border-brand-red/10 uppercase">
                Phase 1
              </span>
              <h2 className="text-base font-display font-bold text-navy-950">
                Prelims Command Systems
              </h2>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Card 1: UPSC Syllabus Metro Map */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <Compass className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Interactive Syllabus Atlas</span>
                      <h3 className="text-xl font-display font-bold text-navy-950">
                        UPSC Syllabus Metro Map
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        An interactive command centre mapping syllabus sections to microthemes, sources, exam priorities, and cognitive MCQ traps. Never read blindly again.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                      <strong>Interactive Stations:</strong> Click any syllabus junction to expand detailed microtheme analysis, structural revision checklists, and ex-aspirant guidelines instantly.
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/metro-map")}
                    className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-xs"
                  >
                    <span>Launch Syllabus Map</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Card 2: Indian Constitution Explorer */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <Scales className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Article Diagnostic Workspace</span>
                      <h3 className="text-xl font-display font-bold text-navy-950">
                        Indian Constitution Explorer
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        A multi-dimensional workspace mapping Articles to plain language meanings, landmark Supreme Court judgments, and direct UPSC syllabus priorities.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                      <strong>Three-Pane Layout:</strong> Interactive navigation tree, complete article breakdown, and landmark judicial case/UPSC question linkages.
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/constitution-explorer")}
                    className="mt-8 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-md"
                  >
                    <span>Explore Constitution</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Card 3: UPSC Prelims PYQ Analysis */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Question Diagnosis Engine</span>
                      <h3 className="text-xl font-display font-bold text-navy-950">
                        UPSC Prelims PYQ Analysis
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        A granular database covering 12 years (2014-2025) and 1,197+ questions decoded by cognitive demands, logical trap patterns, and step-by-step diagnostic workflows.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                      <strong>Pattern Analytics:</strong> Fully filterable dashboard displaying subject distributions, extreme keyword frequency stats, and cognitive demand charts.
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/pyq-analysis")}
                    className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-xs"
                  >
                    <span>Analyze Prelims Patterns</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : activePhase === "mains" ? (
          <motion.div
            key="mains-phase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <button
              onClick={() => setActivePhase("none")}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-red uppercase tracking-wider transition-colors cursor-pointer group mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Overview</span>
            </button>

            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-red-light px-2.5 py-1 rounded-md border border-brand-red/10 uppercase">
                Phase 2
              </span>
              <h2 className="text-base font-display font-bold text-navy-950">
                Mains Blueprint Engines
              </h2>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Card 4: UPSC Mains PYQ Analysis */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <TrendUp className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Subjective Weightage Tracker</span>
                      <h3 className="text-xl font-display font-bold text-navy-950">
                        UPSC Mains PYQ Analysis
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        A structured weightage grid crossing 13 years (2013-2025) of subjective questions mapped directly to official syllabus themes. Find exactly where questions strike.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                      <strong>Interactive Heatmap:</strong> Drill down by GS Papers 1, 2, 3, and 4 horizontally, filter syllabus items dynamically, and view microtheme priority distribution trends.
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/mains-pyq")}
                    className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-xs"
                  >
                    <span>Analyze Subjective Trends</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Card 5: UPSC Mains Approach Answers */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <ShieldCheck className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">High Scoring Blueprints</span>
                      <h3 className="text-xl font-display font-bold text-navy-950">
                        UPSC Mains Approach Answers
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Step-by-step expert solutions covering UPSC GS Mains questions. Analyze the structural flow, logical layout, data insertions, and high-impact conclusions.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                      <strong>Answer Structure:</strong> Inspect complete answers in an interactive sidebar panel mapped specifically to syllabus tags, microthemes, and core priorities.
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/mains-approach-answers")}
                    className="mt-8 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-md"
                  >
                    <span>Explore Approach Answers</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Card 6: UPSC Mains Theme Wise Analysis */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <ListNumbers className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Syllabus Mapping Engine</span>
                      <h3 className="text-xl font-display font-bold text-navy-950">
                        UPSC Mains Theme Wise Analysis
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Subjective questions grouped by GS Papers (GS1-GS4), subjects, topics, and microthemes. Understand the exact syllabus linkage and priority areas.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                      <strong>Interactive Grid:</strong> Drill down into microthemes, filter by year and marks, and identify recurrent trends across a decade of Mains examinations.
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/mains-theme-analysis")}
                    className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer w-full shadow-xs"
                  >
                    <span>Analyze Subjective Themes</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : activePhase === "integrity" ? (
          <motion.div
            key="integrity-phase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <button
              onClick={() => setActivePhase("none")}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-red uppercase tracking-wider transition-colors cursor-pointer group mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Overview</span>
            </button>

            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-red-light px-2.5 py-1 rounded-md border border-brand-red/10 uppercase">
                Phase 3
              </span>
              <h2 className="text-base font-display font-bold text-navy-950">
                Administrative Integrity Workspace
              </h2>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Card 7: Governance Pioneers */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Administrative Case Studies</span>
                      <h3 className="text-xl font-display font-bold text-navy-950">
                        Governance Pioneers
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        An interactive diagnostic library mapping real-world initiatives of civil servants. Analyze dynamic case studies, ethical frameworks, and public innovations for your Ethics (GS4) and Governance (GS2) answers.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/governance-pioneers")}
                    className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xs w-full"
                  >
                    <span>Launch Case Library</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Card 8: Mythology for Ethics */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-white flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <div className="w-12 h-12 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red border border-brand-red/10">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">Mythological Case Studies</span>
                      <h3 className="text-xl font-display font-bold text-navy-950">
                        Mythology for Ethics
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Explore 30 classic ethical dilemmas from the Mahabharata, Ramayana, and Puranas. Leverage quote-ready scripts and modern parallels to anchor essay arguments.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/mythology-ethics")}
                    className="mt-8 bg-[#171717] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 rounded-xl transition duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xs w-full"
                  >
                    <span>Launch Dilemma Space</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Card 9: High Handholding Companion Message */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseMove={handleMouseMove}
                className="spotlight-card shadow-xs hover:shadow-md group transition-all duration-300"
              >
                <div className="spotlight-card-inner card-blueprint p-8 bg-slate-50/50 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Companion Message</span>
                    <h4 className="text-sm font-bold text-navy-950 font-display">Resilience in Action</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      These case studies provide proof that administrative persistence is not a theoretical model. When drafting GS4 and GS2 subjective scripts, use specific details, local budgets, and actual metrics.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200/60 text-[10px] text-slate-500 mt-6 leading-relaxed">
                    <strong>CTO Note:</strong> This workspace is open-access and fully optimized for offline study checkouts.
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : activePhase === "editorials" ? (
          <motion.div
            key="editorials-phase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <button
              onClick={() => setActivePhase("none")}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-red uppercase tracking-wider transition-colors cursor-pointer group mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Overview</span>
            </button>

            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-red-light px-2.5 py-1 rounded-md border border-brand-red/10 uppercase">
                Daily Analytica
              </span>
              <h2 className="text-base font-display font-bold text-navy-950">
                Daily Editorial Analysis & GS Linkages
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Panel: Search & List */}
              <div className="lg:col-span-1 bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                    <MagnifyingGlass className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={edSearch}
                    onChange={(e) => setEdSearch(e.target.value)}
                    placeholder="Search editorials..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-navy-300 font-semibold text-navy-950"
                  />
                </div>

                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                  {editorials.filter(ed => 
                    ed.title.toLowerCase().includes(edSearch.toLowerCase()) || 
                    ed.syllabusTag.toLowerCase().includes(edSearch.toLowerCase()) ||
                    ed.summary.toLowerCase().includes(edSearch.toLowerCase())
                  ).map(ed => (
                    <div
                      key={ed.id}
                      onClick={() => setSelectedEdId(ed.id)}
                      className={`p-4 rounded-2xl border transition duration-200 cursor-pointer text-left space-y-2 ${
                        selectedEdId === ed.id 
                          ? "bg-navy-950 border-navy-950 text-white shadow-xs" 
                          : "bg-slate-50 border-slate-100 hover:border-slate-200 text-navy-950"
                      }`}
                    >
                      <div className="flex justify-between items-center gap-2">
                        <span className={`text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${
                          selectedEdId === ed.id
                            ? "bg-navy-900 border-navy-800 text-brand-red-light"
                            : "bg-brand-red-light border-brand-red/10 text-brand-red"
                        }`}>
                          {ed.syllabusTag.split(" (")[0] || ed.syllabusTag}
                        </span>
                        <span className={`text-[9px] font-mono ${selectedEdId === ed.id ? "text-slate-400" : "text-slate-500"}`}>
                          {ed.date}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold font-display leading-snug line-clamp-2">
                        {ed.title}
                      </h4>
                      <p className={`text-[10px] line-clamp-2 leading-relaxed ${selectedEdId === ed.id ? "text-slate-300" : "text-slate-500"}`}>
                        {ed.summary}
                      </p>
                    </div>
                  ))}
                  {editorials.length === 0 && (
                    <p className="text-center text-xs text-slate-500 py-6 font-mono">No editorials published yet.</p>
                  )}
                </div>
              </div>

              {/* Right Panel: Detail View */}
              <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
                {(() => {
                  const ed = editorials.find(x => x.id === selectedEdId) || editorials[0];
                  if (!ed) {
                    return (
                      <div className="p-12 text-center text-slate-400 font-mono text-xs">
                        Select an editorial to read the complete diagnostic analysis.
                      </div>
                    );
                  }
                  return (
                    <div className="flex flex-col">
                      {ed.image && (
                        <div className="h-48 w-full overflow-hidden border-b border-slate-100">
                          <img src={ed.image} alt={ed.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="p-6 sm:p-8 space-y-6 text-left">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[9px] font-mono font-bold text-brand-red bg-brand-red-light px-2.5 py-0.5 rounded-md border border-brand-red/10 uppercase">
                              {ed.syllabusTag}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" /> Published {ed.date} via {ed.source}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold font-display text-navy-950 leading-tight">
                            {ed.title}
                          </h3>
                        </div>

                        {/* Summary Quote Box */}
                        <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-navy-900 text-xs text-slate-600 leading-relaxed italic">
                          <strong>Focus:</strong> {ed.summary}
                        </div>

                        {/* Article Body */}
                        <div 
                          className="text-xs text-slate-700 leading-relaxed space-y-4 font-sans prose prose-slate max-w-none"
                          dangerouslySetInnerHTML={{ __html: ed.content }}
                        />

                        {/* Takeaways Section */}
                        {ed.takeaways && ed.takeaways.length > 0 && (
                          <div className="p-5 bg-navy-50 rounded-2xl border border-navy-100 space-y-3.5 text-left">
                            <h4 className="text-[11px] font-mono font-bold text-navy-950 uppercase tracking-widest flex items-center gap-1.5">
                              <Sparkle className="w-4 h-4 text-brand-red animate-pulse" />
                              Companion Takeaway Checklists
                            </h4>
                            <ul className="space-y-2.5">
                              {ed.takeaways.map((takeaway, tIdx) => (
                                <li key={tIdx} className="flex gap-2.5 items-start text-xs text-navy-900 leading-relaxed font-semibold">
                                  <span className="text-brand-red font-mono shrink-0">✔</span>
                                  <span>{takeaway}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="blogs-phase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <button
              onClick={() => {
                if (selectedBlogId) {
                  setSelectedBlogId(null);
                } else {
                  setActivePhase("none");
                }
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-red uppercase tracking-wider transition-colors cursor-pointer group mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>{selectedBlogId ? "Back to Blogs List" : "Back to Overview"}</span>
            </button>

            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-red-light px-2.5 py-1 rounded-md border border-brand-red/10 uppercase">
                Chronicles
              </span>
              <h2 className="text-base font-display font-bold text-navy-950">
                Companion Blogs & Aspirant Journeys
              </h2>
            </div>

            {selectedBlogId ? (
              /* Full Blog Reader Layout */
              (() => {
                const blog = blogs.find(x => x.id === selectedBlogId);
                if (!blog) return null;
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    <div className="lg:col-span-3 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
                      {blog.image && (
                        <div className="h-64 w-full overflow-hidden border-b border-slate-100">
                          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="p-6 sm:p-10 space-y-6 text-left">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[9px] font-mono font-bold text-brand-red bg-brand-red-light px-2.5 py-0.5 rounded-md border border-brand-red/10 uppercase">
                              {blog.category}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" /> {blog.readTime} • Published {blog.date}
                            </span>
                          </div>
                          <h1 className="text-2xl sm:text-3xl font-bold font-display text-navy-950 leading-tight">
                            {blog.title}
                          </h1>
                          <div className="text-[10px] font-mono text-slate-500">
                            By <span className="font-bold text-navy-950">{blog.author}</span>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-brand-red text-xs text-slate-600 leading-relaxed italic font-semibold">
                          Abstract: {blog.summary}
                        </div>

                        <div 
                          className="text-xs text-slate-700 leading-relaxed space-y-4 font-sans prose prose-slate max-w-none"
                          dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                      </div>
                    </div>

                    {/* Blog Side Support Widget */}
                    <div className="lg:col-span-1 space-y-6">
                      <div className="p-6 bg-navy-950 text-white rounded-3xl border border-navy-900 text-left space-y-4">
                        <div className="w-10 h-10 bg-brand-red-light rounded-xl flex items-center justify-center text-brand-red">
                          <Sparkle className="w-5 h-5 animate-pulse" />
                        </div>
                        <h4 className="text-sm font-bold font-display">Need Profile Mentorship?</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          UPSC prep shouldn't be a lonely journey. Chat with our Companion chatbot for customized learning approaches or drop us an email for direct team support.
                        </p>
                        <button
                          onClick={() => navigate("/contact")}
                          className="w-full py-2.5 bg-brand-red hover:bg-brand-red-hover text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-xl transition duration-150 cursor-pointer text-center block shadow-md"
                        >
                          Contact Companion Line
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()
            ) : (
              /* Blog Masonry Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map(blog => (
                  <motion.div
                    key={blog.id}
                    onClick={() => setSelectedBlogId(blog.id)}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between cursor-pointer text-left h-full"
                  >
                    <div>
                      {blog.image ? (
                        <div className="h-44 w-full overflow-hidden border-b border-slate-100">
                          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="h-3 bg-brand-red w-full"></div>
                      )}
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[9px] font-mono font-bold text-brand-red bg-brand-red-light px-2.5 py-0.5 rounded-md border border-brand-red/10 uppercase">
                            {blog.category}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {blog.readTime}
                          </span>
                        </div>
                        <h3 className="text-base font-bold font-display text-navy-950 leading-snug line-clamp-2 hover:text-brand-red transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                          {blog.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-slate-50 mt-4 flex items-center justify-between text-[10px] font-mono">
                      <div className="text-slate-500">
                        By <span className="font-bold text-navy-950">{blog.author}</span>
                      </div>
                      <div className="text-slate-400">
                        {blog.date}
                      </div>
                    </div>
                  </motion.div>
                ))}
                {blogs.length === 0 && (
                  <div className="col-span-full py-12 text-center text-xs text-slate-400 font-mono">No blogs published yet.</div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Promising Companion Banner */}
      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/50 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="p-3 bg-brand-red-light text-brand-red rounded-full shrink-0 border border-brand-red/10">
          <Sparkle className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-navy-950">Approaches to IAS Support Integrity</h4>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            All primary mapping tools and analytical platforms remain completely open-access and free. No paywalls, no popups, and no advertising. We stand with you as companions through the journey.
          </p>
        </div>
      </div>

    </motion.div>
  );
}
