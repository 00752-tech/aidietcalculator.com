'use client'

import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const EeatResourceLinks = dynamic(() => import('@/components/EeatResourceLinks'), {
  ssr: false,
})

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Expert Health Resources | AI Diet Calculator</title>
        <meta
          name="description"
          content="Explore curated scientific and clinical health resources from Mayo Clinic, Healthline, NCBI, and more."
        />
      </Head>

      <main className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Curated Resource Hub</h1>
          <EeatResourceLinks />
        </div>
      </main>
    </>
  )
}
