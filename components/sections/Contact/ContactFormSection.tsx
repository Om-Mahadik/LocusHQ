"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; 
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsPending(false);
    setIsSubmitted(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // Removed large horizontal padding (px-0 on desktop) to allow grid to control spacing
    <section className="relative bg-black py-12 md:py-0 overflow-hidden antialiased font-sans">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-100/50 via-transparent to-transparent pointer-events-none" />

      {/* Changed max-w-4xl to max-w-none to remove the "centered box" constraint */}
      <div className="w-full max-w-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // Reduced p-8 to fit better in a split-screen layout
          className="relative group p-8 md:p-12 rounded-[48px] bg-[#FDFDFD] border border-black/[0.04] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                variants={containerVariants}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                onSubmit={handleSubmit}
                className="relative z-10 space-y-10"
              >
                <motion.div variants={itemVariants} className="space-y-2">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black">
                    Let&apos;s talk.
                  </h2>
                  <p className="text-zinc-400 text-[14px] md:text-16px font-medium leading-relaxed max-w-sm">
                    Have a vision? We have the engineering. Send a message to start the journey.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  <motion.div variants={itemVariants} className="group/input relative space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 transition-colors group-focus-within/input:text-black">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-b-2 border-zinc-100 py-3 text-black font-medium transition-all focus:outline-none focus:border-black placeholder:text-zinc-200"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="group/input relative space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 transition-colors group-focus-within/input:text-black">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="hello@company.com"
                      className="w-full bg-transparent border-b-2 border-zinc-100 py-3 text-black font-medium transition-all focus:outline-none focus:border-black placeholder:text-zinc-200"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="group/input relative space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 transition-colors group-focus-within/input:text-black">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Briefly describe your goals..."
                    className="w-full bg-transparent border-b-2 border-zinc-100 py-3 text-black font-medium transition-all focus:outline-none focus:border-black placeholder:text-zinc-200 resize-none"
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isPending}
                  type="submit"
                  className="group relative flex items-center justify-center gap-3 bg-black text-white w-full md:w-auto px-12 py-5 rounded-2xl font-bold transition-all hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin text-zinc-400" />
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 py-24 flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="h-24 w-24 rounded-[32px] bg-black flex items-center justify-center mb-8 shadow-2xl shadow-zinc-200"
                >
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-black mb-3">Message Received</h3>
                <p className="text-zinc-500 max-w-[280px] leading-relaxed font-medium">
                  We&apos;ve engineered your inquiry into our system. Expect a response within 24 hours.
                </p>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsSubmitted(false)}
                  className="mt-12 text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-300 hover:text-black transition-colors"
                >
                  Send Another
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}