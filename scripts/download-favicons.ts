import fs from 'fs'
import https from 'https'
import path from 'path'

const faviconUrl = 'https://pplx-res.cloudinary.com/image/private/user_uploads/21441830/cadae564-6085-4495-9700-396dbcc28c1a/ai-diet-calc-favicon.jpg'
const filename = 'favicon.jpg'

const downloadFavicon = (url, filename) => {
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

const main = async () => {
  try {
    await downloadFavicon(faviconUrl, filename)
    console.log('Favicon download complete!')
  } catch (error) {
    console.error(error)
  }
}

main()
