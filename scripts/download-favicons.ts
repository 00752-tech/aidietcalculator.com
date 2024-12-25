import fs from 'fs'
import https from 'https'
import path from 'path'

const faviconUrls = [
  {
    url: 'https://internetmillionaire.vip/wp-content/uploads/2024/12/270-by-270.png',
    filename: 'favicon-270x270.png'
  },
  {
    url: 'https://internetmillionaire.vip/wp-content/uploads/2024/12/192-by-192.png',
    filename: 'favicon-192x192.png'
  },
  {
    url: 'https://internetmillionaire.vip/wp-content/uploads/2024/12/180-by-180.png',
    filename: 'favicon-180x180.png'
  },
  {
    url: 'https://internetmillionaire.vip/wp-content/uploads/2024/12/favicon-48-by-48.png',
    filename: 'favicon-48x48.png'
  }
]

const downloadFavicon = (url: string, filename: string) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const filePath = path.join(process.cwd(), 'public', filename)
        const fileStream = fs.createWriteStream(filePath)
        response.pipe(fileStream)
        fileStream.on('finish', () => {
          fileStream.close()
          console.log(`Downloaded: ${filename}`)
          resolve(null)
        })
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`))
      }
    }).on('error', (error) => {
      reject(error)
    })
  })
}

const downloadAllFavicons = async () => {
  for (const favicon of faviconUrls) {
    try {
      await downloadFavicon(favicon.url, favicon.filename)
    } catch (error) {
      console.error(error)
    }
  }
}

downloadAllFavicons()
