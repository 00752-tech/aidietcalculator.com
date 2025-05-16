// next.config.mjs
import path from 'path'
import { fileURLToPath } from 'url'

// Convert the URL to a path for __dirname equivalent
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
      '@': __dirname,
      '@/components': path.join(__dirname, 'components'),
      '@/components/ui': path.join(__dirname, 'components/ui'),
      '@/lib': path.join(__dirname, 'lib'),
      '@/utils': path.join(__dirname, 'lib/utils'),
      '@/hooks': path.join(__dirname, 'hooks'),
      '@/styles': path.join(__dirname, 'styles'),
    }
    return config
  },
}

// Try to load user config if exists
let userConfig = {}
try {
  userConfig = (await import('./v0-user-next.config.js')).default
} catch (e) {
  console.log('No user config found, using base configuration only')
}

export default mergeConfigs(baseConfig, userConfig)
