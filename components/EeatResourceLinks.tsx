'use client'

import React from 'react'
import ResourceCard from '@/components/ResourceCard'

export default function EeatResourceLinks() {
  const resources = [
    {
      category: '🥦 Nutrition',
      links: [
        {
          title: 'You’ve Probably Hit Your Protein Goal',
          source: 'CNET Health',
          url: 'https://www.cnet.com/health/nutrition/youve-probably-hit-your-protein-goal-heres-what-experts-think-you-need-instead/',
        },
        {
          title: 'Protein Requirements & Active Adults',
          source: 'NCBI Review',
          url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7551460/',
        },
      ],
    },
    {
      category: '🏋️ Recovery',
      links: [
        {
          title: 'Why Recovery Is Essential in Fitness',
          source: 'ACE Fitness',
          url: 'https://www.acefitness.org/education-and-resources/lifestyle/blog/7437/the-importance-of-recovery-in-fitness/',
        },
        {
          title: 'Recovery Tips for Men Over 35',
          source: 'Men’s Health',
          url: 'https://www.menshealth.com/fitness/a19546766/workout-recovery-tips/',
        },
      ],
    },
    {
      category: '😴 Sleep',
      links: [
        {
          title: 'How Sleep Works',
          source: 'Sleep Foundation',
          url: 'https://www.sleepfoundation.org/how-sleep-works',
        },
        {
          title: 'Sleep & Aging',
          source: 'Mayo Clinic',
          url: 'https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/sleep/art-20048379',
        },
      ],
    },
    {
      category: '🧬 Supplements',
      links: [
        {
          title: 'Protein Supplements vs. Food',
          source: 'Mayo Clinic',
          url: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/protein-supplements/faq-20058342',
        },
        {
          title: 'Collagen & Aging Effects',
          source: 'NCBI Clinical Review',
          url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6520897/',
        },
      ],
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
        📚 Trusted Health & Wellness Resources
      </h2>

      {resources.map((section) => (
        <div key={section.category} id={section.category.toLowerCase().split(' ')[1]} className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">{section.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.links.map((link) => (
              <ResourceCard
                key={link.url}
                title={link.title}
                source={link.source}
                url={link.url}
                category={section.category}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
