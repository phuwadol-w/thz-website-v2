import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Products } from './collections/Products'
import { Gallery } from './collections/Gallery'
import { Pages } from './collections/Pages'
import { Submissions } from './collections/Submissions'
import { Media } from './collections/Media'

import { Settings } from './globals/Settings'
import { Homepage } from './globals/Homepage'
import { Navigation } from './globals/Navigation'
import { FooterConfig } from './globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' | THZ Admin',
      description: 'จัดการเว็บไซต์ THaiCraftworkZ (THZ)',
    },
  },
  collections: [
    Users,
    Products,
    Gallery,
    Pages,
    Submissions,
    Media,
  ],
  globals: [
    Settings,
    Homepage,
    Navigation,
    FooterConfig,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'thz-dev-secret-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/thz',
  }),
})
