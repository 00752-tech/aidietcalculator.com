'use client'

import React from 'react'

export default function EeatResourceLinks() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        📚 Trusted Health & Wellness Resources
      </h2>

      <div id="nutrition">...</div>
<div id="recovery">...</div>
<div id="sleep">...</div>
<div id="supplements">...</div>

          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            🥦 Nutrition & Protein Science
          </h3>
          <ul className="space-y-2 text-gray-700 text-[15px] list-disc pl-5">
            <li>
              <a
                href="https://www.healthline.com/nutrition/protein-intake-how-much"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                How Much Protein Do You Really Need? – Healthline
              </a>
            </li>
            <li>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7551460/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Protein Requirements & Active Adults – NCBI Review
              </a>
            </li>
          </ul>
        </div>

        {/* Fitness & Recovery */}
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            🏋️‍♂️ Fitness & Recovery
          </h3>
          <ul className="space-y-2 text-gray-700 text-[15px] list-disc pl-5">
            <li>
              <a
                href="https://www.acefitness.org/education-and-resources/lifestyle/blog/7437/the-importance-of-recovery-in-fitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Why Recovery Is Essential in Fitness – ACE Fitness
              </a>
            </li>
            <li>
              <a
                href="https://www.menshealth.com/fitness/a19546766/workout-recovery-tips/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Recovery Tips for Men Over 35 – Men’s Health
              </a>
            </li>
          </ul>
        </div>

        {/* Sleep & Cognitive Health */}
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            😴 Sleep & Cognitive Health
          </h3>
          <ul className="space-y-2 text-gray-700 text-[15px] list-disc pl-5">
            <li>
              <a
                href="https://www.sleepfoundation.org/how-sleep-works"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                How Sleep Works – Sleep Foundation
              </a>
            </li>
            <li>
              <a
                href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/sleep/art-20048379"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Sleep & Aging – Mayo Clinic
              </a>
            </li>
          </ul>
        </div>

        {/* Supplement Research */}
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            🧬 Supplement & Longevity Science
          </h3>
          <ul className="space-y-2 text-gray-700 text-[15px] list-disc pl-5">
            <li>
              <a
                href="https://examine.com/supplements/protein/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Examine.com: Scientific Protein Guide
              </a>
            </li>
            <li>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6520897/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Collagen & Aging Effects – NCBI Clinical Review
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
