import express from 'express'
import { ImageProcessing } from '../utils/image-processing'
import { isNull } from '../utils/string-helpers'

export const ImageThumbChecker = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  console.log('Check if Image exist in Thumbnail')

  const filename: string = req.query?.filename as unknown as string
  let width: number = req.query?.width as unknown as number
  let height: number = req.query?.height as unknown as number

  if (!isNull(filename)) {
    if (width > 0 && height > 0) {
      width = Number(width)
      height = Number(height)
      console.log('Serve the thumbed image file')

      const inputPath = await ImageProcessing.isImageThumbnailed(
        filename + '_' + width.toString() + '_' + height.toString()
      )
      if (!isNull(inputPath)) {
        res.sendFile(inputPath)
        return
      }
    }
  }

  next()
}
