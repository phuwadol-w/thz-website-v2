import { getPayload } from 'payload'
import config from '@payload-config'

// ═══════════════════════════════════════════════════════
// Server-side data fetching utilities for Payload CMS Globals
// ═══════════════════════════════════════════════════════

export async function getSettings() {
  try {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'settings' })
    return settings
  } catch (error) {
    console.error('Failed to fetch settings:', error)
    return null
  }
}

export async function getHomepage() {
  try {
    const payload = await getPayload({ config })
    const homepage = await payload.findGlobal({ slug: 'homepage' })
    return homepage
  } catch (error) {
    console.error('Failed to fetch homepage:', error)
    return null
  }
}

export async function getNavigation() {
  try {
    const payload = await getPayload({ config })
    const navigation = await payload.findGlobal({ slug: 'navigation' })
    return navigation
  } catch (error) {
    console.error('Failed to fetch navigation:', error)
    return null
  }
}

export async function getFooterConfig() {
  try {
    const payload = await getPayload({ config })
    const footer = await payload.findGlobal({ slug: 'footer-config' })
    return footer
  } catch (error) {
    console.error('Failed to fetch footer config:', error)
    return null
  }
}
