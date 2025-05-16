// @ts-check
const path = require('path')

/**
 * Helper function to merge configurations
 */
function mergeConfigs(baseConfig, userConfig) {
  if (!userConfig) return baseConfig

  const merged = { ...baseConfig }
  for (const key in userConfig) {
    if (typeof merged[key] === 'object' && !Array.isArray(merged[key])) {
      merged[key] = { ...merged[key], ...userConfig[key] }
    } else {
      merged[key] = userConfig[key]
    }
  }
  return merged
}

/** @type {import('next').NextConfig} */
const baseConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  webpack: (config) => {
    // Configure path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/components/ui': path.resolve(__dirname, 'components/ui'),
      '@/lib': path.resolve(__dirname, 'lib'),
      '@/utils': path.resolve(__dirname, 'lib/utils'),
      '@/hooks': path.resolve(__dirname, 'hooks'),
      '@/styles': path.resolve(__dirname, 'styles'),
    }
    return config
  },
}

// Try to load user config if exists
let userConfig = {}
try {
  userConfig = require('./v0-user-next.config')
} catch (e) {
  console.log('No user config found, using base configuration only')
}

module.exports = mergeConfigs(baseConfig, userConfig)
