'use client'

import React from 'react';

const messages = [
  "Why 9 out of 10 people fail to hit their weight goals...",
  "Metabolism isn't a math problem, it's a signaling problem.",
  "Stop fighting your biology. Start fueling it.",
  "The 7-second morning ritual that changes everything.",
  "Your favorite jeans are waiting. Let's wake that metabolism up.",
  "Why 'eating less' is the fastest way to slow down fat loss."
];

export function ToolUsageTicker() {
  return (
    <div className="w-full bg-slate-900 text-white py-3 overflow-hidden whitespace-nowrap shadow-md mb-8">
      <div className="flex animate-marquee">
        {[...messages, ...messages].map((msg, idx) => (
          <div key={idx} className="flex items-center mx-8 text-sm md:text-base font-medium">
            <span className="text-orange-500 mr-3 text-lg">⚡</span>
            {msg}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        /* Pause on hover to allow reading */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
