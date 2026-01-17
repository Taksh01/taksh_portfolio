"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 bg-white overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Featured Work
          </h2>
          <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto">
            Real-world application I've built and shipped
          </p>
        </motion.div>

        {/* Single Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-neutral-50 border-2 border-black p-10 md:p-12 transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                GTS Mobile Application
              </h3>
              <p className="text-sm md:text-base text-black/60 uppercase tracking-wider">
                Gas Transportation System
              </p>
            </div>
            <div className="px-4 py-2 bg-black text-white text-xs uppercase tracking-wider font-semibold">
              Production
            </div>
          </div>

          <p className="text-base md:text-lg text-black/80 leading-relaxed mb-8">
            A production-grade React Native application used to manage gas
            transportation operations. Responsible for building and maintaining
            the mobile interface.
          </p>

          <div className="mb-8">
            <h4 className="text-sm uppercase tracking-wider font-bold text-black mb-4">
              Key Contributions
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <span className="text-black mr-2">▪</span>
                <span className="text-black/70">
                  Built role-based & permission-based UI for different user
                  types
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">▪</span>
                <span className="text-black/70">
                  Implemented complex multi-step workflows
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">▪</span>
                <span className="text-black/70">
                  Integrated REST APIs with error handling
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">▪</span>
                <span className="text-black/70">
                  Managed real-time state updates
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">▪</span>
                <span className="text-black/70">
                  Integrated Firebase Cloud Messaging (FCM) for real-time
                  notifications.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "React Native",
              "Expo (SDK 54)",
              "JavaScript",
              "React Query",
              "Push Notifications",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-black text-black text-sm font-medium uppercase tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm text-black/50 italic">
            Screenshots available on request (confidential project)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
